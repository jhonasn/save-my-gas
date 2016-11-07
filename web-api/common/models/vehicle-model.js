'use strict';

module.exports = function(VehicleModel) {
	// not expose crud methods
	VehicleModel.disableRemoteMethod('create', true)
	VehicleModel.disableRemoteMethod('upsert', true)
	VehicleModel.disableRemoteMethod('deleteById', true)
	VehicleModel.disableRemoteMethod('updateById', true)
	VehicleModel.disableRemoteMethod('updateAll', true)
	VehicleModel.disableRemoteMethod('updateAttributes', false)
	VehicleModel.disableRemoteMethod('createChangeStream', true)
	VehicleModel.disableRemoteMethod('replaceOrCreate', true)
	VehicleModel.disableRemoteMethod('replaceById', true)
	VehicleModel.disableRemoteMethod('upsertWithWhere', true)

	//not expose crud related models methods
	VehicleModel.disableRemoteMethod('__create__vehicles', false)
	VehicleModel.disableRemoteMethod('__delete__vehicles', false)
	VehicleModel.disableRemoteMethod('__destroyById__vehicles', false)
	VehicleModel.disableRemoteMethod('__updateById__vehicles', false)

	//not expose crud related models methods
	VehicleModel.disableRemoteMethod('__create__vehicleEngines', false)
	VehicleModel.disableRemoteMethod('__delete__vehicleEngines', false)
	VehicleModel.disableRemoteMethod('__destroyById__vehicleEngines', false)
	VehicleModel.disableRemoteMethod('__updateById__vehicleEngines', false)
};
