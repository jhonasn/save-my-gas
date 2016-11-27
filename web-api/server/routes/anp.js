module.exports = function(app) {
	var formidable = require('formidable')
		// var anpPricingService = require('../services/pricing-gas-stations-anp')

	var router = app.loopback.Router()

	router
	//post the file to initiate database
	/* route closed by useless after first publish (we can get this by mongorestore now)
		.post('/init', function(req, res, next) {
			var form = new formidable.IncomingForm()

			form.parse(req, function(err, fields, files) {
				if (files.file && files.file.size) {
					var file = files.file

					var anpLoadStatus = null
					app.models.anpLoadStatus.create({
						fileName: file.name,
						notifications: [{
							message: 'file received: ' + file.name,
							timestamp: new Date()
						}],
						date: new Date()
					}, function(err, anpLoadStatus) {
						if (err) next(err)

						anpLoadStatus = anpLoadStatus

						var anpLoadStatusNotify = function (msg) {
							app.models.anpLoadStatus.findById(anpLoadStatus.id, function(err, entity) {
								entity.notifications.push({
									message: msg,
									timestamp: new Date()
								})
								app.models.anpLoadStatus.upsert(entity)
							})
						}

						//separate service into a new process
						var spawn = require('child_process').spawn
						var service = spawn('node', [
							'./server/services/pricing-gas-stations-anp/lib/console',
							'-l',
							file.path,
							anpLoadStatus.id
						])

						//listen process
						service.stdout.on('data', function (data) {
							anpLoadStatusNotify('log: ' + data)
						})
						service.stderr.on('data', function (data) {
							anpLoadStatusNotify('error: ' + data)
						})
						service.on('close', function (code) {
							anpLoadStatusNotify('child process exited with code' + code)
						})

						res.send({
							message: 'File received, size: ' + file.size,
							statusId: anpLoadStatus.id
						})
					})

				} else {
					res.send({
						message: 'send one file'
					})
				}
			})
		})
		*/
		//update database from anp site
		.post('/update', function(req, res, next) {
			res.send('updated!')
		})

	return router
}
