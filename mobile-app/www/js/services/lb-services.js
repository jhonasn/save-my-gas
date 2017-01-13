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

            // INTERNAL. Use User.fuelPriceSuggestions.findById() instead.
            "prototype$__findById__fuelPriceSuggestions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/fuelPriceSuggestions/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.fuelPriceSuggestions.destroyById() instead.
            "prototype$__destroyById__fuelPriceSuggestions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/fuelPriceSuggestions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.fuelPriceSuggestions.updateById() instead.
            "prototype$__updateById__fuelPriceSuggestions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/fuelPriceSuggestions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.gasStationRatings.findById() instead.
            "prototype$__findById__gasStationRatings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/gasStationRatings/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.gasStationRatings.destroyById() instead.
            "prototype$__destroyById__gasStationRatings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/gasStationRatings/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.gasStationRatings.updateById() instead.
            "prototype$__updateById__gasStationRatings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/gasStationRatings/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.gasStationComments.findById() instead.
            "prototype$__findById__gasStationComments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/gasStationComments/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.gasStationComments.destroyById() instead.
            "prototype$__destroyById__gasStationComments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/gasStationComments/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.gasStationComments.updateById() instead.
            "prototype$__updateById__gasStationComments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/gasStationComments/:fk",
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

            // INTERNAL. Use User.fuelPriceSuggestions() instead.
            "prototype$__get__fuelPriceSuggestions": {
              isArray: true,
              url: urlBase + "/users/:id/fuelPriceSuggestions",
              method: "GET",
            },

            // INTERNAL. Use User.fuelPriceSuggestions.create() instead.
            "prototype$__create__fuelPriceSuggestions": {
              url: urlBase + "/users/:id/fuelPriceSuggestions",
              method: "POST",
            },

            // INTERNAL. Use User.fuelPriceSuggestions.destroyAll() instead.
            "prototype$__delete__fuelPriceSuggestions": {
              url: urlBase + "/users/:id/fuelPriceSuggestions",
              method: "DELETE",
            },

            // INTERNAL. Use User.fuelPriceSuggestions.count() instead.
            "prototype$__count__fuelPriceSuggestions": {
              url: urlBase + "/users/:id/fuelPriceSuggestions/count",
              method: "GET",
            },

            // INTERNAL. Use User.gasStationRatings() instead.
            "prototype$__get__gasStationRatings": {
              isArray: true,
              url: urlBase + "/users/:id/gasStationRatings",
              method: "GET",
            },

            // INTERNAL. Use User.gasStationRatings.create() instead.
            "prototype$__create__gasStationRatings": {
              url: urlBase + "/users/:id/gasStationRatings",
              method: "POST",
            },

            // INTERNAL. Use User.gasStationRatings.destroyAll() instead.
            "prototype$__delete__gasStationRatings": {
              url: urlBase + "/users/:id/gasStationRatings",
              method: "DELETE",
            },

            // INTERNAL. Use User.gasStationRatings.count() instead.
            "prototype$__count__gasStationRatings": {
              url: urlBase + "/users/:id/gasStationRatings/count",
              method: "GET",
            },

            // INTERNAL. Use User.gasStationComments() instead.
            "prototype$__get__gasStationComments": {
              isArray: true,
              url: urlBase + "/users/:id/gasStationComments",
              method: "GET",
            },

            // INTERNAL. Use User.gasStationComments.create() instead.
            "prototype$__create__gasStationComments": {
              url: urlBase + "/users/:id/gasStationComments",
              method: "POST",
            },

            // INTERNAL. Use User.gasStationComments.destroyAll() instead.
            "prototype$__delete__gasStationComments": {
              url: urlBase + "/users/:id/gasStationComments",
              method: "DELETE",
            },

            // INTERNAL. Use User.gasStationComments.count() instead.
            "prototype$__count__gasStationComments": {
              url: urlBase + "/users/:id/gasStationComments/count",
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
             * Information related to the outcome of the operation
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

            // INTERNAL. Use FuelPriceSuggestionVote.user() instead.
            "::get::FuelPriceSuggestionVote::user": {
              url: urlBase + "/fuelPriceSuggestionVotes/:id/user",
              method: "GET",
            },

            // INTERNAL. Use GasStationRating.user() instead.
            "::get::GasStationRating::user": {
              url: urlBase + "/gasStationRatings/:id/user",
              method: "GET",
            },

            // INTERNAL. Use GasStationComment.user() instead.
            "::get::GasStationComment::user": {
              url: urlBase + "/gasStationComments/:id/user",
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
             * Information related to the outcome of the operation
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
     * @name lbServices.User.fuelPriceSuggestions
     * @header lbServices.User.fuelPriceSuggestions
     * @object
     * @description
     *
     * The object `User.fuelPriceSuggestions` groups methods
     * manipulating `FuelPriceSuggestion` instances related to `User`.
     *
     * Call {@link lbServices.User#fuelPriceSuggestions User.fuelPriceSuggestions()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.User#fuelPriceSuggestions
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries fuelPriceSuggestions of user.
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
             * This usually means the response is a `FuelPriceSuggestion` object.)
             * </em>
             */
        R.fuelPriceSuggestions = function() {
          var TargetResource = $injector.get("FuelPriceSuggestion");
          var action = TargetResource["::get::User::fuelPriceSuggestions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.fuelPriceSuggestions#count
             * @methodOf lbServices.User.fuelPriceSuggestions
             *
             * @description
             *
             * Counts fuelPriceSuggestions of user.
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
        R.fuelPriceSuggestions.count = function() {
          var TargetResource = $injector.get("FuelPriceSuggestion");
          var action = TargetResource["::count::User::fuelPriceSuggestions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.fuelPriceSuggestions#create
             * @methodOf lbServices.User.fuelPriceSuggestions
             *
             * @description
             *
             * Creates a new instance in fuelPriceSuggestions of this model.
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
             * This usually means the response is a `FuelPriceSuggestion` object.)
             * </em>
             */
        R.fuelPriceSuggestions.create = function() {
          var TargetResource = $injector.get("FuelPriceSuggestion");
          var action = TargetResource["::create::User::fuelPriceSuggestions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.fuelPriceSuggestions#createMany
             * @methodOf lbServices.User.fuelPriceSuggestions
             *
             * @description
             *
             * Creates a new instance in fuelPriceSuggestions of this model.
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
             * This usually means the response is a `FuelPriceSuggestion` object.)
             * </em>
             */
        R.fuelPriceSuggestions.createMany = function() {
          var TargetResource = $injector.get("FuelPriceSuggestion");
          var action = TargetResource["::createMany::User::fuelPriceSuggestions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.fuelPriceSuggestions#destroyAll
             * @methodOf lbServices.User.fuelPriceSuggestions
             *
             * @description
             *
             * Deletes all fuelPriceSuggestions of this model.
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
        R.fuelPriceSuggestions.destroyAll = function() {
          var TargetResource = $injector.get("FuelPriceSuggestion");
          var action = TargetResource["::delete::User::fuelPriceSuggestions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.fuelPriceSuggestions#destroyById
             * @methodOf lbServices.User.fuelPriceSuggestions
             *
             * @description
             *
             * Delete a related item by id for fuelPriceSuggestions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for fuelPriceSuggestions
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
        R.fuelPriceSuggestions.destroyById = function() {
          var TargetResource = $injector.get("FuelPriceSuggestion");
          var action = TargetResource["::destroyById::User::fuelPriceSuggestions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.fuelPriceSuggestions#findById
             * @methodOf lbServices.User.fuelPriceSuggestions
             *
             * @description
             *
             * Find a related item by id for fuelPriceSuggestions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for fuelPriceSuggestions
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
             * This usually means the response is a `FuelPriceSuggestion` object.)
             * </em>
             */
        R.fuelPriceSuggestions.findById = function() {
          var TargetResource = $injector.get("FuelPriceSuggestion");
          var action = TargetResource["::findById::User::fuelPriceSuggestions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.fuelPriceSuggestions#updateById
             * @methodOf lbServices.User.fuelPriceSuggestions
             *
             * @description
             *
             * Update a related item by id for fuelPriceSuggestions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for fuelPriceSuggestions
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
             * This usually means the response is a `FuelPriceSuggestion` object.)
             * </em>
             */
        R.fuelPriceSuggestions.updateById = function() {
          var TargetResource = $injector.get("FuelPriceSuggestion");
          var action = TargetResource["::updateById::User::fuelPriceSuggestions"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User.gasStationRatings
     * @header lbServices.User.gasStationRatings
     * @object
     * @description
     *
     * The object `User.gasStationRatings` groups methods
     * manipulating `GasStationRating` instances related to `User`.
     *
     * Call {@link lbServices.User#gasStationRatings User.gasStationRatings()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.User#gasStationRatings
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries gasStationRatings of user.
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
             * This usually means the response is a `GasStationRating` object.)
             * </em>
             */
        R.gasStationRatings = function() {
          var TargetResource = $injector.get("GasStationRating");
          var action = TargetResource["::get::User::gasStationRatings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.gasStationRatings#count
             * @methodOf lbServices.User.gasStationRatings
             *
             * @description
             *
             * Counts gasStationRatings of user.
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
        R.gasStationRatings.count = function() {
          var TargetResource = $injector.get("GasStationRating");
          var action = TargetResource["::count::User::gasStationRatings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.gasStationRatings#create
             * @methodOf lbServices.User.gasStationRatings
             *
             * @description
             *
             * Creates a new instance in gasStationRatings of this model.
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
             * This usually means the response is a `GasStationRating` object.)
             * </em>
             */
        R.gasStationRatings.create = function() {
          var TargetResource = $injector.get("GasStationRating");
          var action = TargetResource["::create::User::gasStationRatings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.gasStationRatings#createMany
             * @methodOf lbServices.User.gasStationRatings
             *
             * @description
             *
             * Creates a new instance in gasStationRatings of this model.
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
             * This usually means the response is a `GasStationRating` object.)
             * </em>
             */
        R.gasStationRatings.createMany = function() {
          var TargetResource = $injector.get("GasStationRating");
          var action = TargetResource["::createMany::User::gasStationRatings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.gasStationRatings#destroyAll
             * @methodOf lbServices.User.gasStationRatings
             *
             * @description
             *
             * Deletes all gasStationRatings of this model.
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
        R.gasStationRatings.destroyAll = function() {
          var TargetResource = $injector.get("GasStationRating");
          var action = TargetResource["::delete::User::gasStationRatings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.gasStationRatings#destroyById
             * @methodOf lbServices.User.gasStationRatings
             *
             * @description
             *
             * Delete a related item by id for gasStationRatings.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for gasStationRatings
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
        R.gasStationRatings.destroyById = function() {
          var TargetResource = $injector.get("GasStationRating");
          var action = TargetResource["::destroyById::User::gasStationRatings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.gasStationRatings#findById
             * @methodOf lbServices.User.gasStationRatings
             *
             * @description
             *
             * Find a related item by id for gasStationRatings.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for gasStationRatings
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
             * This usually means the response is a `GasStationRating` object.)
             * </em>
             */
        R.gasStationRatings.findById = function() {
          var TargetResource = $injector.get("GasStationRating");
          var action = TargetResource["::findById::User::gasStationRatings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.gasStationRatings#updateById
             * @methodOf lbServices.User.gasStationRatings
             *
             * @description
             *
             * Update a related item by id for gasStationRatings.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for gasStationRatings
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
             * This usually means the response is a `GasStationRating` object.)
             * </em>
             */
        R.gasStationRatings.updateById = function() {
          var TargetResource = $injector.get("GasStationRating");
          var action = TargetResource["::updateById::User::gasStationRatings"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User.gasStationComments
     * @header lbServices.User.gasStationComments
     * @object
     * @description
     *
     * The object `User.gasStationComments` groups methods
     * manipulating `GasStationComment` instances related to `User`.
     *
     * Call {@link lbServices.User#gasStationComments User.gasStationComments()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.User#gasStationComments
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries gasStationComments of user.
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
             * This usually means the response is a `GasStationComment` object.)
             * </em>
             */
        R.gasStationComments = function() {
          var TargetResource = $injector.get("GasStationComment");
          var action = TargetResource["::get::User::gasStationComments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.gasStationComments#count
             * @methodOf lbServices.User.gasStationComments
             *
             * @description
             *
             * Counts gasStationComments of user.
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
        R.gasStationComments.count = function() {
          var TargetResource = $injector.get("GasStationComment");
          var action = TargetResource["::count::User::gasStationComments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.gasStationComments#create
             * @methodOf lbServices.User.gasStationComments
             *
             * @description
             *
             * Creates a new instance in gasStationComments of this model.
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
             * This usually means the response is a `GasStationComment` object.)
             * </em>
             */
        R.gasStationComments.create = function() {
          var TargetResource = $injector.get("GasStationComment");
          var action = TargetResource["::create::User::gasStationComments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.gasStationComments#createMany
             * @methodOf lbServices.User.gasStationComments
             *
             * @description
             *
             * Creates a new instance in gasStationComments of this model.
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
             * This usually means the response is a `GasStationComment` object.)
             * </em>
             */
        R.gasStationComments.createMany = function() {
          var TargetResource = $injector.get("GasStationComment");
          var action = TargetResource["::createMany::User::gasStationComments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.gasStationComments#destroyAll
             * @methodOf lbServices.User.gasStationComments
             *
             * @description
             *
             * Deletes all gasStationComments of this model.
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
        R.gasStationComments.destroyAll = function() {
          var TargetResource = $injector.get("GasStationComment");
          var action = TargetResource["::delete::User::gasStationComments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.gasStationComments#destroyById
             * @methodOf lbServices.User.gasStationComments
             *
             * @description
             *
             * Delete a related item by id for gasStationComments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for gasStationComments
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
        R.gasStationComments.destroyById = function() {
          var TargetResource = $injector.get("GasStationComment");
          var action = TargetResource["::destroyById::User::gasStationComments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.gasStationComments#findById
             * @methodOf lbServices.User.gasStationComments
             *
             * @description
             *
             * Find a related item by id for gasStationComments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for gasStationComments
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
             * This usually means the response is a `GasStationComment` object.)
             * </em>
             */
        R.gasStationComments.findById = function() {
          var TargetResource = $injector.get("GasStationComment");
          var action = TargetResource["::findById::User::gasStationComments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.gasStationComments#updateById
             * @methodOf lbServices.User.gasStationComments
             *
             * @description
             *
             * Update a related item by id for gasStationComments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for gasStationComments
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
             * This usually means the response is a `GasStationComment` object.)
             * </em>
             */
        R.gasStationComments.updateById = function() {
          var TargetResource = $injector.get("GasStationComment");
          var action = TargetResource["::updateById::User::gasStationComments"];
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
             * Information related to the outcome of the operation
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
             * Information related to the outcome of the operation
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

            // INTERNAL. Use Vehicle.user() instead.
            "prototype$__get__user": {
              url: urlBase + "/vehicles/:id/user",
              method: "GET",
            },

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

            // INTERNAL. Use Vehicle.vehicleEngine() instead.
            "prototype$__get__vehicleEngine": {
              url: urlBase + "/vehicles/:id/vehicleEngine",
              method: "GET",
            },

            // INTERNAL. Use Vehicle.gasStations.findById() instead.
            "prototype$__findById__gasStations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicles/:id/gasStations/:fk",
              method: "GET",
            },

            // INTERNAL. Use Vehicle.gasStations.exists() instead.
            "prototype$__exists__gasStations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicles/:id/gasStations/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Vehicle.vehicleRefuels.findById() instead.
            "prototype$__findById__vehicleRefuels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicles/:id/vehicleRefuels/:fk",
              method: "GET",
            },

            // INTERNAL. Use Vehicle.vehicleRefuels.destroyById() instead.
            "prototype$__destroyById__vehicleRefuels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicles/:id/vehicleRefuels/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Vehicle.vehicleRefuels.updateById() instead.
            "prototype$__updateById__vehicleRefuels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicles/:id/vehicleRefuels/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Vehicle.gasStations() instead.
            "prototype$__get__gasStations": {
              isArray: true,
              url: urlBase + "/vehicles/:id/gasStations",
              method: "GET",
            },

            // INTERNAL. Use Vehicle.gasStations.count() instead.
            "prototype$__count__gasStations": {
              url: urlBase + "/vehicles/:id/gasStations/count",
              method: "GET",
            },

            // INTERNAL. Use Vehicle.vehicleRefuels() instead.
            "prototype$__get__vehicleRefuels": {
              isArray: true,
              url: urlBase + "/vehicles/:id/vehicleRefuels",
              method: "GET",
            },

            // INTERNAL. Use Vehicle.vehicleRefuels.create() instead.
            "prototype$__create__vehicleRefuels": {
              url: urlBase + "/vehicles/:id/vehicleRefuels",
              method: "POST",
            },

            // INTERNAL. Use Vehicle.vehicleRefuels.destroyAll() instead.
            "prototype$__delete__vehicleRefuels": {
              url: urlBase + "/vehicles/:id/vehicleRefuels",
              method: "DELETE",
            },

            // INTERNAL. Use Vehicle.vehicleRefuels.count() instead.
            "prototype$__count__vehicleRefuels": {
              url: urlBase + "/vehicles/:id/vehicleRefuels/count",
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
             * Information related to the outcome of the operation
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

            // INTERNAL. Use GasStation.vehicles.findById() instead.
            "::findById::GasStation::vehicles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/gasStations/:id/vehicles/:fk",
              method: "GET",
            },

            // INTERNAL. Use GasStation.vehicles.exists() instead.
            "::exists::GasStation::vehicles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/gasStations/:id/vehicles/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use GasStation.vehicles() instead.
            "::get::GasStation::vehicles": {
              isArray: true,
              url: urlBase + "/gasStations/:id/vehicles",
              method: "GET",
            },

            // INTERNAL. Use GasStation.vehicles.count() instead.
            "::count::GasStation::vehicles": {
              url: urlBase + "/gasStations/:id/vehicles/count",
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

            // INTERNAL. Use VehicleEngine.vehicles.findById() instead.
            "::findById::VehicleEngine::vehicles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicleEngines/:id/vehicles/:fk",
              method: "GET",
            },

            // INTERNAL. Use VehicleEngine.vehicles() instead.
            "::get::VehicleEngine::vehicles": {
              isArray: true,
              url: urlBase + "/vehicleEngines/:id/vehicles",
              method: "GET",
            },

            // INTERNAL. Use VehicleEngine.vehicles.count() instead.
            "::count::VehicleEngine::vehicles": {
              url: urlBase + "/vehicleEngines/:id/vehicles/count",
              method: "GET",
            },

            // INTERNAL. Use VehicleRefuel.vehicle() instead.
            "::get::VehicleRefuel::vehicle": {
              url: urlBase + "/vehicleRefuels/:id/vehicle",
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
             * Information related to the outcome of the operation
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

            /**
             * @ngdoc method
             * @name lbServices.Vehicle#vehicleEngine
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Fetches belongsTo relation vehicleEngine.
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
             * This usually means the response is a `VehicleEngine` object.)
             * </em>
             */
        R.vehicleEngine = function() {
          var TargetResource = $injector.get("VehicleEngine");
          var action = TargetResource["::get::Vehicle::vehicleEngine"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Vehicle.gasStations
     * @header lbServices.Vehicle.gasStations
     * @object
     * @description
     *
     * The object `Vehicle.gasStations` groups methods
     * manipulating `GasStation` instances related to `Vehicle`.
     *
     * Call {@link lbServices.Vehicle#gasStations Vehicle.gasStations()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Vehicle#gasStations
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Queries gasStations of vehicle.
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
          var action = TargetResource["::get::Vehicle::gasStations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Vehicle.gasStations#count
             * @methodOf lbServices.Vehicle.gasStations
             *
             * @description
             *
             * Counts gasStations of vehicle.
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
          var action = TargetResource["::count::Vehicle::gasStations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Vehicle.gasStations#exists
             * @methodOf lbServices.Vehicle.gasStations
             *
             * @description
             *
             * Check the existence of gasStations relation to an item by id.
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
        R.gasStations.exists = function() {
          var TargetResource = $injector.get("GasStation");
          var action = TargetResource["::exists::Vehicle::gasStations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Vehicle.gasStations#findById
             * @methodOf lbServices.Vehicle.gasStations
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
          var action = TargetResource["::findById::Vehicle::gasStations"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Vehicle.vehicleRefuels
     * @header lbServices.Vehicle.vehicleRefuels
     * @object
     * @description
     *
     * The object `Vehicle.vehicleRefuels` groups methods
     * manipulating `VehicleRefuel` instances related to `Vehicle`.
     *
     * Call {@link lbServices.Vehicle#vehicleRefuels Vehicle.vehicleRefuels()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Vehicle#vehicleRefuels
             * @methodOf lbServices.Vehicle
             *
             * @description
             *
             * Queries vehicleRefuels of vehicle.
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
             * This usually means the response is a `VehicleRefuel` object.)
             * </em>
             */
        R.vehicleRefuels = function() {
          var TargetResource = $injector.get("VehicleRefuel");
          var action = TargetResource["::get::Vehicle::vehicleRefuels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Vehicle.vehicleRefuels#count
             * @methodOf lbServices.Vehicle.vehicleRefuels
             *
             * @description
             *
             * Counts vehicleRefuels of vehicle.
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
        R.vehicleRefuels.count = function() {
          var TargetResource = $injector.get("VehicleRefuel");
          var action = TargetResource["::count::Vehicle::vehicleRefuels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Vehicle.vehicleRefuels#create
             * @methodOf lbServices.Vehicle.vehicleRefuels
             *
             * @description
             *
             * Creates a new instance in vehicleRefuels of this model.
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
             * This usually means the response is a `VehicleRefuel` object.)
             * </em>
             */
        R.vehicleRefuels.create = function() {
          var TargetResource = $injector.get("VehicleRefuel");
          var action = TargetResource["::create::Vehicle::vehicleRefuels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Vehicle.vehicleRefuels#createMany
             * @methodOf lbServices.Vehicle.vehicleRefuels
             *
             * @description
             *
             * Creates a new instance in vehicleRefuels of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
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
             * This usually means the response is a `VehicleRefuel` object.)
             * </em>
             */
        R.vehicleRefuels.createMany = function() {
          var TargetResource = $injector.get("VehicleRefuel");
          var action = TargetResource["::createMany::Vehicle::vehicleRefuels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Vehicle.vehicleRefuels#destroyAll
             * @methodOf lbServices.Vehicle.vehicleRefuels
             *
             * @description
             *
             * Deletes all vehicleRefuels of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
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
        R.vehicleRefuels.destroyAll = function() {
          var TargetResource = $injector.get("VehicleRefuel");
          var action = TargetResource["::delete::Vehicle::vehicleRefuels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Vehicle.vehicleRefuels#destroyById
             * @methodOf lbServices.Vehicle.vehicleRefuels
             *
             * @description
             *
             * Delete a related item by id for vehicleRefuels.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for vehicleRefuels
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
        R.vehicleRefuels.destroyById = function() {
          var TargetResource = $injector.get("VehicleRefuel");
          var action = TargetResource["::destroyById::Vehicle::vehicleRefuels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Vehicle.vehicleRefuels#findById
             * @methodOf lbServices.Vehicle.vehicleRefuels
             *
             * @description
             *
             * Find a related item by id for vehicleRefuels.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for vehicleRefuels
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
             * This usually means the response is a `VehicleRefuel` object.)
             * </em>
             */
        R.vehicleRefuels.findById = function() {
          var TargetResource = $injector.get("VehicleRefuel");
          var action = TargetResource["::findById::Vehicle::vehicleRefuels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Vehicle.vehicleRefuels#updateById
             * @methodOf lbServices.Vehicle.vehicleRefuels
             *
             * @description
             *
             * Update a related item by id for vehicleRefuels.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for vehicleRefuels
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
             * This usually means the response is a `VehicleRefuel` object.)
             * </em>
             */
        R.vehicleRefuels.updateById = function() {
          var TargetResource = $injector.get("VehicleRefuel");
          var action = TargetResource["::updateById::Vehicle::vehicleRefuels"];
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

            // INTERNAL. Use VehicleType.vehicleModels.findById() instead.
            "prototype$__findById__vehicleModels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicleTypes/:id/vehicleModels/:fk",
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

            // INTERNAL. Use VehicleType.vehicleModels() instead.
            "prototype$__get__vehicleModels": {
              isArray: true,
              url: urlBase + "/vehicleTypes/:id/vehicleModels",
              method: "GET",
            },

            // INTERNAL. Use VehicleType.vehicleModels.count() instead.
            "prototype$__count__vehicleModels": {
              url: urlBase + "/vehicleTypes/:id/vehicleModels/count",
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

            // INTERNAL. Use VehicleModel.vehicleType() instead.
            "::get::VehicleModel::vehicleType": {
              url: urlBase + "/vehicleModels/:id/vehicleType",
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
    /**
     * @ngdoc object
     * @name lbServices.VehicleType.vehicleModels
     * @header lbServices.VehicleType.vehicleModels
     * @object
     * @description
     *
     * The object `VehicleType.vehicleModels` groups methods
     * manipulating `VehicleModel` instances related to `VehicleType`.
     *
     * Call {@link lbServices.VehicleType#vehicleModels VehicleType.vehicleModels()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.VehicleType#vehicleModels
             * @methodOf lbServices.VehicleType
             *
             * @description
             *
             * Queries vehicleModels of vehicleType.
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
          var action = TargetResource["::get::VehicleType::vehicleModels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.VehicleType.vehicleModels#count
             * @methodOf lbServices.VehicleType.vehicleModels
             *
             * @description
             *
             * Counts vehicleModels of vehicleType.
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
          var action = TargetResource["::count::VehicleType::vehicleModels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.VehicleType.vehicleModels#findById
             * @methodOf lbServices.VehicleType.vehicleModels
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
          var action = TargetResource["::findById::VehicleType::vehicleModels"];
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

            // INTERNAL. Use FuelPrice.fuelType() instead.
            "::get::FuelPrice::fuelType": {
              url: urlBase + "/fuelPrices/:id/fuelType",
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

            // INTERNAL. Use FuelPrice.fuelType() instead.
            "prototype$__get__fuelType": {
              url: urlBase + "/fuelPrices/:id/fuelType",
              method: "GET",
            },

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
             * @name lbServices.FuelPrice#fuelType
             * @methodOf lbServices.FuelPrice
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
          var action = TargetResource["::get::FuelPrice::fuelType"];
          return action.apply(R, arguments);
        };

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

            // INTERNAL. Use GasStation.city() instead.
            "prototype$__get__city": {
              url: urlBase + "/gasStations/:id/city",
              method: "GET",
            },

            // INTERNAL. Use GasStation.vehicles.findById() instead.
            "prototype$__findById__vehicles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/gasStations/:id/vehicles/:fk",
              method: "GET",
            },

            // INTERNAL. Use GasStation.vehicles.exists() instead.
            "prototype$__exists__vehicles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/gasStations/:id/vehicles/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use GasStation.vehicleRefuels.findById() instead.
            "prototype$__findById__vehicleRefuels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/gasStations/:id/vehicleRefuels/:fk",
              method: "GET",
            },

            // INTERNAL. Use GasStation.fuelPriceSuggestions.findById() instead.
            "prototype$__findById__fuelPriceSuggestions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/gasStations/:id/fuelPriceSuggestions/:fk",
              method: "GET",
            },

            // INTERNAL. Use GasStation.gasStationRatings.findById() instead.
            "prototype$__findById__gasStationRatings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/gasStations/:id/gasStationRatings/:fk",
              method: "GET",
            },

            // INTERNAL. Use GasStation.gasStationRatings.destroyById() instead.
            "prototype$__destroyById__gasStationRatings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/gasStations/:id/gasStationRatings/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use GasStation.gasStationRatings.updateById() instead.
            "prototype$__updateById__gasStationRatings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/gasStations/:id/gasStationRatings/:fk",
              method: "PUT",
            },

            // INTERNAL. Use GasStation.gasStationComments.findById() instead.
            "prototype$__findById__gasStationComments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/gasStations/:id/gasStationComments/:fk",
              method: "GET",
            },

            // INTERNAL. Use GasStation.gasStationComments.destroyById() instead.
            "prototype$__destroyById__gasStationComments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/gasStations/:id/gasStationComments/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use GasStation.gasStationComments.updateById() instead.
            "prototype$__updateById__gasStationComments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/gasStations/:id/gasStationComments/:fk",
              method: "PUT",
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

            // INTERNAL. Use GasStation.vehicles() instead.
            "prototype$__get__vehicles": {
              isArray: true,
              url: urlBase + "/gasStations/:id/vehicles",
              method: "GET",
            },

            // INTERNAL. Use GasStation.vehicles.count() instead.
            "prototype$__count__vehicles": {
              url: urlBase + "/gasStations/:id/vehicles/count",
              method: "GET",
            },

            // INTERNAL. Use GasStation.vehicleRefuels() instead.
            "prototype$__get__vehicleRefuels": {
              isArray: true,
              url: urlBase + "/gasStations/:id/vehicleRefuels",
              method: "GET",
            },

            // INTERNAL. Use GasStation.vehicleRefuels.count() instead.
            "prototype$__count__vehicleRefuels": {
              url: urlBase + "/gasStations/:id/vehicleRefuels/count",
              method: "GET",
            },

            // INTERNAL. Use GasStation.fuelPriceSuggestions() instead.
            "prototype$__get__fuelPriceSuggestions": {
              isArray: true,
              url: urlBase + "/gasStations/:id/fuelPriceSuggestions",
              method: "GET",
            },

            // INTERNAL. Use GasStation.fuelPriceSuggestions.count() instead.
            "prototype$__count__fuelPriceSuggestions": {
              url: urlBase + "/gasStations/:id/fuelPriceSuggestions/count",
              method: "GET",
            },

            // INTERNAL. Use GasStation.gasStationRatings() instead.
            "prototype$__get__gasStationRatings": {
              isArray: true,
              url: urlBase + "/gasStations/:id/gasStationRatings",
              method: "GET",
            },

            // INTERNAL. Use GasStation.gasStationRatings.create() instead.
            "prototype$__create__gasStationRatings": {
              url: urlBase + "/gasStations/:id/gasStationRatings",
              method: "POST",
            },

            // INTERNAL. Use GasStation.gasStationRatings.destroyAll() instead.
            "prototype$__delete__gasStationRatings": {
              url: urlBase + "/gasStations/:id/gasStationRatings",
              method: "DELETE",
            },

            // INTERNAL. Use GasStation.gasStationRatings.count() instead.
            "prototype$__count__gasStationRatings": {
              url: urlBase + "/gasStations/:id/gasStationRatings/count",
              method: "GET",
            },

            // INTERNAL. Use GasStation.gasStationComments() instead.
            "prototype$__get__gasStationComments": {
              isArray: true,
              url: urlBase + "/gasStations/:id/gasStationComments",
              method: "GET",
            },

            // INTERNAL. Use GasStation.gasStationComments.create() instead.
            "prototype$__create__gasStationComments": {
              url: urlBase + "/gasStations/:id/gasStationComments",
              method: "POST",
            },

            // INTERNAL. Use GasStation.gasStationComments.destroyAll() instead.
            "prototype$__delete__gasStationComments": {
              url: urlBase + "/gasStations/:id/gasStationComments",
              method: "DELETE",
            },

            // INTERNAL. Use GasStation.gasStationComments.count() instead.
            "prototype$__count__gasStationComments": {
              url: urlBase + "/gasStations/:id/gasStationComments/count",
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

            // INTERNAL. Use Vehicle.gasStations.findById() instead.
            "::findById::Vehicle::gasStations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicles/:id/gasStations/:fk",
              method: "GET",
            },

            // INTERNAL. Use Vehicle.gasStations.exists() instead.
            "::exists::Vehicle::gasStations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicles/:id/gasStations/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Vehicle.gasStations() instead.
            "::get::Vehicle::gasStations": {
              isArray: true,
              url: urlBase + "/vehicles/:id/gasStations",
              method: "GET",
            },

            // INTERNAL. Use Vehicle.gasStations.count() instead.
            "::count::Vehicle::gasStations": {
              url: urlBase + "/vehicles/:id/gasStations/count",
              method: "GET",
            },

            // INTERNAL. Use FuelPrice.gasStation() instead.
            "::get::FuelPrice::gasStation": {
              url: urlBase + "/fuelPrices/:id/gasStation",
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

            // INTERNAL. Use VehicleRefuel.gasStation() instead.
            "::get::VehicleRefuel::gasStation": {
              url: urlBase + "/vehicleRefuels/:id/gasStation",
              method: "GET",
            },

            // INTERNAL. Use GasStationRating.gasStation() instead.
            "::get::GasStationRating::gasStation": {
              url: urlBase + "/gasStationRatings/:id/gasStation",
              method: "GET",
            },

            // INTERNAL. Use GasStationComment.gasStation() instead.
            "::get::GasStationComment::gasStation": {
              url: urlBase + "/gasStationComments/:id/gasStation",
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
             * @name lbServices.GasStation#city
             * @methodOf lbServices.GasStation
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
          var action = TargetResource["::get::GasStation::city"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.GasStation.vehicles
     * @header lbServices.GasStation.vehicles
     * @object
     * @description
     *
     * The object `GasStation.vehicles` groups methods
     * manipulating `Vehicle` instances related to `GasStation`.
     *
     * Call {@link lbServices.GasStation#vehicles GasStation.vehicles()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.GasStation#vehicles
             * @methodOf lbServices.GasStation
             *
             * @description
             *
             * Queries vehicles of gasStation.
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
          var action = TargetResource["::get::GasStation::vehicles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.GasStation.vehicles#count
             * @methodOf lbServices.GasStation.vehicles
             *
             * @description
             *
             * Counts vehicles of gasStation.
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
          var action = TargetResource["::count::GasStation::vehicles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.GasStation.vehicles#exists
             * @methodOf lbServices.GasStation.vehicles
             *
             * @description
             *
             * Check the existence of vehicles relation to an item by id.
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
        R.vehicles.exists = function() {
          var TargetResource = $injector.get("Vehicle");
          var action = TargetResource["::exists::GasStation::vehicles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.GasStation.vehicles#findById
             * @methodOf lbServices.GasStation.vehicles
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
          var action = TargetResource["::findById::GasStation::vehicles"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.GasStation.vehicleRefuels
     * @header lbServices.GasStation.vehicleRefuels
     * @object
     * @description
     *
     * The object `GasStation.vehicleRefuels` groups methods
     * manipulating `VehicleRefuel` instances related to `GasStation`.
     *
     * Call {@link lbServices.GasStation#vehicleRefuels GasStation.vehicleRefuels()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.GasStation#vehicleRefuels
             * @methodOf lbServices.GasStation
             *
             * @description
             *
             * Queries vehicleRefuels of gasStation.
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
             * This usually means the response is a `VehicleRefuel` object.)
             * </em>
             */
        R.vehicleRefuels = function() {
          var TargetResource = $injector.get("VehicleRefuel");
          var action = TargetResource["::get::GasStation::vehicleRefuels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.GasStation.vehicleRefuels#count
             * @methodOf lbServices.GasStation.vehicleRefuels
             *
             * @description
             *
             * Counts vehicleRefuels of gasStation.
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
        R.vehicleRefuels.count = function() {
          var TargetResource = $injector.get("VehicleRefuel");
          var action = TargetResource["::count::GasStation::vehicleRefuels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.GasStation.vehicleRefuels#findById
             * @methodOf lbServices.GasStation.vehicleRefuels
             *
             * @description
             *
             * Find a related item by id for vehicleRefuels.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for vehicleRefuels
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
             * This usually means the response is a `VehicleRefuel` object.)
             * </em>
             */
        R.vehicleRefuels.findById = function() {
          var TargetResource = $injector.get("VehicleRefuel");
          var action = TargetResource["::findById::GasStation::vehicleRefuels"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.GasStation.fuelPriceSuggestions
     * @header lbServices.GasStation.fuelPriceSuggestions
     * @object
     * @description
     *
     * The object `GasStation.fuelPriceSuggestions` groups methods
     * manipulating `FuelPriceSuggestion` instances related to `GasStation`.
     *
     * Call {@link lbServices.GasStation#fuelPriceSuggestions GasStation.fuelPriceSuggestions()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.GasStation#fuelPriceSuggestions
             * @methodOf lbServices.GasStation
             *
             * @description
             *
             * Queries fuelPriceSuggestions of gasStation.
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
             * This usually means the response is a `FuelPriceSuggestion` object.)
             * </em>
             */
        R.fuelPriceSuggestions = function() {
          var TargetResource = $injector.get("FuelPriceSuggestion");
          var action = TargetResource["::get::GasStation::fuelPriceSuggestions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.GasStation.fuelPriceSuggestions#count
             * @methodOf lbServices.GasStation.fuelPriceSuggestions
             *
             * @description
             *
             * Counts fuelPriceSuggestions of gasStation.
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
        R.fuelPriceSuggestions.count = function() {
          var TargetResource = $injector.get("FuelPriceSuggestion");
          var action = TargetResource["::count::GasStation::fuelPriceSuggestions"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.GasStation.fuelPriceSuggestions#findById
             * @methodOf lbServices.GasStation.fuelPriceSuggestions
             *
             * @description
             *
             * Find a related item by id for fuelPriceSuggestions.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for fuelPriceSuggestions
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
             * This usually means the response is a `FuelPriceSuggestion` object.)
             * </em>
             */
        R.fuelPriceSuggestions.findById = function() {
          var TargetResource = $injector.get("FuelPriceSuggestion");
          var action = TargetResource["::findById::GasStation::fuelPriceSuggestions"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.GasStation.gasStationRatings
     * @header lbServices.GasStation.gasStationRatings
     * @object
     * @description
     *
     * The object `GasStation.gasStationRatings` groups methods
     * manipulating `GasStationRating` instances related to `GasStation`.
     *
     * Call {@link lbServices.GasStation#gasStationRatings GasStation.gasStationRatings()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.GasStation#gasStationRatings
             * @methodOf lbServices.GasStation
             *
             * @description
             *
             * Queries gasStationRatings of gasStation.
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
             * This usually means the response is a `GasStationRating` object.)
             * </em>
             */
        R.gasStationRatings = function() {
          var TargetResource = $injector.get("GasStationRating");
          var action = TargetResource["::get::GasStation::gasStationRatings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.GasStation.gasStationRatings#count
             * @methodOf lbServices.GasStation.gasStationRatings
             *
             * @description
             *
             * Counts gasStationRatings of gasStation.
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
        R.gasStationRatings.count = function() {
          var TargetResource = $injector.get("GasStationRating");
          var action = TargetResource["::count::GasStation::gasStationRatings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.GasStation.gasStationRatings#create
             * @methodOf lbServices.GasStation.gasStationRatings
             *
             * @description
             *
             * Creates a new instance in gasStationRatings of this model.
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
             * This usually means the response is a `GasStationRating` object.)
             * </em>
             */
        R.gasStationRatings.create = function() {
          var TargetResource = $injector.get("GasStationRating");
          var action = TargetResource["::create::GasStation::gasStationRatings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.GasStation.gasStationRatings#createMany
             * @methodOf lbServices.GasStation.gasStationRatings
             *
             * @description
             *
             * Creates a new instance in gasStationRatings of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
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
             * This usually means the response is a `GasStationRating` object.)
             * </em>
             */
        R.gasStationRatings.createMany = function() {
          var TargetResource = $injector.get("GasStationRating");
          var action = TargetResource["::createMany::GasStation::gasStationRatings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.GasStation.gasStationRatings#destroyAll
             * @methodOf lbServices.GasStation.gasStationRatings
             *
             * @description
             *
             * Deletes all gasStationRatings of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
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
        R.gasStationRatings.destroyAll = function() {
          var TargetResource = $injector.get("GasStationRating");
          var action = TargetResource["::delete::GasStation::gasStationRatings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.GasStation.gasStationRatings#destroyById
             * @methodOf lbServices.GasStation.gasStationRatings
             *
             * @description
             *
             * Delete a related item by id for gasStationRatings.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for gasStationRatings
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
        R.gasStationRatings.destroyById = function() {
          var TargetResource = $injector.get("GasStationRating");
          var action = TargetResource["::destroyById::GasStation::gasStationRatings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.GasStation.gasStationRatings#findById
             * @methodOf lbServices.GasStation.gasStationRatings
             *
             * @description
             *
             * Find a related item by id for gasStationRatings.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for gasStationRatings
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
             * This usually means the response is a `GasStationRating` object.)
             * </em>
             */
        R.gasStationRatings.findById = function() {
          var TargetResource = $injector.get("GasStationRating");
          var action = TargetResource["::findById::GasStation::gasStationRatings"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.GasStation.gasStationRatings#updateById
             * @methodOf lbServices.GasStation.gasStationRatings
             *
             * @description
             *
             * Update a related item by id for gasStationRatings.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for gasStationRatings
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
             * This usually means the response is a `GasStationRating` object.)
             * </em>
             */
        R.gasStationRatings.updateById = function() {
          var TargetResource = $injector.get("GasStationRating");
          var action = TargetResource["::updateById::GasStation::gasStationRatings"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.GasStation.gasStationComments
     * @header lbServices.GasStation.gasStationComments
     * @object
     * @description
     *
     * The object `GasStation.gasStationComments` groups methods
     * manipulating `GasStationComment` instances related to `GasStation`.
     *
     * Call {@link lbServices.GasStation#gasStationComments GasStation.gasStationComments()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.GasStation#gasStationComments
             * @methodOf lbServices.GasStation
             *
             * @description
             *
             * Queries gasStationComments of gasStation.
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
             * This usually means the response is a `GasStationComment` object.)
             * </em>
             */
        R.gasStationComments = function() {
          var TargetResource = $injector.get("GasStationComment");
          var action = TargetResource["::get::GasStation::gasStationComments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.GasStation.gasStationComments#count
             * @methodOf lbServices.GasStation.gasStationComments
             *
             * @description
             *
             * Counts gasStationComments of gasStation.
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
        R.gasStationComments.count = function() {
          var TargetResource = $injector.get("GasStationComment");
          var action = TargetResource["::count::GasStation::gasStationComments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.GasStation.gasStationComments#create
             * @methodOf lbServices.GasStation.gasStationComments
             *
             * @description
             *
             * Creates a new instance in gasStationComments of this model.
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
             * This usually means the response is a `GasStationComment` object.)
             * </em>
             */
        R.gasStationComments.create = function() {
          var TargetResource = $injector.get("GasStationComment");
          var action = TargetResource["::create::GasStation::gasStationComments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.GasStation.gasStationComments#createMany
             * @methodOf lbServices.GasStation.gasStationComments
             *
             * @description
             *
             * Creates a new instance in gasStationComments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
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
             * This usually means the response is a `GasStationComment` object.)
             * </em>
             */
        R.gasStationComments.createMany = function() {
          var TargetResource = $injector.get("GasStationComment");
          var action = TargetResource["::createMany::GasStation::gasStationComments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.GasStation.gasStationComments#destroyAll
             * @methodOf lbServices.GasStation.gasStationComments
             *
             * @description
             *
             * Deletes all gasStationComments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
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
        R.gasStationComments.destroyAll = function() {
          var TargetResource = $injector.get("GasStationComment");
          var action = TargetResource["::delete::GasStation::gasStationComments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.GasStation.gasStationComments#destroyById
             * @methodOf lbServices.GasStation.gasStationComments
             *
             * @description
             *
             * Delete a related item by id for gasStationComments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for gasStationComments
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
        R.gasStationComments.destroyById = function() {
          var TargetResource = $injector.get("GasStationComment");
          var action = TargetResource["::destroyById::GasStation::gasStationComments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.GasStation.gasStationComments#findById
             * @methodOf lbServices.GasStation.gasStationComments
             *
             * @description
             *
             * Find a related item by id for gasStationComments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for gasStationComments
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
             * This usually means the response is a `GasStationComment` object.)
             * </em>
             */
        R.gasStationComments.findById = function() {
          var TargetResource = $injector.get("GasStationComment");
          var action = TargetResource["::findById::GasStation::gasStationComments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.GasStation.gasStationComments#updateById
             * @methodOf lbServices.GasStation.gasStationComments
             *
             * @description
             *
             * Update a related item by id for gasStationComments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for gasStationComments
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
             * This usually means the response is a `GasStationComment` object.)
             * </em>
             */
        R.gasStationComments.updateById = function() {
          var TargetResource = $injector.get("GasStationComment");
          var action = TargetResource["::updateById::GasStation::gasStationComments"];
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

            // INTERNAL. Use GasStation.city() instead.
            "::get::GasStation::city": {
              url: urlBase + "/gasStations/:id/city",
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

            // INTERNAL. Use State.gasStations.findById() instead.
            "prototype$__findById__gasStations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/states/:id/gasStations/:fk",
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

            // INTERNAL. Use City.state() instead.
            "::get::City::state": {
              url: urlBase + "/cities/:id/state",
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
             * @name lbServices.VehicleBrand#create
             * @methodOf lbServices.VehicleBrand
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
             * This usually means the response is a `VehicleBrand` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/vehicleBrands",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleBrand#createMany
             * @methodOf lbServices.VehicleBrand
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
             * This usually means the response is a `VehicleBrand` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/vehicleBrands",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleBrand#upsert
             * @methodOf lbServices.VehicleBrand
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
             * This usually means the response is a `VehicleBrand` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/vehicleBrands",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleBrand#replaceOrCreate
             * @methodOf lbServices.VehicleBrand
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
             * This usually means the response is a `VehicleBrand` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/vehicleBrands/replaceOrCreate",
              method: "POST",
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
             * @name lbServices.VehicleBrand#replaceById
             * @methodOf lbServices.VehicleBrand
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
             * This usually means the response is a `VehicleBrand` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/vehicleBrands/:id/replace",
              method: "POST",
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

            /**
             * @ngdoc method
             * @name lbServices.VehicleBrand#prototype$updateAttributes
             * @methodOf lbServices.VehicleBrand
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
             * This usually means the response is a `VehicleBrand` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/vehicleBrands/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleBrand#createChangeStream
             * @methodOf lbServices.VehicleBrand
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
              url: urlBase + "/vehicleBrands/change-stream",
              method: "POST",
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
             * @ngdoc method
             * @name lbServices.VehicleBrand#patchOrCreate
             * @methodOf lbServices.VehicleBrand
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
             * This usually means the response is a `VehicleBrand` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.VehicleBrand#updateOrCreate
             * @methodOf lbServices.VehicleBrand
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
             * This usually means the response is a `VehicleBrand` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.VehicleBrand#patchAttributes
             * @methodOf lbServices.VehicleBrand
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
             * This usually means the response is a `VehicleBrand` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


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

            // INTERNAL. Use VehicleModel.vehicleType() instead.
            "prototype$__get__vehicleType": {
              url: urlBase + "/vehicleModels/:id/vehicleType",
              method: "GET",
            },

            // INTERNAL. Use VehicleModel.vehicleBrand() instead.
            "prototype$__get__vehicleBrand": {
              url: urlBase + "/vehicleModels/:id/vehicleBrand",
              method: "GET",
            },

            // INTERNAL. Use VehicleModel.vehicleEngines.findById() instead.
            "prototype$__findById__vehicleEngines": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicleModels/:id/vehicleEngines/:fk",
              method: "GET",
            },

            // INTERNAL. Use VehicleModel.vehicleEngines.exists() instead.
            "prototype$__exists__vehicleEngines": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicleModels/:id/vehicleEngines/rel/:fk",
              method: "HEAD",
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

            // INTERNAL. Use VehicleModel.vehicleEngines() instead.
            "prototype$__get__vehicleEngines": {
              isArray: true,
              url: urlBase + "/vehicleModels/:id/vehicleEngines",
              method: "GET",
            },

            // INTERNAL. Use VehicleModel.vehicleEngines.count() instead.
            "prototype$__count__vehicleEngines": {
              url: urlBase + "/vehicleModels/:id/vehicleEngines/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleModel#create
             * @methodOf lbServices.VehicleModel
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
             * This usually means the response is a `VehicleModel` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/vehicleModels",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleModel#createMany
             * @methodOf lbServices.VehicleModel
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
             * This usually means the response is a `VehicleModel` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/vehicleModels",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleModel#upsert
             * @methodOf lbServices.VehicleModel
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
             * This usually means the response is a `VehicleModel` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/vehicleModels",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleModel#replaceOrCreate
             * @methodOf lbServices.VehicleModel
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
             * This usually means the response is a `VehicleModel` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/vehicleModels/replaceOrCreate",
              method: "POST",
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
             * @name lbServices.VehicleModel#replaceById
             * @methodOf lbServices.VehicleModel
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
             * This usually means the response is a `VehicleModel` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/vehicleModels/:id/replace",
              method: "POST",
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

            /**
             * @ngdoc method
             * @name lbServices.VehicleModel#prototype$updateAttributes
             * @methodOf lbServices.VehicleModel
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
             * This usually means the response is a `VehicleModel` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/vehicleModels/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleModel#createChangeStream
             * @methodOf lbServices.VehicleModel
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
              url: urlBase + "/vehicleModels/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Vehicle.vehicleModel() instead.
            "::get::Vehicle::vehicleModel": {
              url: urlBase + "/vehicles/:id/vehicleModel",
              method: "GET",
            },

            // INTERNAL. Use VehicleType.vehicleModels.findById() instead.
            "::findById::VehicleType::vehicleModels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicleTypes/:id/vehicleModels/:fk",
              method: "GET",
            },

            // INTERNAL. Use VehicleType.vehicleModels() instead.
            "::get::VehicleType::vehicleModels": {
              isArray: true,
              url: urlBase + "/vehicleTypes/:id/vehicleModels",
              method: "GET",
            },

            // INTERNAL. Use VehicleType.vehicleModels.count() instead.
            "::count::VehicleType::vehicleModels": {
              url: urlBase + "/vehicleTypes/:id/vehicleModels/count",
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

            // INTERNAL. Use VehicleEngine.vehicleModels.findById() instead.
            "::findById::VehicleEngine::vehicleModels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicleEngines/:id/vehicleModels/:fk",
              method: "GET",
            },

            // INTERNAL. Use VehicleEngine.vehicleModels.exists() instead.
            "::exists::VehicleEngine::vehicleModels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicleEngines/:id/vehicleModels/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use VehicleEngine.vehicleModels() instead.
            "::get::VehicleEngine::vehicleModels": {
              isArray: true,
              url: urlBase + "/vehicleEngines/:id/vehicleModels",
              method: "GET",
            },

            // INTERNAL. Use VehicleEngine.vehicleModels.count() instead.
            "::count::VehicleEngine::vehicleModels": {
              url: urlBase + "/vehicleEngines/:id/vehicleModels/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.VehicleModel#patchOrCreate
             * @methodOf lbServices.VehicleModel
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
             * This usually means the response is a `VehicleModel` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.VehicleModel#updateOrCreate
             * @methodOf lbServices.VehicleModel
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
             * This usually means the response is a `VehicleModel` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.VehicleModel#patchAttributes
             * @methodOf lbServices.VehicleModel
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
             * This usually means the response is a `VehicleModel` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


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
             * @name lbServices.VehicleModel#vehicleType
             * @methodOf lbServices.VehicleModel
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
          var action = TargetResource["::get::VehicleModel::vehicleType"];
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
    /**
     * @ngdoc object
     * @name lbServices.VehicleModel.vehicleEngines
     * @header lbServices.VehicleModel.vehicleEngines
     * @object
     * @description
     *
     * The object `VehicleModel.vehicleEngines` groups methods
     * manipulating `VehicleEngine` instances related to `VehicleModel`.
     *
     * Call {@link lbServices.VehicleModel#vehicleEngines VehicleModel.vehicleEngines()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.VehicleModel#vehicleEngines
             * @methodOf lbServices.VehicleModel
             *
             * @description
             *
             * Queries vehicleEngines of vehicleModel.
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
             * This usually means the response is a `VehicleEngine` object.)
             * </em>
             */
        R.vehicleEngines = function() {
          var TargetResource = $injector.get("VehicleEngine");
          var action = TargetResource["::get::VehicleModel::vehicleEngines"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.VehicleModel.vehicleEngines#count
             * @methodOf lbServices.VehicleModel.vehicleEngines
             *
             * @description
             *
             * Counts vehicleEngines of vehicleModel.
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
        R.vehicleEngines.count = function() {
          var TargetResource = $injector.get("VehicleEngine");
          var action = TargetResource["::count::VehicleModel::vehicleEngines"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.VehicleModel.vehicleEngines#exists
             * @methodOf lbServices.VehicleModel.vehicleEngines
             *
             * @description
             *
             * Check the existence of vehicleEngines relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for vehicleEngines
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
             * This usually means the response is a `VehicleEngine` object.)
             * </em>
             */
        R.vehicleEngines.exists = function() {
          var TargetResource = $injector.get("VehicleEngine");
          var action = TargetResource["::exists::VehicleModel::vehicleEngines"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.VehicleModel.vehicleEngines#findById
             * @methodOf lbServices.VehicleModel.vehicleEngines
             *
             * @description
             *
             * Find a related item by id for vehicleEngines.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for vehicleEngines
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
             * This usually means the response is a `VehicleEngine` object.)
             * </em>
             */
        R.vehicleEngines.findById = function() {
          var TargetResource = $injector.get("VehicleEngine");
          var action = TargetResource["::findById::VehicleModel::vehicleEngines"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.VehicleEngine
 * @header lbServices.VehicleEngine
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `VehicleEngine` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "VehicleEngine",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/vehicleEngines/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use VehicleEngine.vehicles.findById() instead.
            "prototype$__findById__vehicles": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicleEngines/:id/vehicles/:fk",
              method: "GET",
            },

            // INTERNAL. Use VehicleEngine.vehicleModels.findById() instead.
            "prototype$__findById__vehicleModels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicleEngines/:id/vehicleModels/:fk",
              method: "GET",
            },

            // INTERNAL. Use VehicleEngine.vehicleModels.exists() instead.
            "prototype$__exists__vehicleModels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicleEngines/:id/vehicleModels/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use VehicleEngine.vehicles() instead.
            "prototype$__get__vehicles": {
              isArray: true,
              url: urlBase + "/vehicleEngines/:id/vehicles",
              method: "GET",
            },

            // INTERNAL. Use VehicleEngine.vehicles.count() instead.
            "prototype$__count__vehicles": {
              url: urlBase + "/vehicleEngines/:id/vehicles/count",
              method: "GET",
            },

            // INTERNAL. Use VehicleEngine.vehicleModels() instead.
            "prototype$__get__vehicleModels": {
              isArray: true,
              url: urlBase + "/vehicleEngines/:id/vehicleModels",
              method: "GET",
            },

            // INTERNAL. Use VehicleEngine.vehicleModels.count() instead.
            "prototype$__count__vehicleModels": {
              url: urlBase + "/vehicleEngines/:id/vehicleModels/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleEngine#create
             * @methodOf lbServices.VehicleEngine
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
             * This usually means the response is a `VehicleEngine` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/vehicleEngines",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleEngine#createMany
             * @methodOf lbServices.VehicleEngine
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
             * This usually means the response is a `VehicleEngine` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/vehicleEngines",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleEngine#upsert
             * @methodOf lbServices.VehicleEngine
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
             * This usually means the response is a `VehicleEngine` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/vehicleEngines",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleEngine#replaceOrCreate
             * @methodOf lbServices.VehicleEngine
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
             * This usually means the response is a `VehicleEngine` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/vehicleEngines/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleEngine#exists
             * @methodOf lbServices.VehicleEngine
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
              url: urlBase + "/vehicleEngines/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleEngine#findById
             * @methodOf lbServices.VehicleEngine
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
             * This usually means the response is a `VehicleEngine` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/vehicleEngines/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleEngine#replaceById
             * @methodOf lbServices.VehicleEngine
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
             * This usually means the response is a `VehicleEngine` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/vehicleEngines/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleEngine#find
             * @methodOf lbServices.VehicleEngine
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
             * This usually means the response is a `VehicleEngine` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/vehicleEngines",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleEngine#findOne
             * @methodOf lbServices.VehicleEngine
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
             * This usually means the response is a `VehicleEngine` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/vehicleEngines/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleEngine#count
             * @methodOf lbServices.VehicleEngine
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
              url: urlBase + "/vehicleEngines/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleEngine#prototype$updateAttributes
             * @methodOf lbServices.VehicleEngine
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
             * This usually means the response is a `VehicleEngine` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/vehicleEngines/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleEngine#createChangeStream
             * @methodOf lbServices.VehicleEngine
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
              url: urlBase + "/vehicleEngines/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Vehicle.vehicleEngine() instead.
            "::get::Vehicle::vehicleEngine": {
              url: urlBase + "/vehicles/:id/vehicleEngine",
              method: "GET",
            },

            // INTERNAL. Use VehicleModel.vehicleEngines.findById() instead.
            "::findById::VehicleModel::vehicleEngines": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicleModels/:id/vehicleEngines/:fk",
              method: "GET",
            },

            // INTERNAL. Use VehicleModel.vehicleEngines.exists() instead.
            "::exists::VehicleModel::vehicleEngines": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicleModels/:id/vehicleEngines/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use VehicleModel.vehicleEngines() instead.
            "::get::VehicleModel::vehicleEngines": {
              isArray: true,
              url: urlBase + "/vehicleModels/:id/vehicleEngines",
              method: "GET",
            },

            // INTERNAL. Use VehicleModel.vehicleEngines.count() instead.
            "::count::VehicleModel::vehicleEngines": {
              url: urlBase + "/vehicleModels/:id/vehicleEngines/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.VehicleEngine#patchOrCreate
             * @methodOf lbServices.VehicleEngine
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
             * This usually means the response is a `VehicleEngine` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.VehicleEngine#updateOrCreate
             * @methodOf lbServices.VehicleEngine
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
             * This usually means the response is a `VehicleEngine` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.VehicleEngine#patchAttributes
             * @methodOf lbServices.VehicleEngine
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
             * This usually means the response is a `VehicleEngine` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.VehicleEngine#modelName
        * @propertyOf lbServices.VehicleEngine
        * @description
        * The name of the model represented by this $resource,
        * i.e. `VehicleEngine`.
        */
        R.modelName = "VehicleEngine";

    /**
     * @ngdoc object
     * @name lbServices.VehicleEngine.vehicles
     * @header lbServices.VehicleEngine.vehicles
     * @object
     * @description
     *
     * The object `VehicleEngine.vehicles` groups methods
     * manipulating `Vehicle` instances related to `VehicleEngine`.
     *
     * Call {@link lbServices.VehicleEngine#vehicles VehicleEngine.vehicles()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.VehicleEngine#vehicles
             * @methodOf lbServices.VehicleEngine
             *
             * @description
             *
             * Queries vehicles of vehicleEngine.
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
          var action = TargetResource["::get::VehicleEngine::vehicles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.VehicleEngine.vehicles#count
             * @methodOf lbServices.VehicleEngine.vehicles
             *
             * @description
             *
             * Counts vehicles of vehicleEngine.
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
          var action = TargetResource["::count::VehicleEngine::vehicles"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.VehicleEngine.vehicles#findById
             * @methodOf lbServices.VehicleEngine.vehicles
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
          var action = TargetResource["::findById::VehicleEngine::vehicles"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.VehicleEngine.vehicleModels
     * @header lbServices.VehicleEngine.vehicleModels
     * @object
     * @description
     *
     * The object `VehicleEngine.vehicleModels` groups methods
     * manipulating `VehicleModel` instances related to `VehicleEngine`.
     *
     * Call {@link lbServices.VehicleEngine#vehicleModels VehicleEngine.vehicleModels()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.VehicleEngine#vehicleModels
             * @methodOf lbServices.VehicleEngine
             *
             * @description
             *
             * Queries vehicleModels of vehicleEngine.
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
          var action = TargetResource["::get::VehicleEngine::vehicleModels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.VehicleEngine.vehicleModels#count
             * @methodOf lbServices.VehicleEngine.vehicleModels
             *
             * @description
             *
             * Counts vehicleModels of vehicleEngine.
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
          var action = TargetResource["::count::VehicleEngine::vehicleModels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.VehicleEngine.vehicleModels#exists
             * @methodOf lbServices.VehicleEngine.vehicleModels
             *
             * @description
             *
             * Check the existence of vehicleModels relation to an item by id.
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
        R.vehicleModels.exists = function() {
          var TargetResource = $injector.get("VehicleModel");
          var action = TargetResource["::exists::VehicleEngine::vehicleModels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.VehicleEngine.vehicleModels#findById
             * @methodOf lbServices.VehicleEngine.vehicleModels
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
          var action = TargetResource["::findById::VehicleEngine::vehicleModels"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.VehiclePhoto
 * @header lbServices.VehiclePhoto
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `VehiclePhoto` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "VehiclePhoto",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/vehiclesPhotos/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.VehiclePhoto#getContainers
             * @methodOf lbServices.VehiclePhoto
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
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
             * This usually means the response is a `VehiclePhoto` object.)
             * </em>
             */
            "getContainers": {
              isArray: true,
              url: urlBase + "/vehiclesPhotos",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehiclePhoto#createContainer
             * @methodOf lbServices.VehiclePhoto
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
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
             * This usually means the response is a `VehiclePhoto` object.)
             * </em>
             */
            "createContainer": {
              url: urlBase + "/vehiclesPhotos",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehiclePhoto#destroyContainer
             * @methodOf lbServices.VehiclePhoto
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
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
             *  - `` – `{undefined=}` -
             */
            "destroyContainer": {
              url: urlBase + "/vehiclesPhotos/:container",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehiclePhoto#getContainer
             * @methodOf lbServices.VehiclePhoto
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
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
             * This usually means the response is a `VehiclePhoto` object.)
             * </em>
             */
            "getContainer": {
              url: urlBase + "/vehiclesPhotos/:container",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehiclePhoto#getFiles
             * @methodOf lbServices.VehiclePhoto
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
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
             * This usually means the response is a `VehiclePhoto` object.)
             * </em>
             */
            "getFiles": {
              isArray: true,
              url: urlBase + "/vehiclesPhotos/:container/files",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehiclePhoto#getFile
             * @methodOf lbServices.VehiclePhoto
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
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
             * This usually means the response is a `VehiclePhoto` object.)
             * </em>
             */
            "getFile": {
              url: urlBase + "/vehiclesPhotos/:container/files/:file",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehiclePhoto#removeFile
             * @methodOf lbServices.VehiclePhoto
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
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
             *  - `` – `{undefined=}` -
             */
            "removeFile": {
              url: urlBase + "/vehiclesPhotos/:container/files/:file",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehiclePhoto#upload
             * @methodOf lbServices.VehiclePhoto
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `req` – `{object=}` -
             *
             *  - `res` – `{object=}` -
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
             *  - `result` – `{object=}` -
             */
            "upload": {
              url: urlBase + "/vehiclesPhotos/:container/upload",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehiclePhoto#download
             * @methodOf lbServices.VehiclePhoto
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
             *
             *  - `req` – `{object=}` -
             *
             *  - `res` – `{object=}` -
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
            "download": {
              url: urlBase + "/vehiclesPhotos/:container/download/:file",
              method: "GET",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.VehiclePhoto#modelName
        * @propertyOf lbServices.VehiclePhoto
        * @description
        * The name of the model represented by this $resource,
        * i.e. `VehiclePhoto`.
        */
        R.modelName = "VehiclePhoto";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.GasStationPhoto
 * @header lbServices.GasStationPhoto
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `GasStationPhoto` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "GasStationPhoto",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/gasStationsPhotos/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.GasStationPhoto#getContainers
             * @methodOf lbServices.GasStationPhoto
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
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
             * This usually means the response is a `GasStationPhoto` object.)
             * </em>
             */
            "getContainers": {
              isArray: true,
              url: urlBase + "/gasStationsPhotos",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationPhoto#createContainer
             * @methodOf lbServices.GasStationPhoto
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
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
             * This usually means the response is a `GasStationPhoto` object.)
             * </em>
             */
            "createContainer": {
              url: urlBase + "/gasStationsPhotos",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationPhoto#destroyContainer
             * @methodOf lbServices.GasStationPhoto
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
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
             *  - `` – `{undefined=}` -
             */
            "destroyContainer": {
              url: urlBase + "/gasStationsPhotos/:container",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationPhoto#getContainer
             * @methodOf lbServices.GasStationPhoto
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
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
             * This usually means the response is a `GasStationPhoto` object.)
             * </em>
             */
            "getContainer": {
              url: urlBase + "/gasStationsPhotos/:container",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationPhoto#getFiles
             * @methodOf lbServices.GasStationPhoto
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
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
             * This usually means the response is a `GasStationPhoto` object.)
             * </em>
             */
            "getFiles": {
              isArray: true,
              url: urlBase + "/gasStationsPhotos/:container/files",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationPhoto#getFile
             * @methodOf lbServices.GasStationPhoto
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
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
             * This usually means the response is a `GasStationPhoto` object.)
             * </em>
             */
            "getFile": {
              url: urlBase + "/gasStationsPhotos/:container/files/:file",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationPhoto#removeFile
             * @methodOf lbServices.GasStationPhoto
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
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
             *  - `` – `{undefined=}` -
             */
            "removeFile": {
              url: urlBase + "/gasStationsPhotos/:container/files/:file",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationPhoto#upload
             * @methodOf lbServices.GasStationPhoto
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `req` – `{object=}` -
             *
             *  - `res` – `{object=}` -
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
             *  - `result` – `{object=}` -
             */
            "upload": {
              url: urlBase + "/gasStationsPhotos/:container/upload",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationPhoto#download
             * @methodOf lbServices.GasStationPhoto
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
             *
             *  - `req` – `{object=}` -
             *
             *  - `res` – `{object=}` -
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
            "download": {
              url: urlBase + "/gasStationsPhotos/:container/download/:file",
              method: "GET",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.GasStationPhoto#modelName
        * @propertyOf lbServices.GasStationPhoto
        * @description
        * The name of the model represented by this $resource,
        * i.e. `GasStationPhoto`.
        */
        R.modelName = "GasStationPhoto";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.VehicleRefuel
 * @header lbServices.VehicleRefuel
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `VehicleRefuel` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "VehicleRefuel",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/vehicleRefuels/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use VehicleRefuel.gasStation() instead.
            "prototype$__get__gasStation": {
              url: urlBase + "/vehicleRefuels/:id/gasStation",
              method: "GET",
            },

            // INTERNAL. Use VehicleRefuel.vehicle() instead.
            "prototype$__get__vehicle": {
              url: urlBase + "/vehicleRefuels/:id/vehicle",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleRefuel#create
             * @methodOf lbServices.VehicleRefuel
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
             * This usually means the response is a `VehicleRefuel` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/vehicleRefuels",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleRefuel#createMany
             * @methodOf lbServices.VehicleRefuel
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
             * This usually means the response is a `VehicleRefuel` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/vehicleRefuels",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleRefuel#upsert
             * @methodOf lbServices.VehicleRefuel
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
             * This usually means the response is a `VehicleRefuel` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/vehicleRefuels",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleRefuel#replaceOrCreate
             * @methodOf lbServices.VehicleRefuel
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
             * This usually means the response is a `VehicleRefuel` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/vehicleRefuels/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleRefuel#upsertWithWhere
             * @methodOf lbServices.VehicleRefuel
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
             * This usually means the response is a `VehicleRefuel` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/vehicleRefuels/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleRefuel#exists
             * @methodOf lbServices.VehicleRefuel
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
              url: urlBase + "/vehicleRefuels/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleRefuel#findById
             * @methodOf lbServices.VehicleRefuel
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
             * This usually means the response is a `VehicleRefuel` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/vehicleRefuels/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleRefuel#replaceById
             * @methodOf lbServices.VehicleRefuel
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
             * This usually means the response is a `VehicleRefuel` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/vehicleRefuels/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleRefuel#find
             * @methodOf lbServices.VehicleRefuel
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
             * This usually means the response is a `VehicleRefuel` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/vehicleRefuels",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleRefuel#findOne
             * @methodOf lbServices.VehicleRefuel
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
             * This usually means the response is a `VehicleRefuel` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/vehicleRefuels/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleRefuel#updateAll
             * @methodOf lbServices.VehicleRefuel
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
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/vehicleRefuels/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleRefuel#deleteById
             * @methodOf lbServices.VehicleRefuel
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
             * This usually means the response is a `VehicleRefuel` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/vehicleRefuels/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleRefuel#count
             * @methodOf lbServices.VehicleRefuel
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
              url: urlBase + "/vehicleRefuels/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleRefuel#prototype$updateAttributes
             * @methodOf lbServices.VehicleRefuel
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
             * This usually means the response is a `VehicleRefuel` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/vehicleRefuels/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.VehicleRefuel#createChangeStream
             * @methodOf lbServices.VehicleRefuel
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
              url: urlBase + "/vehicleRefuels/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Vehicle.vehicleRefuels.findById() instead.
            "::findById::Vehicle::vehicleRefuels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicles/:id/vehicleRefuels/:fk",
              method: "GET",
            },

            // INTERNAL. Use Vehicle.vehicleRefuels.destroyById() instead.
            "::destroyById::Vehicle::vehicleRefuels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicles/:id/vehicleRefuels/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Vehicle.vehicleRefuels.updateById() instead.
            "::updateById::Vehicle::vehicleRefuels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/vehicles/:id/vehicleRefuels/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Vehicle.vehicleRefuels() instead.
            "::get::Vehicle::vehicleRefuels": {
              isArray: true,
              url: urlBase + "/vehicles/:id/vehicleRefuels",
              method: "GET",
            },

            // INTERNAL. Use Vehicle.vehicleRefuels.create() instead.
            "::create::Vehicle::vehicleRefuels": {
              url: urlBase + "/vehicles/:id/vehicleRefuels",
              method: "POST",
            },

            // INTERNAL. Use Vehicle.vehicleRefuels.createMany() instead.
            "::createMany::Vehicle::vehicleRefuels": {
              isArray: true,
              url: urlBase + "/vehicles/:id/vehicleRefuels",
              method: "POST",
            },

            // INTERNAL. Use Vehicle.vehicleRefuels.destroyAll() instead.
            "::delete::Vehicle::vehicleRefuels": {
              url: urlBase + "/vehicles/:id/vehicleRefuels",
              method: "DELETE",
            },

            // INTERNAL. Use Vehicle.vehicleRefuels.count() instead.
            "::count::Vehicle::vehicleRefuels": {
              url: urlBase + "/vehicles/:id/vehicleRefuels/count",
              method: "GET",
            },

            // INTERNAL. Use GasStation.vehicleRefuels.findById() instead.
            "::findById::GasStation::vehicleRefuels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/gasStations/:id/vehicleRefuels/:fk",
              method: "GET",
            },

            // INTERNAL. Use GasStation.vehicleRefuels() instead.
            "::get::GasStation::vehicleRefuels": {
              isArray: true,
              url: urlBase + "/gasStations/:id/vehicleRefuels",
              method: "GET",
            },

            // INTERNAL. Use GasStation.vehicleRefuels.count() instead.
            "::count::GasStation::vehicleRefuels": {
              url: urlBase + "/gasStations/:id/vehicleRefuels/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.VehicleRefuel#patchOrCreate
             * @methodOf lbServices.VehicleRefuel
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
             * This usually means the response is a `VehicleRefuel` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.VehicleRefuel#updateOrCreate
             * @methodOf lbServices.VehicleRefuel
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
             * This usually means the response is a `VehicleRefuel` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.VehicleRefuel#patchOrCreateWithWhere
             * @methodOf lbServices.VehicleRefuel
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
             * This usually means the response is a `VehicleRefuel` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.VehicleRefuel#update
             * @methodOf lbServices.VehicleRefuel
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
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.VehicleRefuel#destroyById
             * @methodOf lbServices.VehicleRefuel
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
             * This usually means the response is a `VehicleRefuel` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.VehicleRefuel#removeById
             * @methodOf lbServices.VehicleRefuel
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
             * This usually means the response is a `VehicleRefuel` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.VehicleRefuel#patchAttributes
             * @methodOf lbServices.VehicleRefuel
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
             * This usually means the response is a `VehicleRefuel` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.VehicleRefuel#modelName
        * @propertyOf lbServices.VehicleRefuel
        * @description
        * The name of the model represented by this $resource,
        * i.e. `VehicleRefuel`.
        */
        R.modelName = "VehicleRefuel";


            /**
             * @ngdoc method
             * @name lbServices.VehicleRefuel#gasStation
             * @methodOf lbServices.VehicleRefuel
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
          var action = TargetResource["::get::VehicleRefuel::gasStation"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.VehicleRefuel#vehicle
             * @methodOf lbServices.VehicleRefuel
             *
             * @description
             *
             * Fetches belongsTo relation vehicle.
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
             * This usually means the response is a `Vehicle` object.)
             * </em>
             */
        R.vehicle = function() {
          var TargetResource = $injector.get("Vehicle");
          var action = TargetResource["::get::VehicleRefuel::vehicle"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.FuelPriceSuggestion
 * @header lbServices.FuelPriceSuggestion
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `FuelPriceSuggestion` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "FuelPriceSuggestion",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/fuelPriceSuggestions/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use FuelPriceSuggestion.fuelPriceSuggestionVotes.findById() instead.
            "prototype$__findById__fuelPriceSuggestionVotes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/fuelPriceSuggestions/:id/fuelPriceSuggestionVotes/:fk",
              method: "GET",
            },

            // INTERNAL. Use FuelPriceSuggestion.fuelPriceSuggestionVotes.destroyById() instead.
            "prototype$__destroyById__fuelPriceSuggestionVotes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/fuelPriceSuggestions/:id/fuelPriceSuggestionVotes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use FuelPriceSuggestion.fuelPriceSuggestionVotes.updateById() instead.
            "prototype$__updateById__fuelPriceSuggestionVotes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/fuelPriceSuggestions/:id/fuelPriceSuggestionVotes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use FuelPriceSuggestion.fuelPriceSuggestionVotes() instead.
            "prototype$__get__fuelPriceSuggestionVotes": {
              isArray: true,
              url: urlBase + "/fuelPriceSuggestions/:id/fuelPriceSuggestionVotes",
              method: "GET",
            },

            // INTERNAL. Use FuelPriceSuggestion.fuelPriceSuggestionVotes.create() instead.
            "prototype$__create__fuelPriceSuggestionVotes": {
              url: urlBase + "/fuelPriceSuggestions/:id/fuelPriceSuggestionVotes",
              method: "POST",
            },

            // INTERNAL. Use FuelPriceSuggestion.fuelPriceSuggestionVotes.destroyAll() instead.
            "prototype$__delete__fuelPriceSuggestionVotes": {
              url: urlBase + "/fuelPriceSuggestions/:id/fuelPriceSuggestionVotes",
              method: "DELETE",
            },

            // INTERNAL. Use FuelPriceSuggestion.fuelPriceSuggestionVotes.count() instead.
            "prototype$__count__fuelPriceSuggestionVotes": {
              url: urlBase + "/fuelPriceSuggestions/:id/fuelPriceSuggestionVotes/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion#create
             * @methodOf lbServices.FuelPriceSuggestion
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
             * This usually means the response is a `FuelPriceSuggestion` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/fuelPriceSuggestions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion#createMany
             * @methodOf lbServices.FuelPriceSuggestion
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
             * This usually means the response is a `FuelPriceSuggestion` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/fuelPriceSuggestions",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion#upsert
             * @methodOf lbServices.FuelPriceSuggestion
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
             * This usually means the response is a `FuelPriceSuggestion` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/fuelPriceSuggestions",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion#replaceOrCreate
             * @methodOf lbServices.FuelPriceSuggestion
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
             * This usually means the response is a `FuelPriceSuggestion` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/fuelPriceSuggestions/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion#upsertWithWhere
             * @methodOf lbServices.FuelPriceSuggestion
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
             * This usually means the response is a `FuelPriceSuggestion` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/fuelPriceSuggestions/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion#exists
             * @methodOf lbServices.FuelPriceSuggestion
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
              url: urlBase + "/fuelPriceSuggestions/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion#findById
             * @methodOf lbServices.FuelPriceSuggestion
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
             * This usually means the response is a `FuelPriceSuggestion` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/fuelPriceSuggestions/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion#replaceById
             * @methodOf lbServices.FuelPriceSuggestion
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
             * This usually means the response is a `FuelPriceSuggestion` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/fuelPriceSuggestions/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion#find
             * @methodOf lbServices.FuelPriceSuggestion
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
             * This usually means the response is a `FuelPriceSuggestion` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/fuelPriceSuggestions",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion#findOne
             * @methodOf lbServices.FuelPriceSuggestion
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
             * This usually means the response is a `FuelPriceSuggestion` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/fuelPriceSuggestions/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion#updateAll
             * @methodOf lbServices.FuelPriceSuggestion
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
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/fuelPriceSuggestions/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion#deleteById
             * @methodOf lbServices.FuelPriceSuggestion
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
             * This usually means the response is a `FuelPriceSuggestion` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/fuelPriceSuggestions/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion#count
             * @methodOf lbServices.FuelPriceSuggestion
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
              url: urlBase + "/fuelPriceSuggestions/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion#prototype$updateAttributes
             * @methodOf lbServices.FuelPriceSuggestion
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
             * This usually means the response is a `FuelPriceSuggestion` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/fuelPriceSuggestions/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion#createChangeStream
             * @methodOf lbServices.FuelPriceSuggestion
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
              url: urlBase + "/fuelPriceSuggestions/change-stream",
              method: "POST",
            },

            // INTERNAL. Use User.fuelPriceSuggestions.findById() instead.
            "::findById::User::fuelPriceSuggestions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/fuelPriceSuggestions/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.fuelPriceSuggestions.destroyById() instead.
            "::destroyById::User::fuelPriceSuggestions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/fuelPriceSuggestions/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.fuelPriceSuggestions.updateById() instead.
            "::updateById::User::fuelPriceSuggestions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/fuelPriceSuggestions/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.fuelPriceSuggestions() instead.
            "::get::User::fuelPriceSuggestions": {
              isArray: true,
              url: urlBase + "/users/:id/fuelPriceSuggestions",
              method: "GET",
            },

            // INTERNAL. Use User.fuelPriceSuggestions.create() instead.
            "::create::User::fuelPriceSuggestions": {
              url: urlBase + "/users/:id/fuelPriceSuggestions",
              method: "POST",
            },

            // INTERNAL. Use User.fuelPriceSuggestions.createMany() instead.
            "::createMany::User::fuelPriceSuggestions": {
              isArray: true,
              url: urlBase + "/users/:id/fuelPriceSuggestions",
              method: "POST",
            },

            // INTERNAL. Use User.fuelPriceSuggestions.destroyAll() instead.
            "::delete::User::fuelPriceSuggestions": {
              url: urlBase + "/users/:id/fuelPriceSuggestions",
              method: "DELETE",
            },

            // INTERNAL. Use User.fuelPriceSuggestions.count() instead.
            "::count::User::fuelPriceSuggestions": {
              url: urlBase + "/users/:id/fuelPriceSuggestions/count",
              method: "GET",
            },

            // INTERNAL. Use GasStation.fuelPriceSuggestions.findById() instead.
            "::findById::GasStation::fuelPriceSuggestions": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/gasStations/:id/fuelPriceSuggestions/:fk",
              method: "GET",
            },

            // INTERNAL. Use GasStation.fuelPriceSuggestions() instead.
            "::get::GasStation::fuelPriceSuggestions": {
              isArray: true,
              url: urlBase + "/gasStations/:id/fuelPriceSuggestions",
              method: "GET",
            },

            // INTERNAL. Use GasStation.fuelPriceSuggestions.count() instead.
            "::count::GasStation::fuelPriceSuggestions": {
              url: urlBase + "/gasStations/:id/fuelPriceSuggestions/count",
              method: "GET",
            },

            // INTERNAL. Use FuelPriceSuggestionVote.fuelPriceSuggestion() instead.
            "::get::FuelPriceSuggestionVote::fuelPriceSuggestion": {
              url: urlBase + "/fuelPriceSuggestionVotes/:id/fuelPriceSuggestion",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion#patchOrCreate
             * @methodOf lbServices.FuelPriceSuggestion
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
             * This usually means the response is a `FuelPriceSuggestion` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion#updateOrCreate
             * @methodOf lbServices.FuelPriceSuggestion
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
             * This usually means the response is a `FuelPriceSuggestion` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion#patchOrCreateWithWhere
             * @methodOf lbServices.FuelPriceSuggestion
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
             * This usually means the response is a `FuelPriceSuggestion` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion#update
             * @methodOf lbServices.FuelPriceSuggestion
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
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion#destroyById
             * @methodOf lbServices.FuelPriceSuggestion
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
             * This usually means the response is a `FuelPriceSuggestion` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion#removeById
             * @methodOf lbServices.FuelPriceSuggestion
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
             * This usually means the response is a `FuelPriceSuggestion` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion#patchAttributes
             * @methodOf lbServices.FuelPriceSuggestion
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
             * This usually means the response is a `FuelPriceSuggestion` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.FuelPriceSuggestion#modelName
        * @propertyOf lbServices.FuelPriceSuggestion
        * @description
        * The name of the model represented by this $resource,
        * i.e. `FuelPriceSuggestion`.
        */
        R.modelName = "FuelPriceSuggestion";

    /**
     * @ngdoc object
     * @name lbServices.FuelPriceSuggestion.fuelPriceSuggestionVotes
     * @header lbServices.FuelPriceSuggestion.fuelPriceSuggestionVotes
     * @object
     * @description
     *
     * The object `FuelPriceSuggestion.fuelPriceSuggestionVotes` groups methods
     * manipulating `FuelPriceSuggestionVote` instances related to `FuelPriceSuggestion`.
     *
     * Call {@link lbServices.FuelPriceSuggestion#fuelPriceSuggestionVotes FuelPriceSuggestion.fuelPriceSuggestionVotes()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion#fuelPriceSuggestionVotes
             * @methodOf lbServices.FuelPriceSuggestion
             *
             * @description
             *
             * Queries fuelPriceSuggestionVotes of fuelPriceSuggestion.
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
             * This usually means the response is a `FuelPriceSuggestionVote` object.)
             * </em>
             */
        R.fuelPriceSuggestionVotes = function() {
          var TargetResource = $injector.get("FuelPriceSuggestionVote");
          var action = TargetResource["::get::FuelPriceSuggestion::fuelPriceSuggestionVotes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion.fuelPriceSuggestionVotes#count
             * @methodOf lbServices.FuelPriceSuggestion.fuelPriceSuggestionVotes
             *
             * @description
             *
             * Counts fuelPriceSuggestionVotes of fuelPriceSuggestion.
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
        R.fuelPriceSuggestionVotes.count = function() {
          var TargetResource = $injector.get("FuelPriceSuggestionVote");
          var action = TargetResource["::count::FuelPriceSuggestion::fuelPriceSuggestionVotes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion.fuelPriceSuggestionVotes#create
             * @methodOf lbServices.FuelPriceSuggestion.fuelPriceSuggestionVotes
             *
             * @description
             *
             * Creates a new instance in fuelPriceSuggestionVotes of this model.
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
             * This usually means the response is a `FuelPriceSuggestionVote` object.)
             * </em>
             */
        R.fuelPriceSuggestionVotes.create = function() {
          var TargetResource = $injector.get("FuelPriceSuggestionVote");
          var action = TargetResource["::create::FuelPriceSuggestion::fuelPriceSuggestionVotes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion.fuelPriceSuggestionVotes#createMany
             * @methodOf lbServices.FuelPriceSuggestion.fuelPriceSuggestionVotes
             *
             * @description
             *
             * Creates a new instance in fuelPriceSuggestionVotes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
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
             * This usually means the response is a `FuelPriceSuggestionVote` object.)
             * </em>
             */
        R.fuelPriceSuggestionVotes.createMany = function() {
          var TargetResource = $injector.get("FuelPriceSuggestionVote");
          var action = TargetResource["::createMany::FuelPriceSuggestion::fuelPriceSuggestionVotes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion.fuelPriceSuggestionVotes#destroyAll
             * @methodOf lbServices.FuelPriceSuggestion.fuelPriceSuggestionVotes
             *
             * @description
             *
             * Deletes all fuelPriceSuggestionVotes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
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
        R.fuelPriceSuggestionVotes.destroyAll = function() {
          var TargetResource = $injector.get("FuelPriceSuggestionVote");
          var action = TargetResource["::delete::FuelPriceSuggestion::fuelPriceSuggestionVotes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion.fuelPriceSuggestionVotes#destroyById
             * @methodOf lbServices.FuelPriceSuggestion.fuelPriceSuggestionVotes
             *
             * @description
             *
             * Delete a related item by id for fuelPriceSuggestionVotes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for fuelPriceSuggestionVotes
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
        R.fuelPriceSuggestionVotes.destroyById = function() {
          var TargetResource = $injector.get("FuelPriceSuggestionVote");
          var action = TargetResource["::destroyById::FuelPriceSuggestion::fuelPriceSuggestionVotes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion.fuelPriceSuggestionVotes#findById
             * @methodOf lbServices.FuelPriceSuggestion.fuelPriceSuggestionVotes
             *
             * @description
             *
             * Find a related item by id for fuelPriceSuggestionVotes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for fuelPriceSuggestionVotes
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
             * This usually means the response is a `FuelPriceSuggestionVote` object.)
             * </em>
             */
        R.fuelPriceSuggestionVotes.findById = function() {
          var TargetResource = $injector.get("FuelPriceSuggestionVote");
          var action = TargetResource["::findById::FuelPriceSuggestion::fuelPriceSuggestionVotes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestion.fuelPriceSuggestionVotes#updateById
             * @methodOf lbServices.FuelPriceSuggestion.fuelPriceSuggestionVotes
             *
             * @description
             *
             * Update a related item by id for fuelPriceSuggestionVotes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for fuelPriceSuggestionVotes
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
             * This usually means the response is a `FuelPriceSuggestionVote` object.)
             * </em>
             */
        R.fuelPriceSuggestionVotes.updateById = function() {
          var TargetResource = $injector.get("FuelPriceSuggestionVote");
          var action = TargetResource["::updateById::FuelPriceSuggestion::fuelPriceSuggestionVotes"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.FuelPriceSuggestionVote
 * @header lbServices.FuelPriceSuggestionVote
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `FuelPriceSuggestionVote` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "FuelPriceSuggestionVote",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/fuelPriceSuggestionVotes/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use FuelPriceSuggestionVote.user() instead.
            "prototype$__get__user": {
              url: urlBase + "/fuelPriceSuggestionVotes/:id/user",
              method: "GET",
            },

            // INTERNAL. Use FuelPriceSuggestionVote.fuelPriceSuggestion() instead.
            "prototype$__get__fuelPriceSuggestion": {
              url: urlBase + "/fuelPriceSuggestionVotes/:id/fuelPriceSuggestion",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestionVote#create
             * @methodOf lbServices.FuelPriceSuggestionVote
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
             * This usually means the response is a `FuelPriceSuggestionVote` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/fuelPriceSuggestionVotes",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestionVote#createMany
             * @methodOf lbServices.FuelPriceSuggestionVote
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
             * This usually means the response is a `FuelPriceSuggestionVote` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/fuelPriceSuggestionVotes",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestionVote#upsert
             * @methodOf lbServices.FuelPriceSuggestionVote
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
             * This usually means the response is a `FuelPriceSuggestionVote` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/fuelPriceSuggestionVotes",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestionVote#replaceOrCreate
             * @methodOf lbServices.FuelPriceSuggestionVote
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
             * This usually means the response is a `FuelPriceSuggestionVote` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/fuelPriceSuggestionVotes/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestionVote#upsertWithWhere
             * @methodOf lbServices.FuelPriceSuggestionVote
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
             * This usually means the response is a `FuelPriceSuggestionVote` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/fuelPriceSuggestionVotes/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestionVote#exists
             * @methodOf lbServices.FuelPriceSuggestionVote
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
              url: urlBase + "/fuelPriceSuggestionVotes/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestionVote#findById
             * @methodOf lbServices.FuelPriceSuggestionVote
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
             * This usually means the response is a `FuelPriceSuggestionVote` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/fuelPriceSuggestionVotes/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestionVote#replaceById
             * @methodOf lbServices.FuelPriceSuggestionVote
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
             * This usually means the response is a `FuelPriceSuggestionVote` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/fuelPriceSuggestionVotes/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestionVote#find
             * @methodOf lbServices.FuelPriceSuggestionVote
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
             * This usually means the response is a `FuelPriceSuggestionVote` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/fuelPriceSuggestionVotes",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestionVote#findOne
             * @methodOf lbServices.FuelPriceSuggestionVote
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
             * This usually means the response is a `FuelPriceSuggestionVote` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/fuelPriceSuggestionVotes/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestionVote#updateAll
             * @methodOf lbServices.FuelPriceSuggestionVote
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
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/fuelPriceSuggestionVotes/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestionVote#deleteById
             * @methodOf lbServices.FuelPriceSuggestionVote
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
             * This usually means the response is a `FuelPriceSuggestionVote` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/fuelPriceSuggestionVotes/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestionVote#count
             * @methodOf lbServices.FuelPriceSuggestionVote
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
              url: urlBase + "/fuelPriceSuggestionVotes/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestionVote#prototype$updateAttributes
             * @methodOf lbServices.FuelPriceSuggestionVote
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
             * This usually means the response is a `FuelPriceSuggestionVote` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/fuelPriceSuggestionVotes/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestionVote#createChangeStream
             * @methodOf lbServices.FuelPriceSuggestionVote
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
              url: urlBase + "/fuelPriceSuggestionVotes/change-stream",
              method: "POST",
            },

            // INTERNAL. Use FuelPriceSuggestion.fuelPriceSuggestionVotes.findById() instead.
            "::findById::FuelPriceSuggestion::fuelPriceSuggestionVotes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/fuelPriceSuggestions/:id/fuelPriceSuggestionVotes/:fk",
              method: "GET",
            },

            // INTERNAL. Use FuelPriceSuggestion.fuelPriceSuggestionVotes.destroyById() instead.
            "::destroyById::FuelPriceSuggestion::fuelPriceSuggestionVotes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/fuelPriceSuggestions/:id/fuelPriceSuggestionVotes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use FuelPriceSuggestion.fuelPriceSuggestionVotes.updateById() instead.
            "::updateById::FuelPriceSuggestion::fuelPriceSuggestionVotes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/fuelPriceSuggestions/:id/fuelPriceSuggestionVotes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use FuelPriceSuggestion.fuelPriceSuggestionVotes() instead.
            "::get::FuelPriceSuggestion::fuelPriceSuggestionVotes": {
              isArray: true,
              url: urlBase + "/fuelPriceSuggestions/:id/fuelPriceSuggestionVotes",
              method: "GET",
            },

            // INTERNAL. Use FuelPriceSuggestion.fuelPriceSuggestionVotes.create() instead.
            "::create::FuelPriceSuggestion::fuelPriceSuggestionVotes": {
              url: urlBase + "/fuelPriceSuggestions/:id/fuelPriceSuggestionVotes",
              method: "POST",
            },

            // INTERNAL. Use FuelPriceSuggestion.fuelPriceSuggestionVotes.createMany() instead.
            "::createMany::FuelPriceSuggestion::fuelPriceSuggestionVotes": {
              isArray: true,
              url: urlBase + "/fuelPriceSuggestions/:id/fuelPriceSuggestionVotes",
              method: "POST",
            },

            // INTERNAL. Use FuelPriceSuggestion.fuelPriceSuggestionVotes.destroyAll() instead.
            "::delete::FuelPriceSuggestion::fuelPriceSuggestionVotes": {
              url: urlBase + "/fuelPriceSuggestions/:id/fuelPriceSuggestionVotes",
              method: "DELETE",
            },

            // INTERNAL. Use FuelPriceSuggestion.fuelPriceSuggestionVotes.count() instead.
            "::count::FuelPriceSuggestion::fuelPriceSuggestionVotes": {
              url: urlBase + "/fuelPriceSuggestions/:id/fuelPriceSuggestionVotes/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestionVote#patchOrCreate
             * @methodOf lbServices.FuelPriceSuggestionVote
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
             * This usually means the response is a `FuelPriceSuggestionVote` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestionVote#updateOrCreate
             * @methodOf lbServices.FuelPriceSuggestionVote
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
             * This usually means the response is a `FuelPriceSuggestionVote` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestionVote#patchOrCreateWithWhere
             * @methodOf lbServices.FuelPriceSuggestionVote
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
             * This usually means the response is a `FuelPriceSuggestionVote` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestionVote#update
             * @methodOf lbServices.FuelPriceSuggestionVote
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
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestionVote#destroyById
             * @methodOf lbServices.FuelPriceSuggestionVote
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
             * This usually means the response is a `FuelPriceSuggestionVote` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestionVote#removeById
             * @methodOf lbServices.FuelPriceSuggestionVote
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
             * This usually means the response is a `FuelPriceSuggestionVote` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestionVote#patchAttributes
             * @methodOf lbServices.FuelPriceSuggestionVote
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
             * This usually means the response is a `FuelPriceSuggestionVote` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.FuelPriceSuggestionVote#modelName
        * @propertyOf lbServices.FuelPriceSuggestionVote
        * @description
        * The name of the model represented by this $resource,
        * i.e. `FuelPriceSuggestionVote`.
        */
        R.modelName = "FuelPriceSuggestionVote";


            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestionVote#user
             * @methodOf lbServices.FuelPriceSuggestionVote
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
          var action = TargetResource["::get::FuelPriceSuggestionVote::user"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.FuelPriceSuggestionVote#fuelPriceSuggestion
             * @methodOf lbServices.FuelPriceSuggestionVote
             *
             * @description
             *
             * Fetches belongsTo relation fuelPriceSuggestion.
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
             * This usually means the response is a `FuelPriceSuggestion` object.)
             * </em>
             */
        R.fuelPriceSuggestion = function() {
          var TargetResource = $injector.get("FuelPriceSuggestion");
          var action = TargetResource["::get::FuelPriceSuggestionVote::fuelPriceSuggestion"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.GasStationRating
 * @header lbServices.GasStationRating
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `GasStationRating` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "GasStationRating",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/gasStationRatings/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use GasStationRating.gasStation() instead.
            "prototype$__get__gasStation": {
              url: urlBase + "/gasStationRatings/:id/gasStation",
              method: "GET",
            },

            // INTERNAL. Use GasStationRating.user() instead.
            "prototype$__get__user": {
              url: urlBase + "/gasStationRatings/:id/user",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationRating#create
             * @methodOf lbServices.GasStationRating
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
             * This usually means the response is a `GasStationRating` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/gasStationRatings",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationRating#createMany
             * @methodOf lbServices.GasStationRating
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
             * This usually means the response is a `GasStationRating` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/gasStationRatings",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationRating#upsert
             * @methodOf lbServices.GasStationRating
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
             * This usually means the response is a `GasStationRating` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/gasStationRatings",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationRating#replaceOrCreate
             * @methodOf lbServices.GasStationRating
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
             * This usually means the response is a `GasStationRating` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/gasStationRatings/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationRating#upsertWithWhere
             * @methodOf lbServices.GasStationRating
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
             * This usually means the response is a `GasStationRating` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/gasStationRatings/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationRating#exists
             * @methodOf lbServices.GasStationRating
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
              url: urlBase + "/gasStationRatings/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationRating#findById
             * @methodOf lbServices.GasStationRating
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
             * This usually means the response is a `GasStationRating` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/gasStationRatings/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationRating#replaceById
             * @methodOf lbServices.GasStationRating
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
             * This usually means the response is a `GasStationRating` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/gasStationRatings/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationRating#find
             * @methodOf lbServices.GasStationRating
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
             * This usually means the response is a `GasStationRating` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/gasStationRatings",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationRating#findOne
             * @methodOf lbServices.GasStationRating
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
             * This usually means the response is a `GasStationRating` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/gasStationRatings/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationRating#updateAll
             * @methodOf lbServices.GasStationRating
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
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/gasStationRatings/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationRating#deleteById
             * @methodOf lbServices.GasStationRating
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
             * This usually means the response is a `GasStationRating` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/gasStationRatings/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationRating#count
             * @methodOf lbServices.GasStationRating
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
              url: urlBase + "/gasStationRatings/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationRating#prototype$updateAttributes
             * @methodOf lbServices.GasStationRating
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
             * This usually means the response is a `GasStationRating` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/gasStationRatings/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationRating#createChangeStream
             * @methodOf lbServices.GasStationRating
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
              url: urlBase + "/gasStationRatings/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationRating#average
             * @methodOf lbServices.GasStationRating
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `gasStationId` – `{string}` -
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
             *  - `average` – `{number=}` -
             */
            "average": {
              url: urlBase + "/gasStationRatings/average",
              method: "GET",
            },

            // INTERNAL. Use User.gasStationRatings.findById() instead.
            "::findById::User::gasStationRatings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/gasStationRatings/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.gasStationRatings.destroyById() instead.
            "::destroyById::User::gasStationRatings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/gasStationRatings/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.gasStationRatings.updateById() instead.
            "::updateById::User::gasStationRatings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/gasStationRatings/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.gasStationRatings() instead.
            "::get::User::gasStationRatings": {
              isArray: true,
              url: urlBase + "/users/:id/gasStationRatings",
              method: "GET",
            },

            // INTERNAL. Use User.gasStationRatings.create() instead.
            "::create::User::gasStationRatings": {
              url: urlBase + "/users/:id/gasStationRatings",
              method: "POST",
            },

            // INTERNAL. Use User.gasStationRatings.createMany() instead.
            "::createMany::User::gasStationRatings": {
              isArray: true,
              url: urlBase + "/users/:id/gasStationRatings",
              method: "POST",
            },

            // INTERNAL. Use User.gasStationRatings.destroyAll() instead.
            "::delete::User::gasStationRatings": {
              url: urlBase + "/users/:id/gasStationRatings",
              method: "DELETE",
            },

            // INTERNAL. Use User.gasStationRatings.count() instead.
            "::count::User::gasStationRatings": {
              url: urlBase + "/users/:id/gasStationRatings/count",
              method: "GET",
            },

            // INTERNAL. Use GasStation.gasStationRatings.findById() instead.
            "::findById::GasStation::gasStationRatings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/gasStations/:id/gasStationRatings/:fk",
              method: "GET",
            },

            // INTERNAL. Use GasStation.gasStationRatings.destroyById() instead.
            "::destroyById::GasStation::gasStationRatings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/gasStations/:id/gasStationRatings/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use GasStation.gasStationRatings.updateById() instead.
            "::updateById::GasStation::gasStationRatings": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/gasStations/:id/gasStationRatings/:fk",
              method: "PUT",
            },

            // INTERNAL. Use GasStation.gasStationRatings() instead.
            "::get::GasStation::gasStationRatings": {
              isArray: true,
              url: urlBase + "/gasStations/:id/gasStationRatings",
              method: "GET",
            },

            // INTERNAL. Use GasStation.gasStationRatings.create() instead.
            "::create::GasStation::gasStationRatings": {
              url: urlBase + "/gasStations/:id/gasStationRatings",
              method: "POST",
            },

            // INTERNAL. Use GasStation.gasStationRatings.createMany() instead.
            "::createMany::GasStation::gasStationRatings": {
              isArray: true,
              url: urlBase + "/gasStations/:id/gasStationRatings",
              method: "POST",
            },

            // INTERNAL. Use GasStation.gasStationRatings.destroyAll() instead.
            "::delete::GasStation::gasStationRatings": {
              url: urlBase + "/gasStations/:id/gasStationRatings",
              method: "DELETE",
            },

            // INTERNAL. Use GasStation.gasStationRatings.count() instead.
            "::count::GasStation::gasStationRatings": {
              url: urlBase + "/gasStations/:id/gasStationRatings/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.GasStationRating#patchOrCreate
             * @methodOf lbServices.GasStationRating
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
             * This usually means the response is a `GasStationRating` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.GasStationRating#updateOrCreate
             * @methodOf lbServices.GasStationRating
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
             * This usually means the response is a `GasStationRating` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.GasStationRating#patchOrCreateWithWhere
             * @methodOf lbServices.GasStationRating
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
             * This usually means the response is a `GasStationRating` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.GasStationRating#update
             * @methodOf lbServices.GasStationRating
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
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.GasStationRating#destroyById
             * @methodOf lbServices.GasStationRating
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
             * This usually means the response is a `GasStationRating` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.GasStationRating#removeById
             * @methodOf lbServices.GasStationRating
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
             * This usually means the response is a `GasStationRating` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.GasStationRating#patchAttributes
             * @methodOf lbServices.GasStationRating
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
             * This usually means the response is a `GasStationRating` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.GasStationRating#modelName
        * @propertyOf lbServices.GasStationRating
        * @description
        * The name of the model represented by this $resource,
        * i.e. `GasStationRating`.
        */
        R.modelName = "GasStationRating";


            /**
             * @ngdoc method
             * @name lbServices.GasStationRating#gasStation
             * @methodOf lbServices.GasStationRating
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
          var action = TargetResource["::get::GasStationRating::gasStation"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.GasStationRating#user
             * @methodOf lbServices.GasStationRating
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
          var action = TargetResource["::get::GasStationRating::user"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.GasStationComment
 * @header lbServices.GasStationComment
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `GasStationComment` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "GasStationComment",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/gasStationComments/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use GasStationComment.gasStation() instead.
            "prototype$__get__gasStation": {
              url: urlBase + "/gasStationComments/:id/gasStation",
              method: "GET",
            },

            // INTERNAL. Use GasStationComment.user() instead.
            "prototype$__get__user": {
              url: urlBase + "/gasStationComments/:id/user",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationComment#create
             * @methodOf lbServices.GasStationComment
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
             * This usually means the response is a `GasStationComment` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/gasStationComments",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationComment#createMany
             * @methodOf lbServices.GasStationComment
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
             * This usually means the response is a `GasStationComment` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/gasStationComments",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationComment#upsert
             * @methodOf lbServices.GasStationComment
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
             * This usually means the response is a `GasStationComment` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/gasStationComments",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationComment#replaceOrCreate
             * @methodOf lbServices.GasStationComment
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
             * This usually means the response is a `GasStationComment` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/gasStationComments/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationComment#upsertWithWhere
             * @methodOf lbServices.GasStationComment
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
             * This usually means the response is a `GasStationComment` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/gasStationComments/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationComment#exists
             * @methodOf lbServices.GasStationComment
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
              url: urlBase + "/gasStationComments/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationComment#findById
             * @methodOf lbServices.GasStationComment
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
             * This usually means the response is a `GasStationComment` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/gasStationComments/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationComment#replaceById
             * @methodOf lbServices.GasStationComment
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
             * This usually means the response is a `GasStationComment` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/gasStationComments/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationComment#find
             * @methodOf lbServices.GasStationComment
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
             * This usually means the response is a `GasStationComment` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/gasStationComments",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationComment#findOne
             * @methodOf lbServices.GasStationComment
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
             * This usually means the response is a `GasStationComment` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/gasStationComments/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationComment#updateAll
             * @methodOf lbServices.GasStationComment
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
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/gasStationComments/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationComment#deleteById
             * @methodOf lbServices.GasStationComment
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
             * This usually means the response is a `GasStationComment` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/gasStationComments/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationComment#count
             * @methodOf lbServices.GasStationComment
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
              url: urlBase + "/gasStationComments/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationComment#prototype$updateAttributes
             * @methodOf lbServices.GasStationComment
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
             * This usually means the response is a `GasStationComment` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/gasStationComments/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.GasStationComment#createChangeStream
             * @methodOf lbServices.GasStationComment
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
              url: urlBase + "/gasStationComments/change-stream",
              method: "POST",
            },

            // INTERNAL. Use User.gasStationComments.findById() instead.
            "::findById::User::gasStationComments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/gasStationComments/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.gasStationComments.destroyById() instead.
            "::destroyById::User::gasStationComments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/gasStationComments/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.gasStationComments.updateById() instead.
            "::updateById::User::gasStationComments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/gasStationComments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.gasStationComments() instead.
            "::get::User::gasStationComments": {
              isArray: true,
              url: urlBase + "/users/:id/gasStationComments",
              method: "GET",
            },

            // INTERNAL. Use User.gasStationComments.create() instead.
            "::create::User::gasStationComments": {
              url: urlBase + "/users/:id/gasStationComments",
              method: "POST",
            },

            // INTERNAL. Use User.gasStationComments.createMany() instead.
            "::createMany::User::gasStationComments": {
              isArray: true,
              url: urlBase + "/users/:id/gasStationComments",
              method: "POST",
            },

            // INTERNAL. Use User.gasStationComments.destroyAll() instead.
            "::delete::User::gasStationComments": {
              url: urlBase + "/users/:id/gasStationComments",
              method: "DELETE",
            },

            // INTERNAL. Use User.gasStationComments.count() instead.
            "::count::User::gasStationComments": {
              url: urlBase + "/users/:id/gasStationComments/count",
              method: "GET",
            },

            // INTERNAL. Use GasStation.gasStationComments.findById() instead.
            "::findById::GasStation::gasStationComments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/gasStations/:id/gasStationComments/:fk",
              method: "GET",
            },

            // INTERNAL. Use GasStation.gasStationComments.destroyById() instead.
            "::destroyById::GasStation::gasStationComments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/gasStations/:id/gasStationComments/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use GasStation.gasStationComments.updateById() instead.
            "::updateById::GasStation::gasStationComments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/gasStations/:id/gasStationComments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use GasStation.gasStationComments() instead.
            "::get::GasStation::gasStationComments": {
              isArray: true,
              url: urlBase + "/gasStations/:id/gasStationComments",
              method: "GET",
            },

            // INTERNAL. Use GasStation.gasStationComments.create() instead.
            "::create::GasStation::gasStationComments": {
              url: urlBase + "/gasStations/:id/gasStationComments",
              method: "POST",
            },

            // INTERNAL. Use GasStation.gasStationComments.createMany() instead.
            "::createMany::GasStation::gasStationComments": {
              isArray: true,
              url: urlBase + "/gasStations/:id/gasStationComments",
              method: "POST",
            },

            // INTERNAL. Use GasStation.gasStationComments.destroyAll() instead.
            "::delete::GasStation::gasStationComments": {
              url: urlBase + "/gasStations/:id/gasStationComments",
              method: "DELETE",
            },

            // INTERNAL. Use GasStation.gasStationComments.count() instead.
            "::count::GasStation::gasStationComments": {
              url: urlBase + "/gasStations/:id/gasStationComments/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.GasStationComment#patchOrCreate
             * @methodOf lbServices.GasStationComment
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
             * This usually means the response is a `GasStationComment` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.GasStationComment#updateOrCreate
             * @methodOf lbServices.GasStationComment
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
             * This usually means the response is a `GasStationComment` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.GasStationComment#patchOrCreateWithWhere
             * @methodOf lbServices.GasStationComment
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
             * This usually means the response is a `GasStationComment` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.GasStationComment#update
             * @methodOf lbServices.GasStationComment
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
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.GasStationComment#destroyById
             * @methodOf lbServices.GasStationComment
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
             * This usually means the response is a `GasStationComment` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.GasStationComment#removeById
             * @methodOf lbServices.GasStationComment
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
             * This usually means the response is a `GasStationComment` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.GasStationComment#patchAttributes
             * @methodOf lbServices.GasStationComment
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
             * This usually means the response is a `GasStationComment` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.GasStationComment#modelName
        * @propertyOf lbServices.GasStationComment
        * @description
        * The name of the model represented by this $resource,
        * i.e. `GasStationComment`.
        */
        R.modelName = "GasStationComment";


            /**
             * @ngdoc method
             * @name lbServices.GasStationComment#gasStation
             * @methodOf lbServices.GasStationComment
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
          var action = TargetResource["::get::GasStationComment::gasStation"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.GasStationComment#user
             * @methodOf lbServices.GasStationComment
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
          var action = TargetResource["::get::GasStationComment::user"];
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
