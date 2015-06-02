var path = require('path')
var rootPath = path.resolve(__dirname, '../')
var shutDown = process.argv.length > 2 && process.argv[2] == 'shutdown'
var isRoot = process.env.SUDO_UID
var startTime = new Date

if(shutDown && isRoot) {
	console.log('The pc will shutdown when process end')
} else if (shutDown) {
	console.log('go SU to shutdown the computer')
}

var updateStations = require(path.resolve(rootPath, 'lib/updateStations'))

updateStations.anpUpdate(false, function(err, res) {
    if(err) console.error(err)
    console.log(res)
	if(shutDown && isRoot) {
		var duration = (new Date().getTime() / 1000 / 60) - startTime.getTime() / 1000 / 60 //the time arrives as miliseconds, we transform to minutes
		if(duration > 5) { // more than 5 minutes, than shutdown
			require('child_process').exec('shutdown -h now', console.log)
		} else {
			console.log('the computer not shutDown because the process get less than 5 minutes to end')
		}
	}
})
