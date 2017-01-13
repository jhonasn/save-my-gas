angular.module('save-my-gas')

.factory('gasStationService', function(
	$q,
	GasStation,
	FuelType,
	FuelPrice,
	GasStationRating,
	GasStationComment,
	utilService,
	geolocationService
) {
	var gasStationService = {
		getFuelTypes: function(client) {
			if (typeof client !== 'boolean') {
				client = true
			}

			return FuelType.find({
				filter: {
					where: {
						clientShow: client
					}
				}
			})
		},

		filterGasStation: function(geolocation, radius, fuelTypes, name, limit, skip) {
			var defered = $q.defer()

			if ((fuelTypes && !fuelTypes.length) || !fuelTypes) {
				return
			} else if (!geolocation && !name) {
				// with this the location-selector stop working, i don't know why
				// defered.resolve(null)
				// return defered.promise
				return
			}

			var filter = {
				where: {
					hasPrices: true
				},

				fields: [
					'id',
					'companyName',
					'flag',
					//'logo',
					'geolocation',
					'cityId'
				],
				include: {
					relation: 'city',
					scope: {
						fields: ['id', 'name']
					}
				}
			}

			if (limit) {
				filter.limit = limit
			}
			if (skip) {
				filter.skip = skip
			}

			if (geolocation && geolocation.latitude && geolocation.longitude) {
				filter.where.geolocation = {
					near: {
						lat: geolocation.latitude,
						lng: geolocation.longitude
					}
				}

				if (radius) {
					filter.where.geolocation.maxDistance = radius
					filter.where.geolocation.unit = 'kilometers'
				}
			}

			var fuelTypeIdsObj = gasStationService.evaluateFuelTypes(fuelTypes)

			if (fuelTypeIdsObj) {
				filter.where.or = []
				fuelTypeIdsObj.forEach(function(ft) {
					filter.where.or.push({
						fuelTypeIds: {
							inq: [ft.fuelTypeId]
						}
					})
				})
			} else {
				return
			}

			if (name) {
				if (!filter.where.or) {
					filter.where.or = []
				}

				filter.where.or.push({
					companyName: {
						like: name
					}
				})
				filter.where.or.push({
					flag: {
						like: name
					}
				})
			}

			var gasStations = GasStation.find({
					filter: filter
				})
				.$promise
				.then(function(gasStations) {
					var gasStationPromises = []
					gasStations.forEach(function (gasStation) {
						var promise = gasStationService.gasStationAddInfo(
							gasStation,
							geolocation,
							fuelTypes
						)
						gasStationPromises.push(promise)
					})

					$q.all(gasStationPromises)
						.then(function(fuelPrices) {
							defered.resolve(gasStations)
						})
						.catch(defered.reject)
				})
				.catch(defered.reject)

			return defered.promise
		},

		evaluateFuelTypes: function(fuelTypes) {
			var fuelTypeIdsObj = null
			if (typeof fuelTypes[0] === 'string') {
				fuelTypeIdsObj = fuelTypes.map(function(ftId) {
					return {
						fuelTypeId: ftId
					}
				})
			} else if (fuelTypes[0].id) {
				fuelTypeIdsObj = fuelTypes.map(function(ft) {
					return {
						fuelTypeId: ft.id
					}
				})
			} else if (fuelTypes[0].fuelTypeId && Object.keys(fuelTypes[0]).length) {
				fuelTypeIdsObj = fuelTypes.map(function(ft) {
					return {
						fuelTypeId: ft.fuelTypeId
					}
				})
			} else if (fuelTypes[0].fuelTypeId) {
				fuelTypeIdsObj = fuelTypes
			}

			return fuelTypeIdsObj
		},

		gasStationAddInfo: function(gasStation, geolocation, fuelTypes) {
			var defered = $q.defer()
			var gasStationPromises = []
			var fuelTypeIdsObj = gasStationService.evaluateFuelTypes(fuelTypes)

			//calc distance and put value in meters
			if (geolocation && geolocation.latitude && geolocation.longitude) {
				gasStation.distance = geolocationService.distanceBetween(
					utilService.toGeoPoint(geolocation),
					gasStation.geolocation
				) * 1000
			}

			//get fuel prices
			var fuelPriceFilter = {
				order: 'date DESC',
				fields: ['sale', 'gasStationId'],
				where: {
					gasStationId: gasStation.id
				}
			}

			if (!Array.isArray(gasStation.fuelPrices)) {
				gasStation.fuelPrices = []
			}

			fuelTypeIdsObj.forEach(function(ft) {
				var thisFuelTypePriceFilter = angular.copy(fuelPriceFilter)
				thisFuelTypePriceFilter.where.fuelTypeId = ft.fuelTypeId
				thisFuelTypePriceFilter.limit = 1

				var promise = FuelPrice.find({
						filter: thisFuelTypePriceFilter
					})
					.$promise
					.then(function(fuelPrices) {
						if (fuelPrices && fuelPrices.length) {
							var fuelPrice = fuelPrices[0]
							var fuelType = fuelTypes.filter(function(fto) {
								return fto === ft.fuelTypeId ||
									fto.id === ft.fuelTypeId ||
									fto.fuelTypeId === ft.fuelTypeId
							})
							if (fuelType.length) {
								fuelType = fuelType[0]
							}
							fuelPrice.fuelType = fuelType
							gasStation.fuelPrices.push(fuelPrice)
						}
					})
				gasStationPromises.push(promise)
			})

			//get ratings
			var ratingCountPromise = GasStationRating.count({
					where: {
						gasStationId: gasStation.id
					}
				})
				.$promise
				.then(function(result) {
					gasStation.ratingCount = result.count
				})

			var averagePromise = GasStationRating.average({
					gasStationId: gasStation.id
				})
				.$promise
				.then(function(result) {
					gasStation.rating = result.average
						//the plugin counts +1 if number is greater then the floor
						//so...
					if (gasStation.rating >= 0 && gasStation.rating % 1 < 0.5) {
						gasStation.rating = Math.floor(gasStation.rating)
					}
				})

			gasStationPromises.push(ratingCountPromise)
			gasStationPromises.push(averagePromise)

			$q.all(gasStationPromises)
				.then(function(fuelPrices) {
					defered.resolve(gasStation)
				})
				.catch(defered.reject)

			return defered.promise
		},

		findById: function(id, geolocation, fuelTypes) {
			var defered = $q.defer()

			if(!fuelTypes || !fuelTypes.length) {
				gasStationService.getFuelTypes()
				.$promise
				.then(function (fuelTypes) {
					gasStationService.getGasStationById(id, geolocation, fuelTypes)
					.then(defered.resolve)
					.catch(defered.reject)
				})
				.catch(defered.reject)
			} else {
				gasStationService.getGasStationById(id, geolocation, fuelTypes)
				.then(defered.resolve)
				.catch(defered.reject)
			}

			return defered.promise
		},

		getGasStationById: function (id, geolocation, fuelTypes) {
			var defered = $q.defer()
			GasStation.findById({
					id: id
				})
				.$promise
				.then(function(gasStation) {
					gasStationService.gasStationAddInfo(gasStation, geolocation, fuelTypes)
					.then(defered.resolve)
					.catch(defered.reject)
				})
				.catch(defered.reject)

			return defered.promise
		}
	}

	return gasStationService
})
