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

  //implement get station from gmaps

  var db = {
    // start: function() {
    //   for (var i = 0; i < localStorage.length; i++) {
    //     this[localStorage.key(i)] = localStorage[localStorage.key(i)]
    //   }
    // },
    getEntitiesNames: function() {
      var names = []
      for (var i = 0; i < localStorage.length; i++) {
        names.push(localStorage.key(i))
      }

      return names
    },
    get: function(index) {
      if(localStorage.hasOwnProperty(index))
        return JSON.parse(localStorage[index])
      else
        return null
    },
    set: function (index, value) {
      localStorage[index] = JSON.stringify(value)
    }
  }

  // db.start()

  return {
    getAll(type) {
      var entitiesNames = db.getEntitiesNames()
      for (var i in entitiesNames) {
        var collectionName = entitiesNames[i]
        if (db.get(collectionName) && collectionName.toLowerCase() === type.toString().toLowerCase()) {
          return db.get(collectionName)
        }
      }

      return null
    },
    get(type, id) {
      if(this.getAll(type) != null) {
        var results = this.getAll(type).filter(function (element) {
          if('id' in element && typeof(element.id) === 'number' && element.id == id)
            return true;
        })

        return results[0]
      } else {
        return null
      }
    },
    save(type, entity) {
      var prevEntity = this.get(type, entity.id)

      if(prevEntity)
        prevEntity = entity
      else {
        var entities = this.getAll(type)
        if(!entities) {
          db.set(type, [])
          entities = this.getAll(type)
        }

        entity.id = entities.length + 1
        entities.push(entity)
        db.set(type, entities)
      }

      return true
    }
  }
})
