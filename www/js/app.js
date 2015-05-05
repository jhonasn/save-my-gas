var app = angular.module('save-my-gas', ['ionic'])

app.run(function($ionicPlatform) {
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

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('app/station')

  $stateProvider
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: "/templates/menu.html"
  })

  .state('app.station', {
    url: '/station',
    views: {
      'menuContent': {
        templateUrl: "/templates/gas-station-list.html",
        controller: 'GasStationCtrl'
      }
    }
  })
  .state('app.station-view', {
    url: '/edit/:id',
    views: {
      'menuContent': {
        templateUrl: '/templates/gas-station-view.html',
        controller: 'GasStationViewCtrl'
      }
    }
  })

  .state('app.vehicle', {
    url: '/vehicle',
    views: {
      'menuContent': {
        templateUrl: '/templates/vehicle-list.html',
        controller: 'VehicleCtrl'
      }
    }
  })
  .state('app.vehicle-edit', {
    url: '/vehicle/:id',
    views: {
      'menuContent': {
        templateUrl: '/templates/vehicle-edit.html',
        controller: 'VehicleEditCtrl'
      }
    }
  })

})

app.factory('crud', function() {

  var db = {
    station: [
      { name: 'gas station #1', id: 1 },
      { name: 'gas station #2', id: 2 },
      { name: 'gas station #3', id: 3 },
      { name: 'gas station #4', id: 4 },
      { name: 'gas station #5', id: 5 },
      { name: 'gas station #6', id: 6 }
    ],
    vehicle: [
      { name: 'v1', power: 1.1, id: 1 },
      { name: 'v2', power: 1.2, id: 2 },
      { name: 'v3', power: 1.3, id: 3 },
      { name: 'v4', power: 1.4, id: 4 },
      { name: 'v5', power: 1.8, id: 5 },
      { name: 'v6', power: 2.0, id: 6 }
    ]
  }

  return {
    getAll(type) {
      for (var collection in db) {
        if (db.hasOwnProperty(collection)) {
          if(collection.toLowerCase() === type.toString().toLowerCase())
            return db[collection]
        }
      }

      return null
    },
    get(type, id) {
      var results = this.getAll(type).filter(function (element) {
        if('id' in element && typeof(element.id) === 'number' && element.id == id)
          return true;
      })

      return results[0]
    },
    save(type, entity) {
      var prevEntity = this.get(type, entity.id)

      if(prevEntity)
        prevEntity = entity
      else {
        var entities = this.getAll(type)
        entity.id = entities.length + 1
        entities.push(entity)
      }

      return true
    }
  }
})
