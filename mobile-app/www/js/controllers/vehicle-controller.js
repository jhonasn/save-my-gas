angular.module('save-my-gas')
	.controller('vehicleController',
		function(
			$scope,
			// converterServices,
			authService,
			User
		) {
			$scope.collection = User.vehicles({
				id: authService.getUser().userId
			})
		})

.controller('vehicleEditController',
	function(
		$scope,
		authService,
		Vehicle
		// converterServices
	) {
		$scope.createTestVehicle = function() {
				$scope.model = Vehicle.create({
					"year": 2016,
					"consumption": 2.5,
					"power": 1.0,
					"model": "carrin 1",
					"ownerId": authService.getUser().userId//,
					// "vehicleTypeId": "string",
					// "fuelTypeId": "string"
				})
			}
			// var ObjToArray = function(obj) {
			// 	var asArray = []
			// 	for (var i in obj) {
			// 		if (obj.hasOwnProperty(i)) {
			// 			asArray.push(obj[i])
			// 		}
			// 	}
			// 	return asArray
			// }
			//
			// $scope.vehicle = crud.get('vehicle', $stateParams.id)
			// if (!$scope.vehicle) //set default values
			// 	$scope.vehicle = {
			// 	autoUpdateConsumption: true,
			// 	unit: converterServices.consumption.units.kpl //switch depending language
			// }
			// $scope.consumptionUnits = ObjToArray(converterServices.consumption.units)
			// $scope.powerVehicles = [{
			// 	label: '1.0',
			// 	value: 1.0
			// }, {
			// 	label: '1.1',
			// 	value: 1.1
			// }, {
			// 	label: '1.2',
			// 	value: 1.2
			// }, {
			// 	label: '1.3',
			// 	value: 1.3
			// }, {
			// 	label: '1.4',
			// 	value: 1.4
			// }, {
			// 	label: '1.5',
			// 	value: 1.5
			// }, {
			// 	label: '1.6',
			// 	value: 1.6
			// }, {
			// 	label: '1.7',
			// 	value: 1.7
			// }, {
			// 	label: '1.8',
			// 	value: 1.8
			// }, {
			// 	label: '1.9',
			// 	value: 1.9
			// }, {
			// 	label: '2.0',
			// 	value: 2.0
			// }, {
			// 	label: '3.0',
			// 	value: 3.0
			// }, {
			// 	label: '4.0',
			// 	value: 4.0
			// }, ]
			//
			// $scope.vehicleType = [{
			// 	id: 1,
			// 	name: 'car',
			// 	img: 'default-car.png'
			// }, {
			// 	id: 2,
			// 	name: 'motocycle',
			// 	img: 'default-moto.png'
			// }, {
			// 	id: 3,
			// 	name: 'truck',
			// 	img: 'default-truck.png'
			// }, {
			// 	id: 3,
			// 	name: 'van',
			// 	img: 'default-van.jpg'
			// }]
			//
			// $scope.saveVehicle = function(vehicle) {
			// 	var entity = angular.copy(vehicle)
			//
			// 	if (crud.getAll('vehicle').length == 0) {
			// 		entity.selected = true
			// 	}
			//
			// 	if (crud.save('vehicle', entity)) {
			// 		//show dialog or another message of saved
			// 		delete $scope.vehicle
			// 		$state.go('app.vehicle')
			// 	} else {
			// 		//show dialog or another message of error
			// 	}
			// }
			//
			// $scope.selectVehicle = function(vehicle) {
			// 	var entity = angular.copy(vehicle)
			//
			// 	if (crud.getAll('vehicle').length == 0) {
			// 		return
			// 	}
			//
			// 	var entities = crud.getAll('vehicle')
			// 	var errors = 0
			//
			// 	entities.forEach(function(obj, i) {
			// 		obj.selected = false
			// 		if (obj.id == entity.id)
			// 			obj.seleselected = true
			//
			// 		if (!crud.save('vehicle', obj))
			// 			errors++
			// 	})
			//
			// 	if (errors > 0) {
			// 		//show dialog or another message of error
			// 	}
			// }
	})
