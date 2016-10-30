'use strict'

module.exports = function(Vehicle) {
	Vehicle.myVehicles = function(userId, cb) {
		Vehicle.find({
			where: { ownerId: userId }
		}, function(err, vehicles) {
			if (err) return cb(err)

			cb(vehicles, true)
		})
	}

	Vehicle.remoteMethod('myVehicles', {
		accepts: [{
			arg: 'userId',
			type: 'string',
			required: true
		}],
		returns: {
			arg: 'success',
			type: 'array'
		},
		http: {
			verb: 'GET'
		}
	})
}
