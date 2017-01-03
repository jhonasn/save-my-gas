module.exports = {}

module.getWeekBeginDate = function(date) {
	var dayMilis = (24 * 60 * 60 * 1000)
	var hourMilis = (60 * 60 * 1000)
	var minutesMilis = (60 * 1000)

	var timeToSubtract = date.getDay() * dayMilis
	timeToSubtract += date.getHours() * hourMilis
	timeToSubtract += date.getMinutes() * minutesMilis
	timeToSubtract += date.getSeconds() * 1000
	timeToSubtract += date.getMilliseconds()

	timeToSubtract = date.valueOf() - timeToSubtract

	return new Date(timeToSubtract)
}

module.upsertGasStation = function(app, gasStation, gasStations, notify) {
	app.models.gasStation.upsert(gasStation, function(err, gs) {
		if (err) callback(err)

		module.notifyProgress('completed progress', gasStations, gasStation, notify, true)
	})
}

module.notifyProgress = function (message, gasStations, gasStation, notify, exit) {
	var idx = gasStations.indexOf(gasStation)

	if(idx % 1000 === 0) {
		var pc = (idx * 100) / (gasStations.length - 1)
		notify(message + ' - ' + pc.toFixed(1) + '%')
	} else if(exit && idx === (gasStations.length - 1)) {
		process.exit()
	}
}

module.exports.updateGasStations = function(app, callback, notify) {

	app.models.gasStation.find({}, function(err, gasStations) {
		if (err) callback(err)

		gasStations.forEach(function(gasStation) {
			app.models.fuelPrice.find({
				where: {
					gasStationId: gasStation.id
				},
				order: 'date DESC',
				limit: 1
			}, function(err, fuelPrices) {
				gasStation.hasPrices = !!fuelPrices.length
				gasStation.fuelTypeIds = []

				module.notifyProgress('has prices progress', gasStations, gasStation, notify)

				if (gasStation.hasPrices) {
					var beginDate = fuelPrices[0].date
					//search for week begin date
					beginDate = module.getWeekBeginDate(beginDate)

					app.datasources.mongodb.connector.collection('fuelPrice')
						.distinct('fuelTypeId', {
							$and: [{
									gasStationId: gasStation.id
								},
								{
									date: {
										$gte: beginDate
									}
								}
							]
						}, function(err, fuelTypeIds) {
							if (err) callback(err)

							module.notifyProgress('get fuel types ids progress', gasStations, gasStation, notify)

							gasStation.fuelTypeIds = fuelTypeIds
							module.upsertGasStation(app, gasStation, gasStations, notify)
						})
				} else {
					module.upsertGasStation(app, gasStation, gasStations, notify)
				}
			})
		})
	})
}
