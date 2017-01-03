var path = require('path')
rootPath = path.resolve(__dirname, '../')
var startTime = new Date()
var updateStations = require(path.resolve(rootPath, 'lib', 'anp-stations', 'get'))
var stationsTransform = require(path.resolve(rootPath, 'lib', 'anp-stations', 'transform'))
var geolocation = require(path.resolve(rootPath, 'lib', 'anp-stations', 'geolocation'))
var geolocationFix = require(path.resolve(rootPath, 'lib', 'anp-stations', 'geolocation-fix.js'))
var dbLoadEntities = require(path.resolve(rootPath, 'lib', 'anp-stations', 'load'))
var updateAnp = require(path.resolve(rootPath, 'lib', 'anp-stations', 'update'))
var entities = require(path.resolve(rootPath, 'lib', 'anp-stations', 'entities'))
var loopbackApp = require('../../../server-offline')

if (process.argv.length < 3) {
	console.log('you need to specify the action:\n')
	console.log('update [-u] - to update stations lookin on anp site [-r] to update regions too')
	console.log('verify [-v] - to verify if there are updates')
	console.log('postprocess [-pp] - to process results of anp update')
	console.log('geolocation [-g] - to get geolocation of current ppStations, -f to try to get stations geolocations that failed before')
	console.log('fix-geolocation [-fg] - to start console application to try to fix stations geolocations that failed before')
	console.log('load [-l] /path/of/stations/folder to load json files of entities to database')
	console.log('updatestationsquery [-usq] to update fields used by querys')
	console.log('\nshutdown [-sh] - if you want to shutdown computer after process end (only update)')
	process.exit()
}

var hasArgument = function(arg) {
	return process.argv.some(function(a) {
		return a == arg
	})
}

var waitDbConnection = function (cb) {
	if (loopbackApp.datasources.mongodb.connected) {
		cb(null, loopbackApp)
	}
	loopbackApp.datasources.mongodb.on('connected', function(err) {
		cb(err, loopbackApp)
	})
}

var notifyAnpLoadStatus = function(message) {
	anpLoadStatus.notifications.push({
		message: message,
		timestamp: new Date()
	})
	loopbackApp.models.anpLoadStatus.upsert(anpLoadStatus)
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
	updateStations.anpUpdate(hasArgument('-r'), function(err, res) {
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
	var path = process.argv[3]
	if (!require('fs').existsSync(path)) {
		console.log('the stations json path is invalid!')
		process.exit()
	}

	var anpLoadStatus = null
	var anpLoadStatusId = process.argv[4]
	if (anpLoadStatusId && !isNaN(anpLoadStatusId)) {
		anpLoadStatusId = Number(anpLoadStatusId)
	}

	dbLoadEntities.load(loopbackApp, path, anpLoadStatusId, function(err, res) {
		if (err) {
			console.log('there are some errors on load entities to database')
			console.log(err)
		}

		console.log('load process end response: ', res)
		console.log('load process done.')

		process.exit()
	}, function(message, anpNotifyEntity) {
		if (anpLoadStatusId) {
			//loading...
			if (!anpLoadStatus && anpNotifyEntity) {
				anpLoadStatus = anpNotifyEntity
			}
			notifyAnpLoadStatus(message)
		} else {
			console.log(message)
		}
	})
}

if(hasArgument('-usq') || hasArgument('updatestationsquery')) {
	waitDbConnection(function (err, app) {
		if(err) console.error(err)

		updateAnp.updateGasStations(app, function (err, res) {
			if(err) {
				console.error('there are some errors on updating gas stations')
				throw err
			}

			console.log('gas stations updated successfully')
		}, function(notifyMessage) {
			console.log(notifyMessage)
		})
	})
}
