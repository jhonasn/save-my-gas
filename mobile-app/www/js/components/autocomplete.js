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
				initWith: '=',
				onSelect: '=',
				onClear: '=',
				noResults: '=',
				isEditable: '='
			},
			link: function(scope, element, attributes, ngModelController) {
				var _results = []
				var _urlParams = null
				var _isInitialized = false

				//fix label
				if (attributes.id) {
					var labelEl = angular.element('[for="' + attributes.id + '"]')
					if (labelEl.length > 0) {
						angular.element('#' + attributes.id)
							.find('#initial-autocomplete-element')
							.before(labelEl)
						labelEl.css('position', 'absolute')
						labelEl.css('left', 0)
							// labelEl.css('top', 0)
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
					$http.get(appConstants.urlApi + _url + '/' + id).then(function(response) {
							scope.ngModel = response.data
							if (scope.onSelect) {
								scope.onSelect(scope.ngModel)
							}
						})
						.catch(function(err) {
							if (!err.specified) {
								var autocompleteName = ''
								if (attributes.name) {
									autocompleteName = ' de ' + attributes.name
								}
								Materialize.toast('Erro ao carregar autocomplete' + autocompleteName)
							}
							//initialize with error? yes for while..
							_isInitialized = true
						})
				}

				scope.clear = function() {
					ngModelController.$setViewValue(null)
					if (scope.onClear) {
						scope.onClear()
					}
				}

				scope.search = function(searchTerm) {
					if (_isInitialized) {
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

						return defered.promise
					}
				}

				scope.formatLabel = function($model) {
					var id = null
					if ($model && $model.id) {
						var _model = angular.copy($model)
						if (scope.format) {
							_model[scope.label] = scope.format(_model)
						}
						_results = [_model]
						id = $model.id
						scope.ngModel = id
						_isInitialized = true
					} else {
						id = $model
					}
					var o = _results.filter(function(o) {
						return o.id === id
					})
					if (o.length) {
						o = o[0]
						return o[scope.label] || o.id
					} else {
						return null
					}
				}

				scope.select = function($item, $model, $label, $event) {
					if (scope.onSelect) {
						scope.onSelect($item, $model, $label, $event)
					}
				}

				if (
					scope.initWith &&
					scope.initWith.id) {
					//initialize on formatLabel
					scope.ngModel = scope.initWith
				} else if (scope.ngModel) {
					edit(scope.ngModel)
				} else {
					_isInitialized = true
				}
			}
		}
	})
