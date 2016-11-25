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

					anpPricingService.load.load(app, file.path, function(err, res) {
						if(err) next(err)

						res.send({
							message: 'Ok, loaded to database ' + file.size
						})
					})

					res.send({
						message: 'ok, file length: ' + file.size
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
