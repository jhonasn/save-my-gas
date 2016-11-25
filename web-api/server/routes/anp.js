module.exports = function(app) {
	var formidable = require('formidable')
	var anpPricingService = require('../services/pricing-gas-stations-anp')

	var router = app.loopback.Router()

	router
	//post the file to initiate database
		.post('/init', function(req, res, next) {
			var form = new formidable.IncomingForm()

			form.parse(req, function(err, fields, files) {
				if (files.file && files.file.size) {
					var file = files.file

					var anpLoadStatus = null
					app.models.anpLoadStatus.create({
						fileName: file.name,
						notifications: [{
							message: 'file received',
							timestamp: new Date()
						}],
						date: new Date()
					}, function(err, anpLoadStatus) {
						if (err) next(err)

						anpLoadStatus = anpLoadStatus

						anpPricingService.load.load(app, file.path, function(err, res) {
							if (err) next(err)

							anpLoadStatus.notifications.push({
								message: 'finished!',
								timestamp: new Date()
							})

							app.models.anpLoadStatus.upsert(anpLoadStatus)

						}, function(message) {
							console.log(message)
							anpLoadStatus.notifications.push()
							anpLoadStatus.notifications.push({
								message: message,
								timestamp: new Date()
							})
							app.models.anpLoadStatus.upsert(anpLoadStatus)
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
		//update database from anp site
		.post('/update', function(req, res, next) {
			res.send('updated!')
		})

	return router
}
