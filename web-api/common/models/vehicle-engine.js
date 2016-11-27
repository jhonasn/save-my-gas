'use strict';

module.exports = function(VehicleEngine) {
	// not expose crud methods
	// VehicleEngine.disableRemoteMethod('create', true)
	// VehicleEngine.disableRemoteMethod('upsert', true)
	VehicleEngine.disableRemoteMethod('deleteById', true)
	// VehicleEngine.disableRemoteMethod('updateById', true)
	VehicleEngine.disableRemoteMethod('updateAll', true)
	// VehicleEngine.disableRemoteMethod('updateAttributes', false)
	// VehicleEngine.disableRemoteMethod('createChangeStream', true)
	// VehicleEngine.disableRemoteMethod('replaceOrCreate', true)
	// VehicleEngine.disableRemoteMethod('replaceById', true)
	VehicleEngine.disableRemoteMethod('upsertWithWhere', true)

	//not expose crud related models methods
	VehicleEngine.disableRemoteMethod('__create__vehicles', false)
	VehicleEngine.disableRemoteMethod('__delete__vehicles', false)
	VehicleEngine.disableRemoteMethod('__destroyById__vehicles', false)
	VehicleEngine.disableRemoteMethod('__updateById__vehicles', false)
};
