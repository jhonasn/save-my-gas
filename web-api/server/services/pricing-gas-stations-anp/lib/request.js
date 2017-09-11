var http = require('http')
var https = require('https')

module.resquestCommon = function(res, cb) {
	// var iconv = new require('iconv').Iconv('latin1', 'utf-8')
	var iconv = new require('iconv').Iconv('ISO-8859-1', 'UTF8')

	res.on('response', function(res) {
			var chunks = []
			var totalLength = 0
			res.on('data', function(data) {
				chunks.push(data)
				totalLength += data.length
			})
			res.on('end', function() {
				var results = new Buffer(totalLength)
				var pos = 0
				for (var i = 0; i < chunks.length; i++) {
					chunks[i].copy(results, pos)
					pos += chunks[i].length
				}
				cb(null, iconv.convert(results))
			})
			res.on('error', function(err) {
				cb(err)
			})
		})
		.on('error', function(err) {
			cb(err)
		})
}

module.exports.get = function(url, cb) {
	var req = module.protocol(url).get(url)
	module.resquestCommon(req, cb)
}

module.exports.post = function(url, formData, cb) {
	url = require('url').parse(url)
	formData = require('querystring').stringify(formData)
	var options = {
		hostname: url.hostname,
		path: url.path,
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Length': formData.length
		}
	}

	var req = module.protocol(url.protocol).request(options)
	module.resquestCommon(req, cb)
	req.write(formData)
	req.end()
}

module.protocol = function(url) {
	if (url.split(':')[0] == 'https') {
		return https
	} else {
		return http
	}
}
