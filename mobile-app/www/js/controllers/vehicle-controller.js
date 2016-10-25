angular.module('save-my-gas')
.controller('VehicleController',
function(
	$scope,
	$state,
	$ionicPopup,
	crud,
	converters
) {
	$scope.vehicles = crud.getAll('vehicle')

	$scope.delete = function(vehicle) {
		$ionicPopup.confirm({
				title: 'Delete',
				template: 'Do you want delete this vehicle?'
			})
			.then(function(yes) {
				if (yes) {

					var data = {
						title: 'Result'
					}
					if (crud.delete('vehicle', vehicle)) {
						//show success message
						data.msg = 'deleted!'
						$scope.vehicles = crud.getAll('vehicle')
					} else {
						//show error message
						data.msg = '!error!'
					}

					//temporary message
					$ionicPopup.alert({
						title: data.title,
						template: data.msg
					})
				}
			})
	}
})

.controller('VehicleEditController',
function(
	$scope,
	$state,
	$stateParams,
	crud,
	converters
) {
	var ObjToArray = function(obj) {
		var asArray = []
		for (var i in obj) {
			if (obj.hasOwnProperty(i)) {
				asArray.push(obj[i])
			}
		}
		return asArray
	}

	$scope.vehicle = crud.get('vehicle', $stateParams.id)
	if (!$scope.vehicle) //set default values
		$scope.vehicle = {
		autoUpdateConsumption: true,
		unit: converters.consumption.units.kpl //switch depending language
	}
	$scope.consumptionUnits = ObjToArray(converters.consumption.units)
	$scope.powerVehicles = [{
		label: '1.0',
		value: 1.0
	}, {
		label: '1.1',
		value: 1.1
	}, {
		label: '1.2',
		value: 1.2
	}, {
		label: '1.3',
		value: 1.3
	}, {
		label: '1.4',
		value: 1.4
	}, {
		label: '1.5',
		value: 1.5
	}, {
		label: '1.6',
		value: 1.6
	}, {
		label: '1.7',
		value: 1.7
	}, {
		label: '1.8',
		value: 1.8
	}, {
		label: '1.9',
		value: 1.9
	}, {
		label: '2.0',
		value: 2.0
	}, {
		label: '3.0',
		value: 3.0
	}, {
		label: '4.0',
		value: 4.0
	}, ]

	$scope.vehicleType = [{
		id: 1,
		name: 'car',
		img: 'default-car.png'
	}, {
		id: 2,
		name: 'motocycle',
		img: 'default-moto.png'
	}, {
		id: 3,
		name: 'truck',
		img: 'default-truck.png'
	}, {
		id: 3,
		name: 'van',
		img: 'default-van.jpg'
	}]

	$scope.saveVehicle = function(vehicle) {
		var entity = angular.copy(vehicle)

		if (crud.getAll('vehicle').length == 0) {
			entity.selected = true
		}

		if (crud.save('vehicle', entity)) {
			//show dialog or another message of saved
			delete $scope.vehicle
			$state.go('app.vehicle')
		} else {
			//show dialog or another message of error
		}
	}

	$scope.selectVehicle = function(vehicle) {
		var entity = angular.copy(vehicle)

		if (crud.getAll('vehicle').length == 0) {
			return
		}

		var entities = crud.getAll('vehicle')
		var errors = 0

		entities.forEach(function(obj, i) {
			obj.selected = false
			if (obj.id == entity.id)
				obj.seleselected = true

			if (!crud.save('vehicle', obj))
				errors++
		})

		if (errors > 0) {
			//show dialog or another message of error
		}
	}
})
