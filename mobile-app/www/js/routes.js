angular.module('save-my-gas')

.config(function($routeProvider, $locationProvider) {

    $routeProvider

    .when('/', {
        templateUrl: '/views/main.html',
        controller: 'MainController'
    })

    // .when('/login', {
    //     templateUrl: '/views/auth.html',
    //     controller: 'AuthController'
    // })

    .otherwise({
        redirectTo: '/'
    })

})
