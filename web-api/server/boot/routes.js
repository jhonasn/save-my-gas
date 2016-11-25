module.exports = function(app) {
	var anpRoutes = require('../routes/anp')

	app.get('/api/generateId', function(req, res, next) {
		var ObjectID = require('mongodb').ObjectID
		res.send({
			id: new ObjectID()
		})
	});

	app.use('/api/anp', anpRoutes(app))
}
