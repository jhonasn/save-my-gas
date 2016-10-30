'use strict';

module.exports = function(FuelPrice) {
	//not expose crud methods
	FuelPrice.disableRemoteMethod('create', true)
	FuelPrice.disableRemoteMethod('upsert', true)
	FuelPrice.disableRemoteMethod('deleteById', true)
	FuelPrice.disableRemoteMethod('updateById', true)
	FuelPrice.disableRemoteMethod('updateAll', true)
	FuelPrice.disableRemoteMethod('updateAttributes', false)
	FuelPrice.disableRemoteMethod('createChangeStream', true)
	FuelPrice.disableRemoteMethod('replaceOrCreate', true)
	FuelPrice.disableRemoteMethod('replaceById', true)
	FuelPrice.disableRemoteMethod('upsertWithWhere', true)
};
