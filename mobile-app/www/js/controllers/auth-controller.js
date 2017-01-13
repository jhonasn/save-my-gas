angular.module('save-my-gas')

.controller('authController', function(
	$scope,
	authService
) {
	$scope.screenHeight = 400
	$scope.screenHeight = window.outerHeight || window.screen.availHeight || window.screen.height

	$scope.showLogin = false
	$scope.isSignup = false
	$scope.model = {}

	$scope.toggleShowLogin = function() {
		$scope.showLogin = !$scope.showLogin
	}
	$scope.toggleIsSignup = function(model) {
		var prevEmail = $scope.model.email
		delete $scope.model
		$scope.model = { email: prevEmail }
		$scope.isSignup = !$scope.isSignup
	}

	$scope.login = function(provider, isSignup, model) {
		if (provider === 'email') {
			if (isSignup) {
				authService.signup(model)
			} else {
				authService.login(provider, model)
			}
		} else {
			authService.login(provider)
		}
	}
})

.controller('authLogoutController', function(
	$scope,
	authService
) {
	authService.logout()
})
