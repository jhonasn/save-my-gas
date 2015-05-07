requirejs.config({
	baseUrl: '/',
	paths: {
		cordova: 'cordova',
		ionic: 'lib/ionic/js/ionic.bundle',
		app: 'js/app',
		runners: 'js/runners',
		routes: 'js/routes',
		factories: 'js/factories',
		stationCtrl: 'js/controllers/GasStationController',
		vehicleCtrl: 'js/controllers/VehicleController'
	},
	shim: {
		// ionic: {
		// 	exports: 'ionic',
		// 	deps: ['cordova']
		// },
		app: { deps: ['ionic'] }
	},
	priority: [
		'ionic'
	],
	deps: ['js/bootstrap']
})

requirejs(['app'],function(app) {
})
