angular.module('save-my-gas')
.controller('mainController',
function (
	$scope,
	authService
) {
	$scope.user = authService.getUser()
	$scope.cordova = !!window.cordova
	$scope.container = true
})
