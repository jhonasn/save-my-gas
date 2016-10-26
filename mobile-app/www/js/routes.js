angular.module('save-my-gas')

.config(function($routeProvider, $locationProvider) {

    // var resolveConfig = {
    //     config: function(appConfigService) {
    //         return appConfigService
    //     }
    // }

    $routeProvider

    .when('/', {
        templateUrl: '/views/main.html',
        controller: 'MainController'
            // resolve: resolveConfig
    })

    .when('/login', {
        templateUrl: '/views/auth.html',
        controller: 'AuthController'
            // resolve: resolveConfig
    })

    .otherwise({
        redirectTo: '/'
    })

})
