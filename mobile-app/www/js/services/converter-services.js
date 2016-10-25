angular.module('save-my-gas')
.factory('ConverterServices',
function(
) {
	var ConverterServices = {
		consumption: {
			units: {
				kpl: {
					value: 2.82481,
					unit: 'km/l',
					description: 'kilometer per liter'
				}, //kpl to mpg
				mpg: {
					value: 0.832674,
					unit: 'ml/g',
					description: 'milles per gallon'
				}, //mpg to mpgus
				mpgus: {
					value: 2.35215,
					unit: 'ml/g (us)',
					description: 'milles per gallon (us)'
				}, //kpl to mpgus
			},

			mpgToKpl: function(value) {
				return value / this.units.kpl.value
			},
			kplToMpg: function(value) {
				return value * this.units.kpl.value
			},
			mpgToMpgUs: function(value) {
				return value * this.units.mpg.value
			},
			mpgUsToMpg: function(value) {
				return value / this.units.mpg.value
			},
			mpgUsToKpl: function(value) {
				return value / this.units.mpgus.value
			},
			kplToMpgUs: function(value) {
				return value * this.units.mpgus.value
			}
		},

		liquid: {
			units: {
				l: 0.219969, //l to g
				g: 1.20095, //g to gus
				gus: 0.264172 //l to gus
			},

			lToGal: function(value) {
				return value * this.units.l
			},
			lToGalUs: function(value) {
				return value * this.units.gus
			},
			galToGalUs: function(value) {
				return value * this.units.g
			},
			galToL: function(value) {
				return value / this.units.l
			},
			galUsToGal: function(value) {
				return value / this.units.g
			},
			galUsToL: function(value) {
				return value / this.units.gus
			}
		},

		length: {
			unit: 1.609344, //ml to km, standard with us and uk

			kmToMl: function(value) {
				return value / this.unit
			},
			mlToKm: function(value) {
				return value * this.unit
			}
		},

		distance: {
			latLngDiag1Km: 0.00635204829695035,
			latLng1Km: 0.008983152841195216238567855526753191953, //(1.0000000000000002 km)
			distanceLitersConsumption: function(distance, vehicle) {
				//distance will always use kilometers, the google default unit
				// vehicleObjExpects = { unit: 'kpl ex.', consumption: '10(kpl)' }
				var vehicleConsumption = 0

				//transform vehicle consumption unit to google unit (?)
				if (vehicle.unit.value === ConverterServices.consumption.units.kpl.value) {
					//unit ok do nothing
					vehicleConsumption = vehicle.consumption
				} else if (vehicle.unit.value === ConverterServices.consumption.units.mpg.value) {
					vehicleConsumption = ConverterServices.consumption.MPGtoKPL(vehicle.consumption)
				} else if (vehicle.unit.value === ConverterServices.consumption.units.mpgus.value) {
					vehicleConsumption = ConverterServices.consumption.MPGUStoKPL(vehicle.consumption)
				} else {
					return 'Error: vehicle unit not recognized'
				}

				return vehicleConsumption * (distance.value / 1000) //distance come in meters
			},

			distanceGalonsConsumption: function(distance, vehicle) {
				var distanceLiters = ConverterServices.distance.distanceLitersConsumption(distance, vehicle)
				return ConverterServices.consumption.liquid.lToGal(distanceLiters)
			},

			distanceGalonsUsConsumption: function(distance, vehicle) {
				var distanceLiters = ConverterServices.distance.distanceLitersConsumption(distance, vehicle)
				return ConverterServices.consumption.liquid.lToGalUs(distanceLiters)
			},

			fuelCostUs: function(fuelBasePrices, fuelQuantity, liquidUnit) {
				//verify the default unit of fuel to make this computation
				//we will assume galons (im) as default unit for now
				var fuelGalons = 0,
					fuelPriceAverage = 0

				//do the average
				if (fuelBasePrices.length && fuelBasePrices.length > 0) {
					fuelPriceAverage = fuelBasePrices.reduce(function(prev, curr, i) {
						return prev + curr
					})
					fuelPriceAverage = fuelPriceAverage / fuelBasePrices.length
				} else {
					fuelPriceAverage = fuelBasePrices
				}

				//normalize fuel unit
				if (liquidUnit === ConverterServices.liquid.units.g) {
					fuelGalons = fuelQuantity
				} else if (liquidUnit === ConverterServices.liquid.units.gus) {
					fuelGalons = ConverterServices.liquid.galUsToGal(fuelQuantity)
				} else if (liquidUnit === ConverterServices.liquid.units.l) {
					fuelGalons = ConverterServices.liquid.lToGal(fuelQuantity)
				} //barrels ? <- :(

				return fuelGalons * fuelPriceAverage
			},

			coordsToKm: function(coord1, coord2) { // generally used geo measurement function
				var lat1 = coord1.latitude,
					lon1 = coord1.longitude,
					lat2 = coord2.latitude,
					lon2 = coord2.longitude
				var R = 6378.137 // Radius of earth in KM
				var dLat = (lat2 - lat1) * Math.PI / 180
				var dLon = (lon2 - lon1) * Math.PI / 180
				var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
					Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
					Math.sin(dLon / 2) * Math.sin(dLon / 2)
				var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
				var d = R * c
				return d // km
			}
		}
	}

	return ConverterServices
})
