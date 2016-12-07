'use strict';

module.exports = function(GasStation) {
	//not expose crud methods
	GasStation.disableRemoteMethod('create', true)
	GasStation.disableRemoteMethod('upsert', true)
	GasStation.disableRemoteMethod('deleteById', true)
	GasStation.disableRemoteMethod('updateById', true)
	GasStation.disableRemoteMethod('updateAll', true)
	GasStation.disableRemoteMethod('updateAttributes', false)
	GasStation.disableRemoteMethod('createChangeStream', true)
	GasStation.disableRemoteMethod('replaceOrCreate', true)
	GasStation.disableRemoteMethod('replaceById', true)
	GasStation.disableRemoteMethod('upsertWithWhere', true)

	//not expose crud related models methods
	GasStation.disableRemoteMethod('__create__fuelPrices', false)
	GasStation.disableRemoteMethod('__delete__fuelPrices', false)
	GasStation.disableRemoteMethod('__destroyById__fuelPrices', false)
	GasStation.disableRemoteMethod('__updateById__fuelPrices', false)

	GasStation.disableRemoteMethod('__create__vehicles', false)
	GasStation.disableRemoteMethod('__delete__vehicles', false)
	GasStation.disableRemoteMethod('__destroyById__vehicles', false)
	GasStation.disableRemoteMethod('__updateById__vehicles', false)
	GasStation.disableRemoteMethod('__link__vehicles', false)
	GasStation.disableRemoteMethod('__unlink__vehicles', false)

	GasStation.disableRemoteMethod('__create__vehicleRefuels', false)
	GasStation.disableRemoteMethod('__delete__vehicleRefuels', false)
	GasStation.disableRemoteMethod('__destroyById__vehicleRefuels', false)
	GasStation.disableRemoteMethod('__updateById__vehicleRefuels', false)

	GasStation.disableRemoteMethod('__create__fuelPriceSuggestions', false)
	GasStation.disableRemoteMethod('__delete__fuelPriceSuggestions', false)
	GasStation.disableRemoteMethod('__destroyById__fuelPriceSuggestions', false)
	GasStation.disableRemoteMethod('__updateById__fuelPriceSuggestions', false)
};
