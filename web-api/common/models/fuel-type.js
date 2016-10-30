'use strict';

module.exports = function(FuelType) {
	//not expose crud methods
	FuelType.disableRemoteMethod('create', true)
	FuelType.disableRemoteMethod('upsert', true)
	FuelType.disableRemoteMethod('deleteById', true)
	FuelType.disableRemoteMethod('updateById', true)
	FuelType.disableRemoteMethod('updateAll', true)
	FuelType.disableRemoteMethod('updateAttributes', false)
	FuelType.disableRemoteMethod('createChangeStream', true)
	FuelType.disableRemoteMethod('replaceOrCreate', true)
	FuelType.disableRemoteMethod('replaceById', true)
	FuelType.disableRemoteMethod('upsertWithWhere', true)

	//not expose crud related models methods
	FuelType.disableRemoteMethod('__create__vehicles', false)
	FuelType.disableRemoteMethod('__delete__vehicles', false)
	FuelType.disableRemoteMethod('__destroyById__vehicles', false)
	FuelType.disableRemoteMethod('__updateById__vehicles', false)

	FuelType.disableRemoteMethod('__create__fuelPrices', false)
	FuelType.disableRemoteMethod('__delete__fuelPrices', false)
	FuelType.disableRemoteMethod('__destroyById__fuelPrices', false)
	FuelType.disableRemoteMethod('__updateById__fuelPrices', false)
};
