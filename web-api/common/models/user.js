'use strict';

module.exports = function(User) {
	User.generateId = function(cb) {
		var ObjectID = require('mongodb').ObjectID
		cb(null, new ObjectID())
	}
};
