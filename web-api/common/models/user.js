'use strict';

module.exports = function(User) {
	User.success = function(cb) {
		cb(null, { args: arguments });
	};

	User.remoteMethod(
		'successo', {
			isStatic: false,
			http: {
				verb: 'GET'
			},
			accepts: [],
			returns: {
				arg: 'obj',
				type: 'object'
			}
		}
	);
};
