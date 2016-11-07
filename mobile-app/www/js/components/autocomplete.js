angular.module('save-my-gas')
	.directive('autocomplete', function($q, $http, appConstants) {
		return {
			restrict: 'E',
			replace: true,
			//transclude: true,
			templateUrl: SaveMyGas.rootRoute.getPath('/templates/autocomplete.html'),
			require: 'ngModel',
			scope: {
				ngModel: '=',
				url: '@',
				urlParams: '=',
				label: '@',
				format: '=',
				urlParamsMake: '=',
				onSelect: '=',
				onClear: '='
			},
			link: function(scope, element, attributes, ngModel) {
				var _results = []
				var _urlParams = null
				var _isInitialized = false

				//fix label
				if (attributes.id) {
					var labelEl = angular.element('[for="' + attributes.id + '"]')
					if (labelEl.length > 0) {
						angular.element('#' + attributes.id)
							.find('#initial-autocomplete-element')
							.after(labelEl)
						labelEl.css('position', 'absolute')
						labelEl.css('top', 0)
						labelEl.css('left', 0)
					}
				}

				if (!scope.urlParams) {
					_urlParams = {
						filter: {
							where: {},
							limit: 10
						}
					}

					_urlParams.filter.where[scope.label] = {
						regexp: ''
					}
				} else {
					_urlParams = scope.urlParams
				}

				if (!_urlParams.filter.limit) {
					_urlParams.filter.limit = 10
				}

				var edit = function(id) {
					var _url = scope.url[0] === '/' ? scope.url : '/' + scope.url
					_url = _url[_url.length - 1] === '/' ?
						_url.substr(0, (_url.length - 1)) :
						_url
					$http.get(appConstants.urlApi + _url + '/' + id).then(function(data) {
						scope.ngModel = data[0]
						_isInitialized = true
						if (scope.onSelect) {
							scope.onSelect(scope.ngModel)
						}
					}).catch(function(err) {
						if (!err.specified) {
							var autocompleteName = ''
							if (attributes.name) {
								autocompleteName = ' de ' + attributes.name
							}
							alert('Erro ao carregar autocomplete' + autocompleteName)
						}
						_isInitialized = true
					})
				}

				scope.clear = function() {
					scope.ngModel = null
					if (scope.onClear) {
						scope.onClear()
					}
				}

				scope.search = function(searchTerm) {
					var defered = $q.defer()

					if (!searchTerm) {
						searchTerm = ''
					}
					if (!scope.urlParamsMake) {
						_urlParams.filter.where[scope.label].regexp = searchTerm
					} else {
						_urlParams = scope.urlParamsMake(searchTerm)
					}

					var _url = scope.url[0] === '/' ? scope.url : '/' + scope.url
					$http.get(appConstants.urlApi + _url, {
						params: _urlParams
					}).then(function(result) {
						if (Array.isArray(result.data) && scope.format) {
							result.data.forEach(function(item, i) {
								var label = scope.label || 'autocompleteCustomLabel'
								item[scope.label] = scope.format(item)
							})
						}
						_results = result.data

						defered.resolve(result.data)
					}).catch(function(err) {
						console.error('Error on autocomplete', err)
						defered.reject(err)
					})

					_urlParams = JSON.stringify(_urlParams)

					return defered.promise
				}

				scope.formatLabel = function($model) {
					var o = _results.filter(function(o) {
						return o.id === $model
					})
					if (o.length) {
						o = o[0]
						return o[scope.label] || o.id
					} else {
						return null
					}
				}

				// var _isSelection = false

				scope.select = function($item, $model, $label, $event) {
					// _isSelection = true
					if (scope.onSelect) {
						scope.onSelect($item, $model, $label, $event)
					}
					// _isSelection = false
				}

				// scope.$watch('ngModel', function (newVal, oldVal) {
				// 	if(_isInitialized && !_isSelection && oldVal !== newVal) {
				// 		edit(newVal)
				// 	}
				// })

				if (scope.ngModel) {
					edit(scope.ngModel)
				} else {
					_isInitialized = true
				}
			}
		}
	})
