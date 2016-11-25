var path = require('path')
rootPath = path.resolve(__dirname, '../')
var startTime = new Date()
var updateStations = require(path.resolve(rootPath, 'lib', 'anp-stations', 'get'))
var stationsTransform = require(path.resolve(rootPath, 'lib', 'anp-stations', 'transform'))
var geolocation = require(path.resolve(rootPath, 'lib', 'anp-stations', 'geolocation'))
var geolocationFix = require(path.resolve(rootPath, 'lib', 'anp-stations', 'geolocation-fix.js'))
var dbLoadEntities = require(path.resolve(rootPath, 'lib', 'anp-stations', 'load'))
var entities = require(path.resolve(rootPath, 'lib', 'anp-stations', 'entities'))
var loopbackApp = require('../../../server-offline')

if (process.argv.length < 3) {
	console.log('you need to specify the action:\n')
	console.log('update [-u] - to update stations lookin on anp site')
	console.log('postprocess [-pp] - to process results of anp update')
	console.log('geolocation [-g] - to get geolocation of current ppStations, -f to try to get stations geolocations that failed before')
	console.log('fix-geolocation [-fg] - to start console application to try to fix stations geolocations that failed before')
	console.log('load [-l] /path/of/stations/folder to load json files of entities to database')
	console.log('\nshutdown [-sh] - if you want to shutdown computer after process end (only update)')
	process.exit()
}

var hasArgument = function(arg) {
	return process.argv.some(function(a) {
		return a == arg
	})
}

var isRoot = process.env.SUDO_UID
var shutdown = hasArgument('shutdown') || hasArgument('-sh')

if (shutdown && isRoot) {
	console.log('The pc will shutdown when process end')
} else if (shutdown) {
	console.log('go SU to shutdown the computer')
}

if (hasArgument('-t') || hasArgument('test')) {
	updateStations.test(function(err, res) {
		console.log('errors: ', err)
		console.log('responses: ', res)
	})
}

if (hasArgument('-v') || hasArgument('verify')) {
	updateStations.anpUpdated(function(err, res) {
		if (err) console.error(err)

		console.log('anp has stations updated: ', res)
	})
}

if (hasArgument('update') || hasArgument('-u')) {
	console.log('Started ANP Update\n\n')
	updateStations.anpUpdate(true, function(err, res) {
		if (err && Array.isArray(err) && err.length > 0) {
			console.log('there was some errors on scratching, see anp-update-errors.log (it\'s a json)')
			try {
				require('fs').writeFileSync('anp-update-errors.log', JSON.stringify(err))
			} catch (ex) {}

		}
		console.log('stations ok: ', res.length)

		try {
			require('fs').writeFileSync('anp-update.log', 'date: {0}, started: {1}, end: {2}'
				.replace('{0}', new Date().toString())
				.replace('{1}', startTime.toJSON().split('T')[1].split('.')[0])
				.replace('{2}', new Date().toJSON().split('T')[1].split('.')[0]))

		} catch (ex) {}

		if (shutdown && isRoot) {
			var duration = (new Date().getTime() / 1000 / 60) - startTime.getTime() / 1000 / 60 //the time arrives as miliseconds, we transform to minutes
			if (duration > 5) { // more than 5 minutes, than shutdown
				require('child_process').exec('shutdown -h now', console.log)
			} else {
				console.log('the computer not shutdown because the process get less than 5 minutes to end')
			}
		}
	})
}

if (hasArgument('postprocess') || hasArgument('-pp')) {
	console.log('Started Post Process ANP\n\n')
	stationsTransform.postProcessStations(function(err, res) {
		if (err) console.error(err)

		console.log(res)
	})
}

if (hasArgument('geolocation') || hasArgument('-g')) {
	console.log('we will get geolocation :)')
	var getFailedStations = hasArgument('-f')
	geolocation.get(function(err, res) {
		if (err) {
			console.log('some stations was not found on google maps. You can more details at geolocation property of stations')
			console.log(err)
			console.error(err)
		}

		console.log('\ngeolocation get process done!')
	}, getFailedStations)
}

if (hasArgument('fix-geolocation') || hasArgument('-fg')) {
	geolocationFix.start(function(err, res) {
		if (err) {
			console.log('there are some errors on geolocation fix process')
			console.log(err)
		}

		console.log('geolocation fix process end response: ', res)
		console.log('fix geolocation process done.')
	})
}

if (hasArgument('-l') || hasArgument('load')) {
	var path = process.argv[process.argv.length - 1]
	if(!require('fs').existsSync(path)) {
		console.log('the stations json path is invalid!')
		process.exit()
	}
	dbLoadEntities.load(loopbackApp, path, function(err, res) {
		if (err) {
			console.log('there are some errors on load entities to database')
			console.log(err)
		}

		console.log('load process end response: ', res)
		console.log('load process done.')
	})
}
