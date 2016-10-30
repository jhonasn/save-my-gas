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
};
