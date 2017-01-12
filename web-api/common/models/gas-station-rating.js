'use strict';

module.exports = function(GasStationRating) {
	GasStationRating.average = function(gasStationId, cb) {
		// app.datasources.mongodb.connector.collection('fuelPrice')
		var dataSource = GasStationRating.getDataSource()
			// var id = dataSource.ObjectID(gasStationId)
		dataSource.connector.collection('gasStationRating')
			.aggregate({
				"$group": {
					"gasStationId": gasStationId,
					"average": {
						"$avg": "$rating"
					}
				}
			}, function(err, gasStationAvg) {
				if (err) return callback(err);
				return callback(null, gasStationAvg);
			})
	}

	GasStationRating.remoteMethod("average", {
		"isStatic": true,
		"http": {
			"verb": "get"
		},
		"accepts": {
			"arg": "gasStationId",
			"type": "string"
		},
		"returns": {
			"arg": "average",
			"type": "number"
		}
	})
}
