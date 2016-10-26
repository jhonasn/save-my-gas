angular.module('save-my-gas')
.controller('MainController',
function (
	$scope,
	authService
) {
	$scope.user = authService.getUser()
})
