'use strict';

module.exports = function(City) {
	//not expose crud methods
	City.disableRemoteMethod('create', true)
	City.disableRemoteMethod('upsert', true)
	City.disableRemoteMethod('deleteById', true)
	City.disableRemoteMethod('updateById', true)
	City.disableRemoteMethod('updateAll', true)
	City.disableRemoteMethod('updateAttributes', false)
	City.disableRemoteMethod('createChangeStream', true)
	City.disableRemoteMethod('replaceOrCreate', true)
	City.disableRemoteMethod('replaceById', true)
	City.disableRemoteMethod('upsertWithWhere', true)

	//not expose crud related models methods
	City.disableRemoteMethod('__create__addresses', false)
	City.disableRemoteMethod('__delete__addresses', false)
	City.disableRemoteMethod('__destroyById__addresses', false)
	City.disableRemoteMethod('__updateById__addresses', false)

	City.disableRemoteMethod('__create__neighborhoods', false)
	City.disableRemoteMethod('__delete__neighborhoods', false)
	City.disableRemoteMethod('__destroyById__neighborhoods', false)
	City.disableRemoteMethod('__updateById__neighborhoods', false)

	City.disableRemoteMethod('__create__gasStations', false)
	City.disableRemoteMethod('__delete__gasStations', false)
	City.disableRemoteMethod('__destroyById__gasStations', false)
	City.disableRemoteMethod('__updateById__gasStations', false)
};
