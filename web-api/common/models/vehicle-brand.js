'use strict';

module.exports = function(VehicleBrand) {
	//not expose crud methods
	VehicleBrand.disableRemoteMethod('create', true)
	VehicleBrand.disableRemoteMethod('upsert', true)
	VehicleBrand.disableRemoteMethod('deleteById', true)
	VehicleBrand.disableRemoteMethod('updateById', true)
	VehicleBrand.disableRemoteMethod('updateAll', true)
	VehicleBrand.disableRemoteMethod('updateAttributes', false)
	VehicleBrand.disableRemoteMethod('createChangeStream', true)
	VehicleBrand.disableRemoteMethod('replaceOrCreate', true)
	VehicleBrand.disableRemoteMethod('replaceById', true)
	VehicleBrand.disableRemoteMethod('upsertWithWhere', true)

	//not expose crud related models methods
	VehicleBrand.disableRemoteMethod('__create__vehicles', false)
	VehicleBrand.disableRemoteMethod('__delete__vehicles', false)
	VehicleBrand.disableRemoteMethod('__destroyById__vehicles', false)
	VehicleBrand.disableRemoteMethod('__updateById__vehicles', false)

	VehicleBrand.disableRemoteMethod('__create__vehicleModels', false)
	VehicleBrand.disableRemoteMethod('__delete__vehicleModels', false)
	VehicleBrand.disableRemoteMethod('__destroyById__vehicleModels', false)
	VehicleBrand.disableRemoteMethod('__updateById__vehicleModels', false)
};
