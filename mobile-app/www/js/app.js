angular.module('save-my-gas', [
    'ui.materialize',
    'ngRoute',
    'ngStorage'
])

.run(function (authService) {
	authService.start()
})

.config(function ($locationProvider, $httpProvider, $localStorageProvider) {
	$locationProvider.html5Mode(true);

	// $httpProvider.defaults.withCredentials = true;
	// $httpProvider.interceptors.push('LoginInterceptorService');
	// $httpProvider.defaults.headers.commom.Authorization = null;

	$localStorageProvider.setKeyPrefix('br.com.savemygas.')
})
