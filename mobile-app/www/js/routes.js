angular.module('save-my-gas')

.config(function($routeProvider, $locationProvider) {

    $routeProvider

    .when('/', {
        templateUrl: '/views/home.html',
        controller: 'homeController'
    })

    // .when('/login', {
    //     templateUrl: '/views/auth.html',
    //     controller: 'AuthController'
    // })

	.when('/logout', {
		template: 'loggin out...',
		controller: 'authLogoutController'
	})

    .otherwise({
        redirectTo: '/'
    })

})
