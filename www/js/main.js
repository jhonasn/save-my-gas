require.config({
	baseUrl: '',
	paths: {
		cordova: 'cordova',
		ionic: 'lib/ionic/js/ionic.bundle',
		//async: 'lib/requirejs-plugins/src/async',
		app: 'js/app',
		runners: 'js/runners',
		routes: 'js/routes',
		factories: 'js/factories',
		stationCtrl: 'js/controllers/GasStationController',
		vehicleCtrl: 'js/controllers/VehicleController'
	},
	shim: {
		ionic: {
			exports: 'ionic',
			deps: ['cordova']
		},
		app: { deps: ['ionic'] }
	},
	priority: [
		'ionic'
	],
	deps: ['js/bootstrap']
})

require(['app',
 //'async!http://maps.google.com/maps/api/js?key=AIzaSyALizYdHgpXYI6IrE1W9jTlb8LB02nErzw&sensor=true&libraries=places'
],function(app) {
})
