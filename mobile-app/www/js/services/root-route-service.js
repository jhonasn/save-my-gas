// angular.module('save-my-gas')
// 	.factory('rootRouteService',
SaveMyGas.rootRoute = (function() {
		var _urlPlatform = {
			// iOS Cordova catcher
			ios: {
				path: '/var/**',
				component: 'cordova'
			},
			// Android Cordova catcher
			android: {
				path: '/android_asset/www',
				component: 'cordova'
			},
			// Browser
			browser: {
				path: '',
				component: 'navigator'
			}
		}

		var _setBaseUrl = function () {
			var baseUrl = ''
			if(window.device) {
				baseUrl = _urlPlatform[window.device.platform.toLowerCase()].path
			} else {
				baseUrl = _urlPlatform.browser.path
			}

			rootRouteService.baseUrl = baseUrl
		}

		var rootRouteService = {
			baseUrl: null,

			getPath: function (url) {
				_setBaseUrl()
				if(url[0] !== '/') {
					url = '/' + url
				}

				return rootRouteService.baseUrl + url
			},

			go: function (url) {
				window.location.href = rootRouteService.getPath(url)
			}
		}

		_setBaseUrl()

		return rootRouteService
	})()
	// })
