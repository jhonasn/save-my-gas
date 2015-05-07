/*global define, require, console, cordova, navigator */

define(['ionic', 'app', 'routes'], function (ionic, app) {
    'use strict'

    var onDeviceReady = function () {
      angular.bootstrap(document, [app.name])
    }

    document.addEventListener("deviceready", onDeviceReady, false)

    if (typeof cordova === 'undefined') {
        //var el = angular.element(document.getElementsByTagName('html')[0])
        angular.element().ready(function () {
            try {
                angular.bootstrap(document, [app.name])
            } catch (e) {
                console.error(e.stack || e.message || e)
            }
        })
    }

})
