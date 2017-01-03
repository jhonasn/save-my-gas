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

module.upsertGasStation = function(app, gasStation) {
	app.models.gasStation.upsert(gasStation, function(err, gs) {
		if (err) callback(err)

		notify(gs.companyName + ' completed!')
	})
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
				notify('gas station: ' + gasStation.companyName + ' hasPrices: ' + gasStation.hasPrices)

				if (gasStation.hasPrices) {
					var beginDate = fuelPrices[0].date
					notify('last fuel price date: ' + beginDate)
						//search for week begin date
					beginDate = module.getWeekBeginDate(beginDate)
					notify('begin week date: ' + beginDate)

					app.models.fuelPrice.find({
							where: {
								and: [{
										gasStationId: gasStation.id
									},
									{
										date: {
											gte: beginDate
										}
									}
								],
								fields: ['id']
							}
						}, function(err, fuelPrices) {
							if (err) callback(err)

							gasStation.fuelTypeIds = fuelPrices.map(function(fp) {
								return fp.id
							})

							notify('fuel types ids: ' + gasStation.fuelTypeIds)

							//module.upsertGasStation(app, gasStation)
						})
						//currentPrices = gasStation.fuelPrices
				} else {
					// module.upsertGasStation(app, gasStation)
				}
			})
		})
	})
}
