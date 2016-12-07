'use strict'

module.exports = function(Vehicle) {
	//not expose crud related models methods
	Vehicle.disableRemoteMethod('__create__gasStations', false)
	Vehicle.disableRemoteMethod('__delete__gasStations', false)
	Vehicle.disableRemoteMethod('__destroyById__gasStations', false)
	Vehicle.disableRemoteMethod('__updateById__gasStations', false)
	Vehicle.disableRemoteMethod('__link__gasStations', false)
	Vehicle.disableRemoteMethod('__unlink__gasStations', false)

	// Vehicle.disableRemoteMethod('__create__vehicleRefuels', false)
	// Vehicle.disableRemoteMethod('__delete__vehicleRefuels', false)
	// Vehicle.disableRemoteMethod('__destroyById__vehicleRefuels', false)
	// Vehicle.disableRemoteMethod('__updateById__vehicleRefuels', false)
	// Vehicle.disableRemoteMethod('__link__vehicleRefuels', false)
	// Vehicle.disableRemoteMethod('__unlink__vehicleRefuels', false)
}
