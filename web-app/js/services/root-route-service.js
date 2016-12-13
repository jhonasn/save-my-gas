// angular.module('save-my-gas')
// 	.factory('rootRouteService',
SaveMyGas.rootRoute = (function() {
		var _urlPlatform = {
			// iOS cordova
			ios: {
				path: '/var/**',
				component: 'cordova'
			},
			// Android cordova
			android: {
				path: '/android_asset/www',
				component: 'cordova'
			},
			// Cordova browser
			browser: {
				path: '/browser/www',
				component: 'cordova'
			},
			// Non cordova browser
			browserNonCordova: {
				path: '',
				component: 'navigator'
			}
		}

		var _setBaseUrl = function() {
			var baseUrl = ''
			if (window.device) {
				baseUrl = _urlPlatform[window.device.platform.toLowerCase()].path
			} else {
					baseUrl = _urlPlatform.browserNonCordova.path
			}

			rootRouteService.baseUrl = baseUrl
		}

		var rootRouteService = {
			baseUrl: null,

			getPath: function(url) {
				_setBaseUrl()
				if (url[0] !== '/') {
					url = '/' + url
				}

				return rootRouteService.baseUrl + url
			},

			go: function(url) {
				window.location.href = rootRouteService.getPath(url)
			}
		}

		_setBaseUrl()

		return rootRouteService
	})()
	// })
