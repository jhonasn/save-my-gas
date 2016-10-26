angular.module('save-my-gas')
.controller('authController',
function(
	$scope,
	authService
) {
	$scope.screenHeight = 400
	$scope.screenHeight = window.outerHeight || window.screen.availHeight || window.screen.height

	$scope.showLogin = false
	$scope.isSignup = false
	$scope.toggleShowLogin = function () {
		$scope.showLogin = !$scope.showLogin
	}
	$scope.toggleIsSignup = function(model) {
		delete $scope.model
		$scope.isSignup = !$scope.isSignup
	}

	$scope.login = function(isSignup, provider, model) {
		if(isSignup) {
			authService.signup(model)
		} else {
			authService.login(provider, model)
		}
	}
})
