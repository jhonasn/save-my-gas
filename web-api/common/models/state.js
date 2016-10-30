'use strict'

module.exports = function(State) {
	//not expose crud methods
	State.disableRemoteMethod('create', true)
	State.disableRemoteMethod('upsert', true)
	State.disableRemoteMethod('deleteById', true)
	State.disableRemoteMethod('updateById', true)
	State.disableRemoteMethod('updateAll', true)
	State.disableRemoteMethod('updateAttributes', false)
	State.disableRemoteMethod('createChangeStream', true)
	State.disableRemoteMethod('replaceOrCreate', true)
	State.disableRemoteMethod('replaceById', true)
	State.disableRemoteMethod('upsertWithWhere', true)

	//not expose crud related models methods
	State.disableRemoteMethod('__create__addresses', false)
	State.disableRemoteMethod('__delete__addresses', false)
	State.disableRemoteMethod('__destroyById__addresses', false)
	State.disableRemoteMethod('__updateById__addresses', false)

	State.disableRemoteMethod('__create__neighborhoods', false)
	State.disableRemoteMethod('__delete__neighborhoods', false)
	State.disableRemoteMethod('__destroyById__neighborhoods', false)
	State.disableRemoteMethod('__updateById__neighborhoods', false)

	State.disableRemoteMethod('__create__gasStations', false)
	State.disableRemoteMethod('__delete__gasStations', false)
	State.disableRemoteMethod('__destroyById__gasStations', false)
	State.disableRemoteMethod('__updateById__gasStations', false)

	State.disableRemoteMethod('__create__cities', false)
	State.disableRemoteMethod('__delete__cities', false)
	State.disableRemoteMethod('__destroyById__cities', false)
	State.disableRemoteMethod('__updateById__cities', false)
}
