angular.module('save-my-gas')
.config(function ($routeProvider, $locationProvider) {
	$routeProvider

	.when('/', {
		template: '',
		controller: 'AuthController',
		resolve: {
			config: function(appConfigService) {
				return appConfigService
			}
		}
	})

	.otherwise({
        redirectTo: '/'
    })
})
.run(function (authService) {
	authService.start()
})
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
