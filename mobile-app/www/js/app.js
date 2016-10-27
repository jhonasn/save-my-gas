angular.module('save-my-gas', [
    'ui.materialize',
    'ngRoute',
    'ngStorage'
])

.config(function ($locationProvider, $httpProvider) {
	$locationProvider.html5Mode(true);

	// $httpProvider.defaults.withCredentials = true;
	$httpProvider.interceptors.push('authInterceptorService');
	// $httpProvider.defaults.headers.commom.Authorization = null;

})
