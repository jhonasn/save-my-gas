var path = require('path')
var rootPath = path.resolve(__dirname, '../')

var updateStations = require(path.resolve(rootPath, 'lib/updateStations'))
updateStations.anpUpdate(false, function(err, res) {
    if(err) console.error(err)
    console.log(res)
})
