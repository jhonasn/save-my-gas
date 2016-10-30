'use strict';

module.exports = function(VehicleType) {
	//not expose crud methods
	// VehicleType.disableRemoteMethod('create', true)
	VehicleType.disableRemoteMethod('upsert', true)
	VehicleType.disableRemoteMethod('deleteById', true)
	VehicleType.disableRemoteMethod('updateById', true)
	VehicleType.disableRemoteMethod('updateAll', true)
	VehicleType.disableRemoteMethod('updateAttributes', false)
	// VehicleType.disableRemoteMethod('createChangeStream', true)
	VehicleType.disableRemoteMethod('replaceOrCreate', true)
	VehicleType.disableRemoteMethod('replaceById', true)
	VehicleType.disableRemoteMethod('upsertWithWhere', true)

	//not expose crud related models methods
	// VehicleType.disableRemoteMethod('__create__vehicles', false)
	VehicleType.disableRemoteMethod('__delete__vehicles', false)
	VehicleType.disableRemoteMethod('__destroyById__vehicles', false)
	// VehicleType.disableRemoteMethod('__updateById__vehicles', false)
};
