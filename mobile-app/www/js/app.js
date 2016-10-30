angular.module('save-my-gas', [
	'ui.materialize',
	'ngRoute',
	'ngStorage',
	'lbServices'
])

.config(function($locationProvider, $httpProvider) {
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	})

	// $httpProvider.defaults.withCredentials = true
	$httpProvider.interceptors.push('authInterceptorService')
	// $httpProvider.defaults.headers.commom.Authorization = null

	//remove loopback interceptor
	var idx = $httpProvider.interceptors.indexOf('LoopBackAuthRequestInterceptor')
	$httpProvider.interceptors.splice(idx, 1)

})

.config(function(LoopBackResourceProvider, appConstants) {

    // Use a custom auth header instead of the default 'Authorization'
    // LoopBackResourceProvider.setAuthHeader('X-Access-Token');

    // Change the URL where to access the LoopBack REST API server
    LoopBackResourceProvider.setUrlBase(appConstants.urlApi);
})
