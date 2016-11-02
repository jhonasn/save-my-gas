// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.UserIdentity
 * @header lbServices.UserIdentity
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `UserIdentity` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "UserIdentity",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/UserIdentities/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use UserIdentity.user() instead.
            "prototype$__get__user": {
              url: urlBase + "/UserIdentities/:id/user",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserIdentity#create
             * @methodOf lbServices.UserIdentity
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserIdentity` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/UserIdentities",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserIdentity#createMany
             * @methodOf lbServices.UserIdentity
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserIdentity` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/UserIdentities",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserIdentity#upsert
             * @methodOf lbServices.UserIdentity
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserIdentity` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/UserIdentities",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserIdentity#replaceOrCreate
             * @methodOf lbServices.UserIdentity
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserIdentity` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/UserIdentities/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserIdentity#upsertWithWhere
             * @methodOf lbServices.UserIdentity
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserIdentity` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/UserIdentities/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserIdentity#exists
             * @methodOf lbServices.UserIdentity
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/UserIdentities/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserIdentity#findById
             * @methodOf lbServices.UserIdentity
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserIdentity` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/UserIdentities/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserIdentity#replaceById
             * @methodOf lbServices.UserIdentity
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserIdentity` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/UserIdentities/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserIdentity#find
             * @methodOf lbServices.UserIdentity
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserIdentity` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/UserIdentities",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserIdentity#findOne
             * @methodOf lbServices.UserIdentity
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserIdentity` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/UserIdentities/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserIdentity#updateAll
             * @methodOf lbServices.UserIdentity
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/UserIdentities/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserIdentity#deleteById
             * @methodOf lbServices.UserIdentity
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserIdentity` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/UserIdentities/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserIdentity#count
             * @methodOf lbServices.UserIdentity
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/UserIdentities/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserIdentity#prototype$updateAttributes
             * @methodOf lbServices.UserIdentity
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserIdentity` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/UserIdentities/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.UserIdentity#createChangeStream
             * @methodOf lbServices.UserIdentity
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/UserIdentities/change-stream",
              method: "POST",
            },

            // INTERNAL. Use User.identities.findById() instead.
            "::findById::User::identities": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/identities/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.identities.destroyById() instead.
            "::destroyById::User::identities": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/identities/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.identities.updateById() instead.
            "::updateById::User::identities": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/identities/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.identities() instead.
            "::get::User::identities": {
              isArray: true,
              url: urlBase + "/users/:id/identities",
              method: "GET",
            },

            // INTERNAL. Use User.identities.create() instead.
            "::create::User::identities": {
              url: urlBase + "/users/:id/identities",
              method: "POST",
            },

            // INTERNAL. Use User.identities.createMany() instead.
            "::createMany::User::identities": {
              isArray: true,
              url: urlBase + "/users/:id/identities",
              method: "POST",
            },

            // INTERNAL. Use User.identities.destroyAll() instead.
            "::delete::User::identities": {
              url: urlBase + "/users/:id/identities",
              method: "DELETE",
            },

            // INTERNAL. Use User.identities.count() instead.
            "::count::User::identities": {
              url: urlBase + "/users/:id/identities/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.UserIdentity#patchOrCreate
             * @methodOf lbServices.UserIdentity
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserIdentity` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.UserIdentity#updateOrCreate
             * @methodOf lbServices.UserIdentity
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserIdentity` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.UserIdentity#patchOrCreateWithWhere
             * @methodOf lbServices.UserIdentity
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserIdentity` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.UserIdentity#update
             * @methodOf lbServices.UserIdentity
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.UserIdentity#destroyById
             * @methodOf lbServices.UserIdentity
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserIdentity` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.UserIdentity#removeById
             * @methodOf lbServices.UserIdentity
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserIdentity` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.UserIdentity#patchAttributes
             * @methodOf lbServices.UserIdentity
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserIdentity` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.UserIdentity#modelName
        * @propertyOf lbServices.UserIdentity
        * @description
        * The name of the model represented by this $resource,
        * i.e. `UserIdentity`.
        */
        R.modelName = "UserIdentity";


            /**
             * @ngdoc method
             * @name lbServices.UserIdentity#user
             * @methodOf lbServices.UserIdentity
             *
             * @description
             *
             * Fetches belongsTo relation user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::UserIdentity::user"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Vehicle
 * @header lbServices.Vehicle
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Vehicle` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Vehicle",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/vehicles/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Vehicle.vehicleType() instead.
            "prototype$__get__vehicleType": {
              url: urlBase + "/vehicles/:id/vehicleType",
              method: "GET",
            },

            // INTERNAL. Use Vehicle.fuelType() instead.
            "prototype$__get__fuelType": {
              url: urlBase + "/vehicles/:id/fuelType",
              method: "GET",
            },

            // INTERNAL. Use Vehicle.user() instead.
            "prototype$__get__user": {
              url: urlBase + "/vehicles/:id/user",
              method: "GET",
            },

            // INTERNAL. Use Vehicle.vehicleBrand() instead.
            "prototype$__get__vehicleBrand": {
              url: urlBase + "/vehicles/:id/vehicleBrand",
              method: "GET",
            },

            // INTERNAL. Use Vehicle.vehicleModel() instead.
            "prototype$__get__vehicleModel": {
              url: urlBase + "/vehicles/:id/vehicleModel",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Vehicle#create
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/vehicles",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Vehicle#createMany
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/vehicles",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Vehicle#upsert
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/vehicles",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Vehicle#replaceOrCreate
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/vehicles/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Vehicle#upsertWithWhere
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/vehicles/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Vehicle#exists
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/vehicles/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Vehicle#findById
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/vehicles/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Vehicle#replaceById
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/vehicles/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Vehicle#find
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/vehicles",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Vehicle#findOne
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/vehicles/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Vehicle#updateAll
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/vehicles/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Vehicle#deleteById
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/vehicles/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Vehicle#count
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/vehicles/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Vehicle#prototype$updateAttributes
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/vehicles/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Vehicle#createChangeStream
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/vehicles/change-stream",
              method: "POST",
            },

            // INTERNAL. Use VehicleType.vehicles.findById() instead.
            "::findById::VehicleType::vehicles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicleTypes/:id/vehicles/:fk",
              method: "GET",
            },

            // INTERNAL. Use VehicleType.vehicles() instead.
            "::get::VehicleType::vehicles": {
              isArray: true,
              url: urlBase + "/vehicleTypes/:id/vehicles",
              method: "GET",
            },

            // INTERNAL. Use VehicleType.vehicles.count() instead.
            "::count::VehicleType::vehicles": {
              url: urlBase + "/vehicleTypes/:id/vehicles/count",
              method: "GET",
            },

            // INTERNAL. Use FuelType.vehicles.findById() instead.
            "::findById::FuelType::vehicles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/fuelTypes/:id/vehicles/:fk",
              method: "GET",
            },

            // INTERNAL. Use FuelType.vehicles() instead.
            "::get::FuelType::vehicles": {
              isArray: true,
              url: urlBase + "/fuelTypes/:id/vehicles",
              method: "GET",
            },

            // INTERNAL. Use FuelType.vehicles.count() instead.
            "::count::FuelType::vehicles": {
              url: urlBase + "/fuelTypes/:id/vehicles/count",
              method: "GET",
            },

            // INTERNAL. Use User.vehicles.findById() instead.
            "::findById::User::vehicles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/vehicles/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.vehicles.destroyById() instead.
            "::destroyById::User::vehicles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/vehicles/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.vehicles.updateById() instead.
            "::updateById::User::vehicles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/vehicles/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.vehicles() instead.
            "::get::User::vehicles": {
              isArray: true,
              url: urlBase + "/users/:id/vehicles",
              method: "GET",
            },

            // INTERNAL. Use User.vehicles.create() instead.
            "::create::User::vehicles": {
              url: urlBase + "/users/:id/vehicles",
              method: "POST",
            },

            // INTERNAL. Use User.vehicles.createMany() instead.
            "::createMany::User::vehicles": {
              isArray: true,
              url: urlBase + "/users/:id/vehicles",
              method: "POST",
            },

            // INTERNAL. Use User.vehicles.destroyAll() instead.
            "::delete::User::vehicles": {
              url: urlBase + "/users/:id/vehicles",
              method: "DELETE",
            },

            // INTERNAL. Use User.vehicles.count() instead.
            "::count::User::vehicles": {
              url: urlBase + "/users/:id/vehicles/count",
              method: "GET",
            },

            // INTERNAL. Use VehicleBrand.vehicles.findById() instead.
            "::findById::VehicleBrand::vehicles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicleBrands/:id/vehicles/:fk",
              method: "GET",
            },

            // INTERNAL. Use VehicleBrand.vehicles() instead.
            "::get::VehicleBrand::vehicles": {
              isArray: true,
              url: urlBase + "/vehicleBrands/:id/vehicles",
              method: "GET",
            },

            // INTERNAL. Use VehicleBrand.vehicles.count() instead.
            "::count::VehicleBrand::vehicles": {
              url: urlBase + "/vehicleBrands/:id/vehicles/count",
              method: "GET",
            },

            // INTERNAL. Use VehicleModel.vehicles.findById() instead.
            "::findById::VehicleModel::vehicles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicleModels/:id/vehicles/:fk",
              method: "GET",
            },

            // INTERNAL. Use VehicleModel.vehicles() instead.
            "::get::VehicleModel::vehicles": {
              isArray: true,
              url: urlBase + "/vehicleModels/:id/vehicles",
              method: "GET",
            },

            // INTERNAL. Use VehicleModel.vehicles.count() instead.
            "::count::VehicleModel::vehicles": {
              url: urlBase + "/vehicleModels/:id/vehicles/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Vehicle#patchOrCreate
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Vehicle#updateOrCreate
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Vehicle#patchOrCreateWithWhere
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Vehicle#update
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Vehicle#destroyById
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Vehicle#removeById
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Vehicle#patchAttributes
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Vehicle#modelName
        * @propertyOf lbServices.Vehicle
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Vehicle`.
        */
        R.modelName = "Vehicle";


            /**
             * @ngdoc method
             * @name lbServices.Vehicle#vehicleType
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Fetches belongsTo relation vehicleType.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VehicleType` object.)
             * </em>
             */
        R.vehicleType = function() {
          var TargetResource = $injector.get("VehicleType");
          var action = TargetResource["::get::Vehicle::vehicleType"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Vehicle#fuelType
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Fetches belongsTo relation fuelType.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `FuelType` object.)
             * </em>
             */
        R.fuelType = function() {
          var TargetResource = $injector.get("FuelType");
          var action = TargetResource["::get::Vehicle::fuelType"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Vehicle#user
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Fetches belongsTo relation user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::Vehicle::user"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Vehicle#vehicleBrand
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Fetches belongsTo relation vehicleBrand.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VehicleBrand` object.)
             * </em>
             */
        R.vehicleBrand = function() {
          var TargetResource = $injector.get("VehicleBrand");
          var action = TargetResource["::get::Vehicle::vehicleBrand"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Vehicle#vehicleModel
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Fetches belongsTo relation vehicleModel.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VehicleModel` object.)
             * </em>
             */
        R.vehicleModel = function() {
          var TargetResource = $injector.get("VehicleModel");
          var action = TargetResource["::get::Vehicle::vehicleModel"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.VehicleType
 * @header lbServices.VehicleType
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `VehicleType` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "VehicleType",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/vehicleTypes/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use VehicleType.vehicles.findById() instead.
            "prototype$__findById__vehicles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicleTypes/:id/vehicles/:fk",
              method: "GET",
            },

            // INTERNAL. Use VehicleType.vehicles() instead.
            "prototype$__get__vehicles": {
              isArray: true,
              url: urlBase + "/vehicleTypes/:id/vehicles",
              method: "GET",
            },

            // INTERNAL. Use VehicleType.vehicles.count() instead.
            "prototype$__count__vehicles": {
              url: urlBase + "/vehicleTypes/:id/vehicles/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleType#exists
             * @methodOf lbServices.VehicleType
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/vehicleTypes/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleType#findById
             * @methodOf lbServices.VehicleType
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VehicleType` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/vehicleTypes/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleType#find
             * @methodOf lbServices.VehicleType
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VehicleType` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/vehicleTypes",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleType#findOne
             * @methodOf lbServices.VehicleType
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VehicleType` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/vehicleTypes/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleType#count
             * @methodOf lbServices.VehicleType
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/vehicleTypes/count",
              method: "GET",
            },

            // INTERNAL. Use Vehicle.vehicleType() instead.
            "::get::Vehicle::vehicleType": {
              url: urlBase + "/vehicles/:id/vehicleType",
              method: "GET",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.VehicleType#modelName
        * @propertyOf lbServices.VehicleType
        * @description
        * The name of the model represented by this $resource,
        * i.e. `VehicleType`.
        */
        R.modelName = "VehicleType";

    /**
     * @ngdoc object
     * @name lbServices.VehicleType.vehicles
     * @header lbServices.VehicleType.vehicles
     * @object
     * @description
     *
     * The object `VehicleType.vehicles` groups methods
     * manipulating `Vehicle` instances related to `VehicleType`.
     *
     * Call {@link lbServices.VehicleType#vehicles VehicleType.vehicles()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.VehicleType#vehicles
             * @methodOf lbServices.VehicleType
             *
             * @description
             *
             * Queries vehicles of vehicleType.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
        R.vehicles = function() {
          var TargetResource = $injector.get("Vehicle");
          var action = TargetResource["::get::VehicleType::vehicles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.VehicleType.vehicles#count
             * @methodOf lbServices.VehicleType.vehicles
             *
             * @description
             *
             * Counts vehicles of vehicleType.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.vehicles.count = function() {
          var TargetResource = $injector.get("Vehicle");
          var action = TargetResource["::count::VehicleType::vehicles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.VehicleType.vehicles#findById
             * @methodOf lbServices.VehicleType.vehicles
             *
             * @description
             *
             * Find a related item by id for vehicles.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for vehicles
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
        R.vehicles.findById = function() {
          var TargetResource = $injector.get("Vehicle");
          var action = TargetResource["::findById::VehicleType::vehicles"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.FuelType
 * @header lbServices.FuelType
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `FuelType` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "FuelType",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/fuelTypes/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use FuelType.vehicles.findById() instead.
            "prototype$__findById__vehicles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/fuelTypes/:id/vehicles/:fk",
              method: "GET",
            },

            // INTERNAL. Use FuelType.fuelPrices.findById() instead.
            "prototype$__findById__fuelPrices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/fuelTypes/:id/fuelPrices/:fk",
              method: "GET",
            },

            // INTERNAL. Use FuelType.vehicles() instead.
            "prototype$__get__vehicles": {
              isArray: true,
              url: urlBase + "/fuelTypes/:id/vehicles",
              method: "GET",
            },

            // INTERNAL. Use FuelType.vehicles.count() instead.
            "prototype$__count__vehicles": {
              url: urlBase + "/fuelTypes/:id/vehicles/count",
              method: "GET",
            },

            // INTERNAL. Use FuelType.fuelPrices() instead.
            "prototype$__get__fuelPrices": {
              isArray: true,
              url: urlBase + "/fuelTypes/:id/fuelPrices",
              method: "GET",
            },

            // INTERNAL. Use FuelType.fuelPrices.count() instead.
            "prototype$__count__fuelPrices": {
              url: urlBase + "/fuelTypes/:id/fuelPrices/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelType#exists
             * @methodOf lbServices.FuelType
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/fuelTypes/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelType#findById
             * @methodOf lbServices.FuelType
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `FuelType` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/fuelTypes/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelType#find
             * @methodOf lbServices.FuelType
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `FuelType` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/fuelTypes",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelType#findOne
             * @methodOf lbServices.FuelType
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `FuelType` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/fuelTypes/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelType#count
             * @methodOf lbServices.FuelType
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/fuelTypes/count",
              method: "GET",
            },

            // INTERNAL. Use Vehicle.fuelType() instead.
            "::get::Vehicle::fuelType": {
              url: urlBase + "/vehicles/:id/fuelType",
              method: "GET",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.FuelType#modelName
        * @propertyOf lbServices.FuelType
        * @description
        * The name of the model represented by this $resource,
        * i.e. `FuelType`.
        */
        R.modelName = "FuelType";

    /**
     * @ngdoc object
     * @name lbServices.FuelType.vehicles
     * @header lbServices.FuelType.vehicles
     * @object
     * @description
     *
     * The object `FuelType.vehicles` groups methods
     * manipulating `Vehicle` instances related to `FuelType`.
     *
     * Call {@link lbServices.FuelType#vehicles FuelType.vehicles()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.FuelType#vehicles
             * @methodOf lbServices.FuelType
             *
             * @description
             *
             * Queries vehicles of fuelType.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
        R.vehicles = function() {
          var TargetResource = $injector.get("Vehicle");
          var action = TargetResource["::get::FuelType::vehicles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.FuelType.vehicles#count
             * @methodOf lbServices.FuelType.vehicles
             *
             * @description
             *
             * Counts vehicles of fuelType.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.vehicles.count = function() {
          var TargetResource = $injector.get("Vehicle");
          var action = TargetResource["::count::FuelType::vehicles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.FuelType.vehicles#findById
             * @methodOf lbServices.FuelType.vehicles
             *
             * @description
             *
             * Find a related item by id for vehicles.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for vehicles
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
        R.vehicles.findById = function() {
          var TargetResource = $injector.get("Vehicle");
          var action = TargetResource["::findById::FuelType::vehicles"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.FuelType.fuelPrices
     * @header lbServices.FuelType.fuelPrices
     * @object
     * @description
     *
     * The object `FuelType.fuelPrices` groups methods
     * manipulating `FuelPrice` instances related to `FuelType`.
     *
     * Call {@link lbServices.FuelType#fuelPrices FuelType.fuelPrices()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.FuelType#fuelPrices
             * @methodOf lbServices.FuelType
             *
             * @description
             *
             * Queries fuelPrices of fuelType.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `FuelPrice` object.)
             * </em>
             */
        R.fuelPrices = function() {
          var TargetResource = $injector.get("FuelPrice");
          var action = TargetResource["::get::FuelType::fuelPrices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.FuelType.fuelPrices#count
             * @methodOf lbServices.FuelType.fuelPrices
             *
             * @description
             *
             * Counts fuelPrices of fuelType.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.fuelPrices.count = function() {
          var TargetResource = $injector.get("FuelPrice");
          var action = TargetResource["::count::FuelType::fuelPrices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.FuelType.fuelPrices#findById
             * @methodOf lbServices.FuelType.fuelPrices
             *
             * @description
             *
             * Find a related item by id for fuelPrices.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for fuelPrices
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `FuelPrice` object.)
             * </em>
             */
        R.fuelPrices.findById = function() {
          var TargetResource = $injector.get("FuelPrice");
          var action = TargetResource["::findById::FuelType::fuelPrices"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.FuelPrice
 * @header lbServices.FuelPrice
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `FuelPrice` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "FuelPrice",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/fuelPrices/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use FuelPrice.gasStation() instead.
            "prototype$__get__gasStation": {
              url: urlBase + "/fuelPrices/:id/gasStation",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPrice#exists
             * @methodOf lbServices.FuelPrice
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/fuelPrices/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPrice#findById
             * @methodOf lbServices.FuelPrice
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `FuelPrice` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/fuelPrices/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPrice#find
             * @methodOf lbServices.FuelPrice
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `FuelPrice` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/fuelPrices",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPrice#findOne
             * @methodOf lbServices.FuelPrice
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `FuelPrice` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/fuelPrices/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPrice#count
             * @methodOf lbServices.FuelPrice
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/fuelPrices/count",
              method: "GET",
            },

            // INTERNAL. Use FuelType.fuelPrices.findById() instead.
            "::findById::FuelType::fuelPrices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/fuelTypes/:id/fuelPrices/:fk",
              method: "GET",
            },

            // INTERNAL. Use FuelType.fuelPrices() instead.
            "::get::FuelType::fuelPrices": {
              isArray: true,
              url: urlBase + "/fuelTypes/:id/fuelPrices",
              method: "GET",
            },

            // INTERNAL. Use FuelType.fuelPrices.count() instead.
            "::count::FuelType::fuelPrices": {
              url: urlBase + "/fuelTypes/:id/fuelPrices/count",
              method: "GET",
            },

            // INTERNAL. Use GasStation.fuelPrices.findById() instead.
            "::findById::GasStation::fuelPrices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/gasStations/:id/fuelPrices/:fk",
              method: "GET",
            },

            // INTERNAL. Use GasStation.fuelPrices() instead.
            "::get::GasStation::fuelPrices": {
              isArray: true,
              url: urlBase + "/gasStations/:id/fuelPrices",
              method: "GET",
            },

            // INTERNAL. Use GasStation.fuelPrices.count() instead.
            "::count::GasStation::fuelPrices": {
              url: urlBase + "/gasStations/:id/fuelPrices/count",
              method: "GET",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.FuelPrice#modelName
        * @propertyOf lbServices.FuelPrice
        * @description
        * The name of the model represented by this $resource,
        * i.e. `FuelPrice`.
        */
        R.modelName = "FuelPrice";


            /**
             * @ngdoc method
             * @name lbServices.FuelPrice#gasStation
             * @methodOf lbServices.FuelPrice
             *
             * @description
             *
             * Fetches belongsTo relation gasStation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `GasStation` object.)
             * </em>
             */
        R.gasStation = function() {
          var TargetResource = $injector.get("GasStation");
          var action = TargetResource["::get::FuelPrice::gasStation"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.GasStation
 * @header lbServices.GasStation
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `GasStation` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "GasStation",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/gasStations/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use GasStation.fuelPrices.findById() instead.
            "prototype$__findById__fuelPrices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/gasStations/:id/fuelPrices/:fk",
              method: "GET",
            },

            // INTERNAL. Use GasStation.adress() instead.
            "prototype$__get__adress": {
              url: urlBase + "/gasStations/:id/adress",
              method: "GET",
            },

            // INTERNAL. Use GasStation.fuelPrices() instead.
            "prototype$__get__fuelPrices": {
              isArray: true,
              url: urlBase + "/gasStations/:id/fuelPrices",
              method: "GET",
            },

            // INTERNAL. Use GasStation.fuelPrices.count() instead.
            "prototype$__count__fuelPrices": {
              url: urlBase + "/gasStations/:id/fuelPrices/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStation#exists
             * @methodOf lbServices.GasStation
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/gasStations/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStation#findById
             * @methodOf lbServices.GasStation
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `GasStation` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/gasStations/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStation#find
             * @methodOf lbServices.GasStation
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `GasStation` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/gasStations",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStation#findOne
             * @methodOf lbServices.GasStation
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `GasStation` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/gasStations/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStation#count
             * @methodOf lbServices.GasStation
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/gasStations/count",
              method: "GET",
            },

            // INTERNAL. Use FuelPrice.gasStation() instead.
            "::get::FuelPrice::gasStation": {
              url: urlBase + "/fuelPrices/:id/gasStation",
              method: "GET",
            },

            // INTERNAL. Use Neighborhood.gasStations.findById() instead.
            "::findById::Neighborhood::gasStations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/neighborhoods/:id/gasStations/:fk",
              method: "GET",
            },

            // INTERNAL. Use Neighborhood.gasStations() instead.
            "::get::Neighborhood::gasStations": {
              isArray: true,
              url: urlBase + "/neighborhoods/:id/gasStations",
              method: "GET",
            },

            // INTERNAL. Use Neighborhood.gasStations.count() instead.
            "::count::Neighborhood::gasStations": {
              url: urlBase + "/neighborhoods/:id/gasStations/count",
              method: "GET",
            },

            // INTERNAL. Use City.gasStations.findById() instead.
            "::findById::City::gasStations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cities/:id/gasStations/:fk",
              method: "GET",
            },

            // INTERNAL. Use City.gasStations() instead.
            "::get::City::gasStations": {
              isArray: true,
              url: urlBase + "/cities/:id/gasStations",
              method: "GET",
            },

            // INTERNAL. Use City.gasStations.count() instead.
            "::count::City::gasStations": {
              url: urlBase + "/cities/:id/gasStations/count",
              method: "GET",
            },

            // INTERNAL. Use State.gasStations.findById() instead.
            "::findById::State::gasStations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/states/:id/gasStations/:fk",
              method: "GET",
            },

            // INTERNAL. Use State.gasStations() instead.
            "::get::State::gasStations": {
              isArray: true,
              url: urlBase + "/states/:id/gasStations",
              method: "GET",
            },

            // INTERNAL. Use State.gasStations.count() instead.
            "::count::State::gasStations": {
              url: urlBase + "/states/:id/gasStations/count",
              method: "GET",
            },

            // INTERNAL. Use Address.gasStations.findById() instead.
            "::findById::Address::gasStations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/addresses/:id/gasStations/:fk",
              method: "GET",
            },

            // INTERNAL. Use Address.gasStations() instead.
            "::get::Address::gasStations": {
              isArray: true,
              url: urlBase + "/addresses/:id/gasStations",
              method: "GET",
            },

            // INTERNAL. Use Address.gasStations.count() instead.
            "::count::Address::gasStations": {
              url: urlBase + "/addresses/:id/gasStations/count",
              method: "GET",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.GasStation#modelName
        * @propertyOf lbServices.GasStation
        * @description
        * The name of the model represented by this $resource,
        * i.e. `GasStation`.
        */
        R.modelName = "GasStation";

    /**
     * @ngdoc object
     * @name lbServices.GasStation.fuelPrices
     * @header lbServices.GasStation.fuelPrices
     * @object
     * @description
     *
     * The object `GasStation.fuelPrices` groups methods
     * manipulating `FuelPrice` instances related to `GasStation`.
     *
     * Call {@link lbServices.GasStation#fuelPrices GasStation.fuelPrices()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.GasStation#fuelPrices
             * @methodOf lbServices.GasStation
             *
             * @description
             *
             * Queries fuelPrices of gasStation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `FuelPrice` object.)
             * </em>
             */
        R.fuelPrices = function() {
          var TargetResource = $injector.get("FuelPrice");
          var action = TargetResource["::get::GasStation::fuelPrices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.GasStation.fuelPrices#count
             * @methodOf lbServices.GasStation.fuelPrices
             *
             * @description
             *
             * Counts fuelPrices of gasStation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.fuelPrices.count = function() {
          var TargetResource = $injector.get("FuelPrice");
          var action = TargetResource["::count::GasStation::fuelPrices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.GasStation.fuelPrices#findById
             * @methodOf lbServices.GasStation.fuelPrices
             *
             * @description
             *
             * Find a related item by id for fuelPrices.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for fuelPrices
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `FuelPrice` object.)
             * </em>
             */
        R.fuelPrices.findById = function() {
          var TargetResource = $injector.get("FuelPrice");
          var action = TargetResource["::findById::GasStation::fuelPrices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.GasStation#adress
             * @methodOf lbServices.GasStation
             *
             * @description
             *
             * Fetches belongsTo relation adress.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Address` object.)
             * </em>
             */
        R.adress = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::get::GasStation::adress"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Neighborhood
 * @header lbServices.Neighborhood
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Neighborhood` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Neighborhood",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/neighborhoods/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Neighborhood.gasStations.findById() instead.
            "prototype$__findById__gasStations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/neighborhoods/:id/gasStations/:fk",
              method: "GET",
            },

            // INTERNAL. Use Neighborhood.city() instead.
            "prototype$__get__city": {
              url: urlBase + "/neighborhoods/:id/city",
              method: "GET",
            },

            // INTERNAL. Use Neighborhood.state() instead.
            "prototype$__get__state": {
              url: urlBase + "/neighborhoods/:id/state",
              method: "GET",
            },

            // INTERNAL. Use Neighborhood.addresses.findById() instead.
            "prototype$__findById__addresses": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/neighborhoods/:id/addresses/:fk",
              method: "GET",
            },

            // INTERNAL. Use Neighborhood.gasStations() instead.
            "prototype$__get__gasStations": {
              isArray: true,
              url: urlBase + "/neighborhoods/:id/gasStations",
              method: "GET",
            },

            // INTERNAL. Use Neighborhood.gasStations.count() instead.
            "prototype$__count__gasStations": {
              url: urlBase + "/neighborhoods/:id/gasStations/count",
              method: "GET",
            },

            // INTERNAL. Use Neighborhood.addresses() instead.
            "prototype$__get__addresses": {
              isArray: true,
              url: urlBase + "/neighborhoods/:id/addresses",
              method: "GET",
            },

            // INTERNAL. Use Neighborhood.addresses.count() instead.
            "prototype$__count__addresses": {
              url: urlBase + "/neighborhoods/:id/addresses/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Neighborhood#exists
             * @methodOf lbServices.Neighborhood
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/neighborhoods/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Neighborhood#findById
             * @methodOf lbServices.Neighborhood
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Neighborhood` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/neighborhoods/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Neighborhood#find
             * @methodOf lbServices.Neighborhood
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Neighborhood` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/neighborhoods",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Neighborhood#findOne
             * @methodOf lbServices.Neighborhood
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Neighborhood` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/neighborhoods/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Neighborhood#count
             * @methodOf lbServices.Neighborhood
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/neighborhoods/count",
              method: "GET",
            },

            // INTERNAL. Use City.neighborhoods.findById() instead.
            "::findById::City::neighborhoods": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cities/:id/neighborhoods/:fk",
              method: "GET",
            },

            // INTERNAL. Use City.neighborhoods() instead.
            "::get::City::neighborhoods": {
              isArray: true,
              url: urlBase + "/cities/:id/neighborhoods",
              method: "GET",
            },

            // INTERNAL. Use City.neighborhoods.count() instead.
            "::count::City::neighborhoods": {
              url: urlBase + "/cities/:id/neighborhoods/count",
              method: "GET",
            },

            // INTERNAL. Use State.neighborhoods.findById() instead.
            "::findById::State::neighborhoods": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/states/:id/neighborhoods/:fk",
              method: "GET",
            },

            // INTERNAL. Use State.neighborhoods() instead.
            "::get::State::neighborhoods": {
              isArray: true,
              url: urlBase + "/states/:id/neighborhoods",
              method: "GET",
            },

            // INTERNAL. Use State.neighborhoods.count() instead.
            "::count::State::neighborhoods": {
              url: urlBase + "/states/:id/neighborhoods/count",
              method: "GET",
            },

            // INTERNAL. Use Address.neighborhood() instead.
            "::get::Address::neighborhood": {
              url: urlBase + "/addresses/:id/neighborhood",
              method: "GET",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Neighborhood#modelName
        * @propertyOf lbServices.Neighborhood
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Neighborhood`.
        */
        R.modelName = "Neighborhood";

    /**
     * @ngdoc object
     * @name lbServices.Neighborhood.gasStations
     * @header lbServices.Neighborhood.gasStations
     * @object
     * @description
     *
     * The object `Neighborhood.gasStations` groups methods
     * manipulating `GasStation` instances related to `Neighborhood`.
     *
     * Call {@link lbServices.Neighborhood#gasStations Neighborhood.gasStations()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Neighborhood#gasStations
             * @methodOf lbServices.Neighborhood
             *
             * @description
             *
             * Queries gasStations of neighborhood.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `GasStation` object.)
             * </em>
             */
        R.gasStations = function() {
          var TargetResource = $injector.get("GasStation");
          var action = TargetResource["::get::Neighborhood::gasStations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Neighborhood.gasStations#count
             * @methodOf lbServices.Neighborhood.gasStations
             *
             * @description
             *
             * Counts gasStations of neighborhood.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.gasStations.count = function() {
          var TargetResource = $injector.get("GasStation");
          var action = TargetResource["::count::Neighborhood::gasStations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Neighborhood.gasStations#findById
             * @methodOf lbServices.Neighborhood.gasStations
             *
             * @description
             *
             * Find a related item by id for gasStations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for gasStations
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `GasStation` object.)
             * </em>
             */
        R.gasStations.findById = function() {
          var TargetResource = $injector.get("GasStation");
          var action = TargetResource["::findById::Neighborhood::gasStations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Neighborhood#city
             * @methodOf lbServices.Neighborhood
             *
             * @description
             *
             * Fetches belongsTo relation city.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R.city = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::get::Neighborhood::city"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Neighborhood#state
             * @methodOf lbServices.Neighborhood
             *
             * @description
             *
             * Fetches belongsTo relation state.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `State` object.)
             * </em>
             */
        R.state = function() {
          var TargetResource = $injector.get("State");
          var action = TargetResource["::get::Neighborhood::state"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Neighborhood.addresses
     * @header lbServices.Neighborhood.addresses
     * @object
     * @description
     *
     * The object `Neighborhood.addresses` groups methods
     * manipulating `Address` instances related to `Neighborhood`.
     *
     * Call {@link lbServices.Neighborhood#addresses Neighborhood.addresses()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Neighborhood#addresses
             * @methodOf lbServices.Neighborhood
             *
             * @description
             *
             * Queries addresses of neighborhood.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Address` object.)
             * </em>
             */
        R.addresses = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::get::Neighborhood::addresses"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Neighborhood.addresses#count
             * @methodOf lbServices.Neighborhood.addresses
             *
             * @description
             *
             * Counts addresses of neighborhood.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.addresses.count = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::count::Neighborhood::addresses"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Neighborhood.addresses#findById
             * @methodOf lbServices.Neighborhood.addresses
             *
             * @description
             *
             * Find a related item by id for addresses.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for addresses
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Address` object.)
             * </em>
             */
        R.addresses.findById = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::findById::Neighborhood::addresses"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.City
 * @header lbServices.City
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `City` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "City",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/cities/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use City.neighborhoods.findById() instead.
            "prototype$__findById__neighborhoods": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cities/:id/neighborhoods/:fk",
              method: "GET",
            },

            // INTERNAL. Use City.gasStations.findById() instead.
            "prototype$__findById__gasStations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cities/:id/gasStations/:fk",
              method: "GET",
            },

            // INTERNAL. Use City.state() instead.
            "prototype$__get__state": {
              url: urlBase + "/cities/:id/state",
              method: "GET",
            },

            // INTERNAL. Use City.addresses.findById() instead.
            "prototype$__findById__addresses": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cities/:id/addresses/:fk",
              method: "GET",
            },

            // INTERNAL. Use City.neighborhoods() instead.
            "prototype$__get__neighborhoods": {
              isArray: true,
              url: urlBase + "/cities/:id/neighborhoods",
              method: "GET",
            },

            // INTERNAL. Use City.neighborhoods.count() instead.
            "prototype$__count__neighborhoods": {
              url: urlBase + "/cities/:id/neighborhoods/count",
              method: "GET",
            },

            // INTERNAL. Use City.gasStations() instead.
            "prototype$__get__gasStations": {
              isArray: true,
              url: urlBase + "/cities/:id/gasStations",
              method: "GET",
            },

            // INTERNAL. Use City.gasStations.count() instead.
            "prototype$__count__gasStations": {
              url: urlBase + "/cities/:id/gasStations/count",
              method: "GET",
            },

            // INTERNAL. Use City.addresses() instead.
            "prototype$__get__addresses": {
              isArray: true,
              url: urlBase + "/cities/:id/addresses",
              method: "GET",
            },

            // INTERNAL. Use City.addresses.count() instead.
            "prototype$__count__addresses": {
              url: urlBase + "/cities/:id/addresses/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#exists
             * @methodOf lbServices.City
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/cities/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#findById
             * @methodOf lbServices.City
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/cities/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#find
             * @methodOf lbServices.City
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/cities",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#findOne
             * @methodOf lbServices.City
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/cities/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#count
             * @methodOf lbServices.City
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/cities/count",
              method: "GET",
            },

            // INTERNAL. Use Neighborhood.city() instead.
            "::get::Neighborhood::city": {
              url: urlBase + "/neighborhoods/:id/city",
              method: "GET",
            },

            // INTERNAL. Use State.cities.findById() instead.
            "::findById::State::cities": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/states/:id/cities/:fk",
              method: "GET",
            },

            // INTERNAL. Use State.cities() instead.
            "::get::State::cities": {
              isArray: true,
              url: urlBase + "/states/:id/cities",
              method: "GET",
            },

            // INTERNAL. Use State.cities.count() instead.
            "::count::State::cities": {
              url: urlBase + "/states/:id/cities/count",
              method: "GET",
            },

            // INTERNAL. Use Address.city() instead.
            "::get::Address::city": {
              url: urlBase + "/addresses/:id/city",
              method: "GET",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.City#modelName
        * @propertyOf lbServices.City
        * @description
        * The name of the model represented by this $resource,
        * i.e. `City`.
        */
        R.modelName = "City";

    /**
     * @ngdoc object
     * @name lbServices.City.neighborhoods
     * @header lbServices.City.neighborhoods
     * @object
     * @description
     *
     * The object `City.neighborhoods` groups methods
     * manipulating `Neighborhood` instances related to `City`.
     *
     * Call {@link lbServices.City#neighborhoods City.neighborhoods()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.City#neighborhoods
             * @methodOf lbServices.City
             *
             * @description
             *
             * Queries neighborhoods of city.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Neighborhood` object.)
             * </em>
             */
        R.neighborhoods = function() {
          var TargetResource = $injector.get("Neighborhood");
          var action = TargetResource["::get::City::neighborhoods"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.neighborhoods#count
             * @methodOf lbServices.City.neighborhoods
             *
             * @description
             *
             * Counts neighborhoods of city.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.neighborhoods.count = function() {
          var TargetResource = $injector.get("Neighborhood");
          var action = TargetResource["::count::City::neighborhoods"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.neighborhoods#findById
             * @methodOf lbServices.City.neighborhoods
             *
             * @description
             *
             * Find a related item by id for neighborhoods.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for neighborhoods
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Neighborhood` object.)
             * </em>
             */
        R.neighborhoods.findById = function() {
          var TargetResource = $injector.get("Neighborhood");
          var action = TargetResource["::findById::City::neighborhoods"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.City.gasStations
     * @header lbServices.City.gasStations
     * @object
     * @description
     *
     * The object `City.gasStations` groups methods
     * manipulating `GasStation` instances related to `City`.
     *
     * Call {@link lbServices.City#gasStations City.gasStations()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.City#gasStations
             * @methodOf lbServices.City
             *
             * @description
             *
             * Queries gasStations of city.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `GasStation` object.)
             * </em>
             */
        R.gasStations = function() {
          var TargetResource = $injector.get("GasStation");
          var action = TargetResource["::get::City::gasStations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.gasStations#count
             * @methodOf lbServices.City.gasStations
             *
             * @description
             *
             * Counts gasStations of city.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.gasStations.count = function() {
          var TargetResource = $injector.get("GasStation");
          var action = TargetResource["::count::City::gasStations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.gasStations#findById
             * @methodOf lbServices.City.gasStations
             *
             * @description
             *
             * Find a related item by id for gasStations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for gasStations
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `GasStation` object.)
             * </em>
             */
        R.gasStations.findById = function() {
          var TargetResource = $injector.get("GasStation");
          var action = TargetResource["::findById::City::gasStations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City#state
             * @methodOf lbServices.City
             *
             * @description
             *
             * Fetches belongsTo relation state.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `State` object.)
             * </em>
             */
        R.state = function() {
          var TargetResource = $injector.get("State");
          var action = TargetResource["::get::City::state"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.City.addresses
     * @header lbServices.City.addresses
     * @object
     * @description
     *
     * The object `City.addresses` groups methods
     * manipulating `Address` instances related to `City`.
     *
     * Call {@link lbServices.City#addresses City.addresses()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.City#addresses
             * @methodOf lbServices.City
             *
             * @description
             *
             * Queries addresses of city.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Address` object.)
             * </em>
             */
        R.addresses = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::get::City::addresses"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.addresses#count
             * @methodOf lbServices.City.addresses
             *
             * @description
             *
             * Counts addresses of city.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.addresses.count = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::count::City::addresses"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.addresses#findById
             * @methodOf lbServices.City.addresses
             *
             * @description
             *
             * Find a related item by id for addresses.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for addresses
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Address` object.)
             * </em>
             */
        R.addresses.findById = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::findById::City::addresses"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.State
 * @header lbServices.State
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `State` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "State",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/states/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use State.cities.findById() instead.
            "prototype$__findById__cities": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/states/:id/cities/:fk",
              method: "GET",
            },

            // INTERNAL. Use State.neighborhoods.findById() instead.
            "prototype$__findById__neighborhoods": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/states/:id/neighborhoods/:fk",
              method: "GET",
            },

            // INTERNAL. Use State.gasStations.findById() instead.
            "prototype$__findById__gasStations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/states/:id/gasStations/:fk",
              method: "GET",
            },

            // INTERNAL. Use State.addresses.findById() instead.
            "prototype$__findById__addresses": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/states/:id/addresses/:fk",
              method: "GET",
            },

            // INTERNAL. Use State.cities() instead.
            "prototype$__get__cities": {
              isArray: true,
              url: urlBase + "/states/:id/cities",
              method: "GET",
            },

            // INTERNAL. Use State.cities.count() instead.
            "prototype$__count__cities": {
              url: urlBase + "/states/:id/cities/count",
              method: "GET",
            },

            // INTERNAL. Use State.neighborhoods() instead.
            "prototype$__get__neighborhoods": {
              isArray: true,
              url: urlBase + "/states/:id/neighborhoods",
              method: "GET",
            },

            // INTERNAL. Use State.neighborhoods.count() instead.
            "prototype$__count__neighborhoods": {
              url: urlBase + "/states/:id/neighborhoods/count",
              method: "GET",
            },

            // INTERNAL. Use State.gasStations() instead.
            "prototype$__get__gasStations": {
              isArray: true,
              url: urlBase + "/states/:id/gasStations",
              method: "GET",
            },

            // INTERNAL. Use State.gasStations.count() instead.
            "prototype$__count__gasStations": {
              url: urlBase + "/states/:id/gasStations/count",
              method: "GET",
            },

            // INTERNAL. Use State.addresses() instead.
            "prototype$__get__addresses": {
              isArray: true,
              url: urlBase + "/states/:id/addresses",
              method: "GET",
            },

            // INTERNAL. Use State.addresses.count() instead.
            "prototype$__count__addresses": {
              url: urlBase + "/states/:id/addresses/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.State#exists
             * @methodOf lbServices.State
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/states/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.State#findById
             * @methodOf lbServices.State
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `State` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/states/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.State#find
             * @methodOf lbServices.State
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `State` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/states",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.State#findOne
             * @methodOf lbServices.State
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `State` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/states/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.State#count
             * @methodOf lbServices.State
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/states/count",
              method: "GET",
            },

            // INTERNAL. Use Neighborhood.state() instead.
            "::get::Neighborhood::state": {
              url: urlBase + "/neighborhoods/:id/state",
              method: "GET",
            },

            // INTERNAL. Use City.state() instead.
            "::get::City::state": {
              url: urlBase + "/cities/:id/state",
              method: "GET",
            },

            // INTERNAL. Use Address.state() instead.
            "::get::Address::state": {
              url: urlBase + "/addresses/:id/state",
              method: "GET",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.State#modelName
        * @propertyOf lbServices.State
        * @description
        * The name of the model represented by this $resource,
        * i.e. `State`.
        */
        R.modelName = "State";

    /**
     * @ngdoc object
     * @name lbServices.State.cities
     * @header lbServices.State.cities
     * @object
     * @description
     *
     * The object `State.cities` groups methods
     * manipulating `City` instances related to `State`.
     *
     * Call {@link lbServices.State#cities State.cities()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.State#cities
             * @methodOf lbServices.State
             *
             * @description
             *
             * Queries cities of state.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R.cities = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::get::State::cities"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.cities#count
             * @methodOf lbServices.State.cities
             *
             * @description
             *
             * Counts cities of state.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.cities.count = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::count::State::cities"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.cities#findById
             * @methodOf lbServices.State.cities
             *
             * @description
             *
             * Find a related item by id for cities.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for cities
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R.cities.findById = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::findById::State::cities"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.State.neighborhoods
     * @header lbServices.State.neighborhoods
     * @object
     * @description
     *
     * The object `State.neighborhoods` groups methods
     * manipulating `Neighborhood` instances related to `State`.
     *
     * Call {@link lbServices.State#neighborhoods State.neighborhoods()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.State#neighborhoods
             * @methodOf lbServices.State
             *
             * @description
             *
             * Queries neighborhoods of state.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Neighborhood` object.)
             * </em>
             */
        R.neighborhoods = function() {
          var TargetResource = $injector.get("Neighborhood");
          var action = TargetResource["::get::State::neighborhoods"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.neighborhoods#count
             * @methodOf lbServices.State.neighborhoods
             *
             * @description
             *
             * Counts neighborhoods of state.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.neighborhoods.count = function() {
          var TargetResource = $injector.get("Neighborhood");
          var action = TargetResource["::count::State::neighborhoods"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.neighborhoods#findById
             * @methodOf lbServices.State.neighborhoods
             *
             * @description
             *
             * Find a related item by id for neighborhoods.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for neighborhoods
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Neighborhood` object.)
             * </em>
             */
        R.neighborhoods.findById = function() {
          var TargetResource = $injector.get("Neighborhood");
          var action = TargetResource["::findById::State::neighborhoods"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.State.gasStations
     * @header lbServices.State.gasStations
     * @object
     * @description
     *
     * The object `State.gasStations` groups methods
     * manipulating `GasStation` instances related to `State`.
     *
     * Call {@link lbServices.State#gasStations State.gasStations()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.State#gasStations
             * @methodOf lbServices.State
             *
             * @description
             *
             * Queries gasStations of state.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `GasStation` object.)
             * </em>
             */
        R.gasStations = function() {
          var TargetResource = $injector.get("GasStation");
          var action = TargetResource["::get::State::gasStations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.gasStations#count
             * @methodOf lbServices.State.gasStations
             *
             * @description
             *
             * Counts gasStations of state.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.gasStations.count = function() {
          var TargetResource = $injector.get("GasStation");
          var action = TargetResource["::count::State::gasStations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.gasStations#findById
             * @methodOf lbServices.State.gasStations
             *
             * @description
             *
             * Find a related item by id for gasStations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for gasStations
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `GasStation` object.)
             * </em>
             */
        R.gasStations.findById = function() {
          var TargetResource = $injector.get("GasStation");
          var action = TargetResource["::findById::State::gasStations"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.State.addresses
     * @header lbServices.State.addresses
     * @object
     * @description
     *
     * The object `State.addresses` groups methods
     * manipulating `Address` instances related to `State`.
     *
     * Call {@link lbServices.State#addresses State.addresses()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.State#addresses
             * @methodOf lbServices.State
             *
             * @description
             *
             * Queries addresses of state.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Address` object.)
             * </em>
             */
        R.addresses = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::get::State::addresses"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.addresses#count
             * @methodOf lbServices.State.addresses
             *
             * @description
             *
             * Counts addresses of state.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.addresses.count = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::count::State::addresses"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.State.addresses#findById
             * @methodOf lbServices.State.addresses
             *
             * @description
             *
             * Find a related item by id for addresses.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for addresses
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Address` object.)
             * </em>
             */
        R.addresses.findById = function() {
          var TargetResource = $injector.get("Address");
          var action = TargetResource["::findById::State::addresses"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Address
 * @header lbServices.Address
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Address` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Address",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/addresses/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Address.gasStations.findById() instead.
            "prototype$__findById__gasStations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/addresses/:id/gasStations/:fk",
              method: "GET",
            },

            // INTERNAL. Use Address.city() instead.
            "prototype$__get__city": {
              url: urlBase + "/addresses/:id/city",
              method: "GET",
            },

            // INTERNAL. Use Address.neighborhood() instead.
            "prototype$__get__neighborhood": {
              url: urlBase + "/addresses/:id/neighborhood",
              method: "GET",
            },

            // INTERNAL. Use Address.state() instead.
            "prototype$__get__state": {
              url: urlBase + "/addresses/:id/state",
              method: "GET",
            },

            // INTERNAL. Use Address.gasStations() instead.
            "prototype$__get__gasStations": {
              isArray: true,
              url: urlBase + "/addresses/:id/gasStations",
              method: "GET",
            },

            // INTERNAL. Use Address.gasStations.count() instead.
            "prototype$__count__gasStations": {
              url: urlBase + "/addresses/:id/gasStations/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Address#exists
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/addresses/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Address#findById
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Address` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/addresses/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Address#find
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Address` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/addresses",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Address#findOne
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Address` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/addresses/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Address#count
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/addresses/count",
              method: "GET",
            },

            // INTERNAL. Use GasStation.adress() instead.
            "::get::GasStation::adress": {
              url: urlBase + "/gasStations/:id/adress",
              method: "GET",
            },

            // INTERNAL. Use Neighborhood.addresses.findById() instead.
            "::findById::Neighborhood::addresses": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/neighborhoods/:id/addresses/:fk",
              method: "GET",
            },

            // INTERNAL. Use Neighborhood.addresses() instead.
            "::get::Neighborhood::addresses": {
              isArray: true,
              url: urlBase + "/neighborhoods/:id/addresses",
              method: "GET",
            },

            // INTERNAL. Use Neighborhood.addresses.count() instead.
            "::count::Neighborhood::addresses": {
              url: urlBase + "/neighborhoods/:id/addresses/count",
              method: "GET",
            },

            // INTERNAL. Use City.addresses.findById() instead.
            "::findById::City::addresses": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cities/:id/addresses/:fk",
              method: "GET",
            },

            // INTERNAL. Use City.addresses() instead.
            "::get::City::addresses": {
              isArray: true,
              url: urlBase + "/cities/:id/addresses",
              method: "GET",
            },

            // INTERNAL. Use City.addresses.count() instead.
            "::count::City::addresses": {
              url: urlBase + "/cities/:id/addresses/count",
              method: "GET",
            },

            // INTERNAL. Use State.addresses.findById() instead.
            "::findById::State::addresses": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/states/:id/addresses/:fk",
              method: "GET",
            },

            // INTERNAL. Use State.addresses() instead.
            "::get::State::addresses": {
              isArray: true,
              url: urlBase + "/states/:id/addresses",
              method: "GET",
            },

            // INTERNAL. Use State.addresses.count() instead.
            "::count::State::addresses": {
              url: urlBase + "/states/:id/addresses/count",
              method: "GET",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Address#modelName
        * @propertyOf lbServices.Address
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Address`.
        */
        R.modelName = "Address";

    /**
     * @ngdoc object
     * @name lbServices.Address.gasStations
     * @header lbServices.Address.gasStations
     * @object
     * @description
     *
     * The object `Address.gasStations` groups methods
     * manipulating `GasStation` instances related to `Address`.
     *
     * Call {@link lbServices.Address#gasStations Address.gasStations()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Address#gasStations
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Queries gasStations of address.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `GasStation` object.)
             * </em>
             */
        R.gasStations = function() {
          var TargetResource = $injector.get("GasStation");
          var action = TargetResource["::get::Address::gasStations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Address.gasStations#count
             * @methodOf lbServices.Address.gasStations
             *
             * @description
             *
             * Counts gasStations of address.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.gasStations.count = function() {
          var TargetResource = $injector.get("GasStation");
          var action = TargetResource["::count::Address::gasStations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Address.gasStations#findById
             * @methodOf lbServices.Address.gasStations
             *
             * @description
             *
             * Find a related item by id for gasStations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for gasStations
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `GasStation` object.)
             * </em>
             */
        R.gasStations.findById = function() {
          var TargetResource = $injector.get("GasStation");
          var action = TargetResource["::findById::Address::gasStations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Address#city
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Fetches belongsTo relation city.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R.city = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::get::Address::city"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Address#neighborhood
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Fetches belongsTo relation neighborhood.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Neighborhood` object.)
             * </em>
             */
        R.neighborhood = function() {
          var TargetResource = $injector.get("Neighborhood");
          var action = TargetResource["::get::Address::neighborhood"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Address#state
             * @methodOf lbServices.Address
             *
             * @description
             *
             * Fetches belongsTo relation state.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `State` object.)
             * </em>
             */
        R.state = function() {
          var TargetResource = $injector.get("State");
          var action = TargetResource["::get::Address::state"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "User",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/users/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__findById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__destroyById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__updateById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/accessTokens/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.vehicles.findById() instead.
            "prototype$__findById__vehicles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/vehicles/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.vehicles.destroyById() instead.
            "prototype$__destroyById__vehicles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/vehicles/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.vehicles.updateById() instead.
            "prototype$__updateById__vehicles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/vehicles/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.identities.findById() instead.
            "prototype$__findById__identities": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/identities/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.identities.destroyById() instead.
            "prototype$__destroyById__identities": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/identities/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.identities.updateById() instead.
            "prototype$__updateById__identities": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/identities/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__findById__credentials
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a related item by id for credentials.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for credentials
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__findById__credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/credentials/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__destroyById__credentials
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a related item by id for credentials.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for credentials
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/credentials/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__updateById__credentials
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update a related item by id for credentials.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for credentials
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__updateById__credentials": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/credentials/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__get__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries accessTokens of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/users/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__create__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/users/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__delete__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/users/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__count__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Counts accessTokens of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/users/:id/accessTokens/count",
              method: "GET",
            },

            // INTERNAL. Use User.vehicles() instead.
            "prototype$__get__vehicles": {
              isArray: true,
              url: urlBase + "/users/:id/vehicles",
              method: "GET",
            },

            // INTERNAL. Use User.vehicles.create() instead.
            "prototype$__create__vehicles": {
              url: urlBase + "/users/:id/vehicles",
              method: "POST",
            },

            // INTERNAL. Use User.vehicles.destroyAll() instead.
            "prototype$__delete__vehicles": {
              url: urlBase + "/users/:id/vehicles",
              method: "DELETE",
            },

            // INTERNAL. Use User.vehicles.count() instead.
            "prototype$__count__vehicles": {
              url: urlBase + "/users/:id/vehicles/count",
              method: "GET",
            },

            // INTERNAL. Use User.identities() instead.
            "prototype$__get__identities": {
              isArray: true,
              url: urlBase + "/users/:id/identities",
              method: "GET",
            },

            // INTERNAL. Use User.identities.create() instead.
            "prototype$__create__identities": {
              url: urlBase + "/users/:id/identities",
              method: "POST",
            },

            // INTERNAL. Use User.identities.destroyAll() instead.
            "prototype$__delete__identities": {
              url: urlBase + "/users/:id/identities",
              method: "DELETE",
            },

            // INTERNAL. Use User.identities.count() instead.
            "prototype$__count__identities": {
              url: urlBase + "/users/:id/identities/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__get__credentials
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries credentials of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__get__credentials": {
              isArray: true,
              url: urlBase + "/users/:id/credentials",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__create__credentials
             * @methodOf lbServices.User
             *
             * @description
             *
             * Creates a new instance in credentials of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__create__credentials": {
              url: urlBase + "/users/:id/credentials",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__delete__credentials
             * @methodOf lbServices.User
             *
             * @description
             *
             * Deletes all credentials of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__credentials": {
              url: urlBase + "/users/:id/credentials",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__count__credentials
             * @methodOf lbServices.User
             *
             * @description
             *
             * Counts credentials of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__credentials": {
              url: urlBase + "/users/:id/credentials/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#create
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createMany
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#upsert
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/users",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/users/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#upsertWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/users/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#exists
             * @methodOf lbServices.User
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/users/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/users/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/users/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#find
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/users",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findOne
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/users/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#updateAll
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/users/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#deleteById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/users/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#count
             * @methodOf lbServices.User
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/users/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$updateAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/users/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createChangeStream
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/users/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#login
             * @methodOf lbServices.User
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/users/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#logout
             * @methodOf lbServices.User
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/users/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#confirm
             * @methodOf lbServices.User
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/users/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#resetPassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/users/reset",
              method: "POST",
            },

            // INTERNAL. Use UserIdentity.user() instead.
            "::get::UserIdentity::user": {
              url: urlBase + "/UserIdentities/:id/user",
              method: "GET",
            },

            // INTERNAL. Use Vehicle.user() instead.
            "::get::Vehicle::user": {
              url: urlBase + "/vehicles/:id/user",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#getCurrent
             * @methodOf lbServices.User
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/users" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.User#updateOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreateWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.User#update
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.User#destroyById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#removeById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#patchAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.User#modelName
        * @propertyOf lbServices.User
        * @description
        * The name of the model represented by this $resource,
        * i.e. `User`.
        */
        R.modelName = "User";

    /**
     * @ngdoc object
     * @name lbServices.User.vehicles
     * @header lbServices.User.vehicles
     * @object
     * @description
     *
     * The object `User.vehicles` groups methods
     * manipulating `Vehicle` instances related to `User`.
     *
     * Call {@link lbServices.User#vehicles User.vehicles()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.User#vehicles
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries vehicles of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
        R.vehicles = function() {
          var TargetResource = $injector.get("Vehicle");
          var action = TargetResource["::get::User::vehicles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.vehicles#count
             * @methodOf lbServices.User.vehicles
             *
             * @description
             *
             * Counts vehicles of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.vehicles.count = function() {
          var TargetResource = $injector.get("Vehicle");
          var action = TargetResource["::count::User::vehicles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.vehicles#create
             * @methodOf lbServices.User.vehicles
             *
             * @description
             *
             * Creates a new instance in vehicles of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
        R.vehicles.create = function() {
          var TargetResource = $injector.get("Vehicle");
          var action = TargetResource["::create::User::vehicles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.vehicles#createMany
             * @methodOf lbServices.User.vehicles
             *
             * @description
             *
             * Creates a new instance in vehicles of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
        R.vehicles.createMany = function() {
          var TargetResource = $injector.get("Vehicle");
          var action = TargetResource["::createMany::User::vehicles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.vehicles#destroyAll
             * @methodOf lbServices.User.vehicles
             *
             * @description
             *
             * Deletes all vehicles of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.vehicles.destroyAll = function() {
          var TargetResource = $injector.get("Vehicle");
          var action = TargetResource["::delete::User::vehicles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.vehicles#destroyById
             * @methodOf lbServices.User.vehicles
             *
             * @description
             *
             * Delete a related item by id for vehicles.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for vehicles
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.vehicles.destroyById = function() {
          var TargetResource = $injector.get("Vehicle");
          var action = TargetResource["::destroyById::User::vehicles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.vehicles#findById
             * @methodOf lbServices.User.vehicles
             *
             * @description
             *
             * Find a related item by id for vehicles.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for vehicles
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
        R.vehicles.findById = function() {
          var TargetResource = $injector.get("Vehicle");
          var action = TargetResource["::findById::User::vehicles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.vehicles#updateById
             * @methodOf lbServices.User.vehicles
             *
             * @description
             *
             * Update a related item by id for vehicles.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for vehicles
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
        R.vehicles.updateById = function() {
          var TargetResource = $injector.get("Vehicle");
          var action = TargetResource["::updateById::User::vehicles"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User.identities
     * @header lbServices.User.identities
     * @object
     * @description
     *
     * The object `User.identities` groups methods
     * manipulating `UserIdentity` instances related to `User`.
     *
     * Call {@link lbServices.User#identities User.identities()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.User#identities
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries identities of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserIdentity` object.)
             * </em>
             */
        R.identities = function() {
          var TargetResource = $injector.get("UserIdentity");
          var action = TargetResource["::get::User::identities"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.identities#count
             * @methodOf lbServices.User.identities
             *
             * @description
             *
             * Counts identities of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.identities.count = function() {
          var TargetResource = $injector.get("UserIdentity");
          var action = TargetResource["::count::User::identities"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.identities#create
             * @methodOf lbServices.User.identities
             *
             * @description
             *
             * Creates a new instance in identities of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserIdentity` object.)
             * </em>
             */
        R.identities.create = function() {
          var TargetResource = $injector.get("UserIdentity");
          var action = TargetResource["::create::User::identities"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.identities#createMany
             * @methodOf lbServices.User.identities
             *
             * @description
             *
             * Creates a new instance in identities of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserIdentity` object.)
             * </em>
             */
        R.identities.createMany = function() {
          var TargetResource = $injector.get("UserIdentity");
          var action = TargetResource["::createMany::User::identities"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.identities#destroyAll
             * @methodOf lbServices.User.identities
             *
             * @description
             *
             * Deletes all identities of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.identities.destroyAll = function() {
          var TargetResource = $injector.get("UserIdentity");
          var action = TargetResource["::delete::User::identities"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.identities#destroyById
             * @methodOf lbServices.User.identities
             *
             * @description
             *
             * Delete a related item by id for identities.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for identities
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.identities.destroyById = function() {
          var TargetResource = $injector.get("UserIdentity");
          var action = TargetResource["::destroyById::User::identities"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.identities#findById
             * @methodOf lbServices.User.identities
             *
             * @description
             *
             * Find a related item by id for identities.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for identities
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserIdentity` object.)
             * </em>
             */
        R.identities.findById = function() {
          var TargetResource = $injector.get("UserIdentity");
          var action = TargetResource["::findById::User::identities"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.identities#updateById
             * @methodOf lbServices.User.identities
             *
             * @description
             *
             * Update a related item by id for identities.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for identities
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `UserIdentity` object.)
             * </em>
             */
        R.identities.updateById = function() {
          var TargetResource = $injector.get("UserIdentity");
          var action = TargetResource["::updateById::User::identities"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.VehicleBrand
 * @header lbServices.VehicleBrand
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `VehicleBrand` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "VehicleBrand",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/vehicleBrands/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use VehicleBrand.vehicles.findById() instead.
            "prototype$__findById__vehicles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicleBrands/:id/vehicles/:fk",
              method: "GET",
            },

            // INTERNAL. Use VehicleBrand.vehicleModels.findById() instead.
            "prototype$__findById__vehicleModels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicleBrands/:id/vehicleModels/:fk",
              method: "GET",
            },

            // INTERNAL. Use VehicleBrand.vehicles() instead.
            "prototype$__get__vehicles": {
              isArray: true,
              url: urlBase + "/vehicleBrands/:id/vehicles",
              method: "GET",
            },

            // INTERNAL. Use VehicleBrand.vehicles.count() instead.
            "prototype$__count__vehicles": {
              url: urlBase + "/vehicleBrands/:id/vehicles/count",
              method: "GET",
            },

            // INTERNAL. Use VehicleBrand.vehicleModels() instead.
            "prototype$__get__vehicleModels": {
              isArray: true,
              url: urlBase + "/vehicleBrands/:id/vehicleModels",
              method: "GET",
            },

            // INTERNAL. Use VehicleBrand.vehicleModels.count() instead.
            "prototype$__count__vehicleModels": {
              url: urlBase + "/vehicleBrands/:id/vehicleModels/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleBrand#exists
             * @methodOf lbServices.VehicleBrand
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/vehicleBrands/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleBrand#findById
             * @methodOf lbServices.VehicleBrand
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VehicleBrand` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/vehicleBrands/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleBrand#find
             * @methodOf lbServices.VehicleBrand
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VehicleBrand` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/vehicleBrands",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleBrand#findOne
             * @methodOf lbServices.VehicleBrand
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VehicleBrand` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/vehicleBrands/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleBrand#count
             * @methodOf lbServices.VehicleBrand
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/vehicleBrands/count",
              method: "GET",
            },

            // INTERNAL. Use Vehicle.vehicleBrand() instead.
            "::get::Vehicle::vehicleBrand": {
              url: urlBase + "/vehicles/:id/vehicleBrand",
              method: "GET",
            },

            // INTERNAL. Use VehicleModel.vehicleBrand() instead.
            "::get::VehicleModel::vehicleBrand": {
              url: urlBase + "/vehicleModels/:id/vehicleBrand",
              method: "GET",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.VehicleBrand#modelName
        * @propertyOf lbServices.VehicleBrand
        * @description
        * The name of the model represented by this $resource,
        * i.e. `VehicleBrand`.
        */
        R.modelName = "VehicleBrand";

    /**
     * @ngdoc object
     * @name lbServices.VehicleBrand.vehicles
     * @header lbServices.VehicleBrand.vehicles
     * @object
     * @description
     *
     * The object `VehicleBrand.vehicles` groups methods
     * manipulating `Vehicle` instances related to `VehicleBrand`.
     *
     * Call {@link lbServices.VehicleBrand#vehicles VehicleBrand.vehicles()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.VehicleBrand#vehicles
             * @methodOf lbServices.VehicleBrand
             *
             * @description
             *
             * Queries vehicles of vehicleBrand.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
        R.vehicles = function() {
          var TargetResource = $injector.get("Vehicle");
          var action = TargetResource["::get::VehicleBrand::vehicles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.VehicleBrand.vehicles#count
             * @methodOf lbServices.VehicleBrand.vehicles
             *
             * @description
             *
             * Counts vehicles of vehicleBrand.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.vehicles.count = function() {
          var TargetResource = $injector.get("Vehicle");
          var action = TargetResource["::count::VehicleBrand::vehicles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.VehicleBrand.vehicles#findById
             * @methodOf lbServices.VehicleBrand.vehicles
             *
             * @description
             *
             * Find a related item by id for vehicles.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for vehicles
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
        R.vehicles.findById = function() {
          var TargetResource = $injector.get("Vehicle");
          var action = TargetResource["::findById::VehicleBrand::vehicles"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.VehicleBrand.vehicleModels
     * @header lbServices.VehicleBrand.vehicleModels
     * @object
     * @description
     *
     * The object `VehicleBrand.vehicleModels` groups methods
     * manipulating `VehicleModel` instances related to `VehicleBrand`.
     *
     * Call {@link lbServices.VehicleBrand#vehicleModels VehicleBrand.vehicleModels()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.VehicleBrand#vehicleModels
             * @methodOf lbServices.VehicleBrand
             *
             * @description
             *
             * Queries vehicleModels of vehicleBrand.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VehicleModel` object.)
             * </em>
             */
        R.vehicleModels = function() {
          var TargetResource = $injector.get("VehicleModel");
          var action = TargetResource["::get::VehicleBrand::vehicleModels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.VehicleBrand.vehicleModels#count
             * @methodOf lbServices.VehicleBrand.vehicleModels
             *
             * @description
             *
             * Counts vehicleModels of vehicleBrand.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.vehicleModels.count = function() {
          var TargetResource = $injector.get("VehicleModel");
          var action = TargetResource["::count::VehicleBrand::vehicleModels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.VehicleBrand.vehicleModels#findById
             * @methodOf lbServices.VehicleBrand.vehicleModels
             *
             * @description
             *
             * Find a related item by id for vehicleModels.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for vehicleModels
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VehicleModel` object.)
             * </em>
             */
        R.vehicleModels.findById = function() {
          var TargetResource = $injector.get("VehicleModel");
          var action = TargetResource["::findById::VehicleBrand::vehicleModels"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.VehicleModel
 * @header lbServices.VehicleModel
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `VehicleModel` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "VehicleModel",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/vehicleModels/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use VehicleModel.vehicles.findById() instead.
            "prototype$__findById__vehicles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicleModels/:id/vehicles/:fk",
              method: "GET",
            },

            // INTERNAL. Use VehicleModel.vehicleBrand() instead.
            "prototype$__get__vehicleBrand": {
              url: urlBase + "/vehicleModels/:id/vehicleBrand",
              method: "GET",
            },

            // INTERNAL. Use VehicleModel.vehicles() instead.
            "prototype$__get__vehicles": {
              isArray: true,
              url: urlBase + "/vehicleModels/:id/vehicles",
              method: "GET",
            },

            // INTERNAL. Use VehicleModel.vehicles.count() instead.
            "prototype$__count__vehicles": {
              url: urlBase + "/vehicleModels/:id/vehicles/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleModel#exists
             * @methodOf lbServices.VehicleModel
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/vehicleModels/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleModel#findById
             * @methodOf lbServices.VehicleModel
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VehicleModel` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/vehicleModels/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleModel#find
             * @methodOf lbServices.VehicleModel
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VehicleModel` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/vehicleModels",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleModel#findOne
             * @methodOf lbServices.VehicleModel
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VehicleModel` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/vehicleModels/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleModel#count
             * @methodOf lbServices.VehicleModel
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/vehicleModels/count",
              method: "GET",
            },

            // INTERNAL. Use Vehicle.vehicleModel() instead.
            "::get::Vehicle::vehicleModel": {
              url: urlBase + "/vehicles/:id/vehicleModel",
              method: "GET",
            },

            // INTERNAL. Use VehicleBrand.vehicleModels.findById() instead.
            "::findById::VehicleBrand::vehicleModels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicleBrands/:id/vehicleModels/:fk",
              method: "GET",
            },

            // INTERNAL. Use VehicleBrand.vehicleModels() instead.
            "::get::VehicleBrand::vehicleModels": {
              isArray: true,
              url: urlBase + "/vehicleBrands/:id/vehicleModels",
              method: "GET",
            },

            // INTERNAL. Use VehicleBrand.vehicleModels.count() instead.
            "::count::VehicleBrand::vehicleModels": {
              url: urlBase + "/vehicleBrands/:id/vehicleModels/count",
              method: "GET",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.VehicleModel#modelName
        * @propertyOf lbServices.VehicleModel
        * @description
        * The name of the model represented by this $resource,
        * i.e. `VehicleModel`.
        */
        R.modelName = "VehicleModel";

    /**
     * @ngdoc object
     * @name lbServices.VehicleModel.vehicles
     * @header lbServices.VehicleModel.vehicles
     * @object
     * @description
     *
     * The object `VehicleModel.vehicles` groups methods
     * manipulating `Vehicle` instances related to `VehicleModel`.
     *
     * Call {@link lbServices.VehicleModel#vehicles VehicleModel.vehicles()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.VehicleModel#vehicles
             * @methodOf lbServices.VehicleModel
             *
             * @description
             *
             * Queries vehicles of vehicleModel.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
        R.vehicles = function() {
          var TargetResource = $injector.get("Vehicle");
          var action = TargetResource["::get::VehicleModel::vehicles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.VehicleModel.vehicles#count
             * @methodOf lbServices.VehicleModel.vehicles
             *
             * @description
             *
             * Counts vehicles of vehicleModel.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.vehicles.count = function() {
          var TargetResource = $injector.get("Vehicle");
          var action = TargetResource["::count::VehicleModel::vehicles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.VehicleModel.vehicles#findById
             * @methodOf lbServices.VehicleModel.vehicles
             *
             * @description
             *
             * Find a related item by id for vehicles.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for vehicles
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
        R.vehicles.findById = function() {
          var TargetResource = $injector.get("Vehicle");
          var action = TargetResource["::findById::VehicleModel::vehicles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.VehicleModel#vehicleBrand
             * @methodOf lbServices.VehicleModel
             *
             * @description
             *
             * Fetches belongsTo relation vehicleBrand.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `VehicleBrand` object.)
             * </em>
             */
        R.vehicleBrand = function() {
          var TargetResource = $injector.get("VehicleBrand");
          var action = TargetResource["::get::VehicleModel::vehicleBrand"];
          return action.apply(R, arguments);
        };


        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
