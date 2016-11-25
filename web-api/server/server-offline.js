'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

var loopbackPassport = require('loopback-component-passport')
var PassportConfigurator = loopbackPassport.PassportConfigurator
var passportConfigurator = new PassportConfigurator(app)

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, {
	appRootDir: __dirname,
	bootDirs: [],
	bootScripts: [],
	middleware: {},
	modelSources: [
		'loopback/common/models',
		'loopback/server/models',
		'../common/models',
		'./models',
		'./node_modules/loopback-component-passport/lib/models'
	],
	mixinSources: [
		"loopback/common/mixins",
		"loopback/server/mixins",
		"../common/mixins",
		"./mixins"
	]
}, function(err) {
	if (err) throw err;

	// start the server if `$ node server.js`
	if (require.main === module)
		app.emit('started');
});
