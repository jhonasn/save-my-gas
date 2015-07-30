var path = require('path')
rootPath = path.resolve(__dirname, '../')
var startTime = new Date()
var updateStations = require(path.resolve(rootPath, 'lib', 'anpStations', 'get'))
var stationsTransform = require(path.resolve(rootPath, 'lib', 'anpStations', 'transform'))
var geolocation = require(path.resolve(rootPath, 'lib', 'anpStations', 'geolocation'))

if(process.argv.length < 3) {
	console.log('you need to specify the action:\n')
	console.log('update [-u] - to update stations lookin on anp site')
	console.log('postprocess [-pp] - to process results of anp update')
	console.log('shutdown [-sh] - if you want to shutdown computer after process end (only update)')
}

var hasArgument = function(arg) {
	return process.argv.some(function(a) { return a == arg })
}

var isRoot = process.env.SUDO_UID
var shutdown = hasArgument('shutdown') || hasArgument('-sh')

if(shutdown && isRoot) {
	console.log('The pc will shutdown when process end')
} else if (shutdown) {
	console.log('go SU to shutdown the computer')
}

if(hasArgument('-t') || hasArgument('test')) {
	updateStations.test(function(err, res) {
		console.log('errors: ', err)
		console.log('responses: ', res)
	})
}

if(hasArgument('-v') || hasArgument('verify')) {
	updateStations.anpUpdated(function(err, res) {
		if(err) console.error(err)

		console.log('anp has stations updated: ', res)
	})
}

if(hasArgument('update') || hasArgument('-u')) {
	console.log('Started ANP Update\n\n')
	updateStations.anpUpdate(true, function(err, res) {
		if(err && Array.isArray(err) && err.length > 0) {
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

		if(shutdown && isRoot) {
			var duration = (new Date().getTime() / 1000 / 60) - startTime.getTime() / 1000 / 60 //the time arrives as miliseconds, we transform to minutes
			if(duration > 5) { // more than 5 minutes, than shutdown


				require('child_process').exec('shutdown -h now', console.log)
			} else {
				console.log('the computer not shutdown because the process get less than 5 minutes to end')
			}
		}
	})
}

if(hasArgument('postprocess') || hasArgument('-pp')) {
	console.log('Started Post Process ANP\n\n')
	stationsTransform.postProcessStations(function(err, res) {
		if(err) console.error(err)

		console.log(res)
	})
}

if(hasArgument('geolocation') || hasArgument('-g')) {
	console.log('we will get geolocation :)')
	geolocation.get(function(err, res) {
		if(err) { console.error(err) }
		
		console.log('geolocation get process done!')
		console.log(res)
	})
}
