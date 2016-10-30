'use strict';

module.exports = function(Neighborhood) {
	//not expose crud methods
	Neighborhood.disableRemoteMethod('create', true)
	Neighborhood.disableRemoteMethod('upsert', true)
	Neighborhood.disableRemoteMethod('deleteById', true)
	Neighborhood.disableRemoteMethod('updateById', true)
	Neighborhood.disableRemoteMethod('updateAll', true)
	Neighborhood.disableRemoteMethod('updateAttributes', false)
	Neighborhood.disableRemoteMethod('createChangeStream', true)
	Neighborhood.disableRemoteMethod('replaceOrCreate', true)
	Neighborhood.disableRemoteMethod('replaceById', true)
	Neighborhood.disableRemoteMethod('upsertWithWhere', true)

	//not expose crud related models methods
	Neighborhood.disableRemoteMethod('__create__addresses', false)
	Neighborhood.disableRemoteMethod('__delete__addresses', false)
	Neighborhood.disableRemoteMethod('__destroyById__addresses', false)
	Neighborhood.disableRemoteMethod('__updateById__addresses', false)

	Neighborhood.disableRemoteMethod('__create__gasStations', false)
	Neighborhood.disableRemoteMethod('__delete__gasStations', false)
	Neighborhood.disableRemoteMethod('__destroyById__gasStations', false)
	Neighborhood.disableRemoteMethod('__updateById__gasStations', false)
};
