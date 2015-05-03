// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('save-my-gas', ['ionic', 'save-my-gas.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('menu', {
    url: "/menu",
    abstract: true,
    templateUrl: "templates/menu.html"
  })
  .state('menu.gas-station', {
    url: "/gas-station-list",
    views: {
      'menuContent': {
        templateUrl: "templates/gas-station-list.html",
        controller: 'GasStationCtrl'
      }
    }
  })
  .state('menu.vehicle', {
    url: '/vehicle-list',
    views: {
      'menuContent': {
        templateUrl: 'templates/vehicle-list.html',
        controller: 'VehicleCtrl'
      }
    }
  })
  .state('menu.vehicle.edit', {
    url: '/vehicle-edit',
    views: {
      'menuContent': {
        templateUrl: 'templates/vehicle-edit.html',
        controller: 'VehicleCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/menu/gas-station-list');
});

angular.module('save-my-gas.controllers', []);
