'use strict';

module.exports = function(GasStationRating) {
	GasStationRating.average = function(gasStationId, cb) {
		// app.datasources.mongodb.connector.collection('fuelPrice')
		var dataSource = GasStationRating.getDataSource()
		var id = dataSource.ObjectID(gasStationId)
		dataSource.connector.collection('gasStationRating')
			.aggregate([{
					$match: {
						gasStationId: id
					}
				},
				{
					$group: {
						_id: "$item",
						average: {
							"$avg": "$rating"
						}
					}
				}
			], function(err, gasStationAvg) {
				if (err) return callback(err)
				if (gasStationAvg && gasStationAvg.length) {
					cb(null, gasStationAvg[0].average)
				} else {
					cb(null, -1)
				}
			})
	}
}
