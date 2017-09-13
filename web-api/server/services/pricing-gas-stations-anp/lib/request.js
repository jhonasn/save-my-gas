var http = require('http')
var https = require('https')
var StreamTransform = require('stream').Transform

module.resquestCommon = function(req, cb, convert = true) {
	// var iconv = new require('iconv').Iconv('latin1', 'utf-8')
	var iconv = new require('iconv').Iconv('ISO-8859-1', 'UTF8')

	return req.on('response', function(res) {
			var chunks = new StreamTransform()
			res.on('data', function(data) {
				chunks.push(data)
			})
			res.on('end', function() {
				chunks = chunks.read()
				if(convert)
					cb(null, iconv.convert(chunks), res)
				else
					cb(null, chunks, res)
			})
			res.on('error', function(err) {
				cb(err, chunks, res)
			})
		})
		.on('error', function(err) {
			cb(err)
		})
}

module.exports.get = function(url, cb, options) {
	options = module.initOptions(url, options)
	options.method = 'GET'

	var convert = module.getConvert(options)

	var req = module.protocol(url).request(options)
	module.resquestCommon(req, cb, convert)
	req.end()

	return req
}

module.exports.post = function(url, formData, cb, options) {
	formData = require('querystring').stringify(formData)

	options = module.initOptions(url, options)

	var convert = module.getConvert(options)

	options.method = 'POST'
	options.headers['Content-Type'] = 'application/x-www-form-urlencoded'
	options.headers['Content-Length'] = formData.length

	var req = module.protocol(url).request(options)
	module.resquestCommon(req, cb, convert)
	req.write(formData)
	req.end()

	return req
}

module.protocol = function(url) {
	if (url.split(':')[0] == 'https') {
		return https
	} else {
		return http
	}
}

module.initOptions = function (url, options) {
	if(!options)
		options = { headers: {} }
	else if (!options.headers)
		options.headers = {}

	url = require('url').parse(url)

	options.hostname = url.hostname
	options.path = url.path

	return options
}

module.getConvert = function (options) {
	var convert = options.convert
	delete options.convert
	return convert
}
