module.exports = function (app) {
	var anpRoutes = require('../routes/anp')

	app.use('/api/anp', anpRoutes(app))
}
