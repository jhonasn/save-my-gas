angular.module('save-my-gas')
.controller('mainController',
function (
	$scope,
	authService,
	fileStorageService
) {
	$scope.user = authService.getUser()
	$scope.cordova = !!window.cordova

	fileStorageService.init()
})
