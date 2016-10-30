'use strict';

module.exports = function(Address) {
	//not expose crud methods
	Address.disableRemoteMethod('create', true)
	Address.disableRemoteMethod('upsert', true)
	Address.disableRemoteMethod('deleteById', true)
	Address.disableRemoteMethod('updateById', true)
	Address.disableRemoteMethod('updateAll', true)
	Address.disableRemoteMethod('updateAttributes', false)
	Address.disableRemoteMethod('createChangeStream', true)
	Address.disableRemoteMethod('replaceOrCreate', true)
	Address.disableRemoteMethod('replaceById', true)
	Address.disableRemoteMethod('upsertWithWhere', true)

	//not expose crud related models methods
	Address.disableRemoteMethod('__create__gasStations', false)
	Address.disableRemoteMethod('__delete__gasStations', false)
	Address.disableRemoteMethod('__destroyById__gasStations', false)
	Address.disableRemoteMethod('__updateById__gasStations', false)
};
