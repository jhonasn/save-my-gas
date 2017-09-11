module.exports.strToAnpEntity = function(value) {
	var val = value.split('*')
	return {
		id: val[0],
		name: val.length > 0 ? val[1].replace(/\@/g, ' ') : ''
	}
}

module.exports.anpEntityToStr = function(obj) {
	return '{0}*{1}'
		.replace('{0}', obj.id)
		.replace('{1}', obj.name ? obj.name.replace(/\ /g, '@') : obj.name)
}

module.exports.toTitleCase = function(str) {
	return str.replace(/\w\S*/g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
	})
}

module.exports.clearHtmlText = function(text) {
	return text
		.trim()
		.replace(/\r/g, '')
		.replace(/\n/g, '')
		.replace(/\t/g, '')
}

module.exports.toPropName = function(text) {
	text = module.exports.clearHtmlText(text)
	text = require('diacritics').remove(text.toUpperCase())
	text = text.toLocaleLowerCase()
	text = text.replace(/\ de\ /g, '')
	text = text.replace(/\ da\ /g, '')
	text = text.replace(/\ do\ /g, '')
	text = module.exports.toTitleCase(text)
	text = text.charAt(0).toLowerCase() + text.substr(1)
	return text
		.replace(/\ /g, '')
		.replace('(', '')
		.replace(')', '')
		.replace('.', '')
}

module.exports.thisIsDate = function(o) {
	return o && typeof o === 'string' && o.length >= 10
}

module.exports.dateStringToDate = function(o) {
	if (module.exports.thisIsDate(o)) {
		var o = o.split('/')
		return new Date(o[2], (parseInt(o[1]) - 1), o[0])
	} else {
		return null
	}
}

module.exports.getWeekCode = function(date) {
	var startDateMillis = new Date(1999, (6 - 1), 20).valueOf()
	var oneWeekMillis = (1000 * 60 * 60 * 24 * 7)
	var dateMillis = date.valueOf()
	var currentDateMillis = 0
	var i = 0
	return Math.floor((dateMillis - startDateMillis) / oneWeekMillis)
}

module.exports.getWeekCodeDesc = function(date) {
	var code = module.exports.getWeekCode(date)
	var oneDayMillis = 1000 * 60 * 60 * 24
	var endWeek = new Date(date.valueOf() + (6 - date.getDay()) * oneDayMillis)
	var startWeek = new Date(date.valueOf() - (6 - date.getDay()) * oneDayMillis)
	return '{cod}*De {startDate} a {endDate}'
		.replace('{cod}', code)
		.replace('{startDate}', module.formatDateToLocaleBr(startWeek))
		.replace('{endDate}', module.formatDateToLocaleBr(endWeek))
}

module.formatDateToLocaleBr = function(date) {
	var d = date.getDate()
	var m = date.getMonth()
	var y = date.getFullYear()

	var paddingZeroLessThanTen = function(n) {
		if (n < 10) {
			return '0' + n
		} else {
			return n
		}
	}

	d = paddingZeroLessThanTen(d)
	m = paddingZeroLessThanTen(m)
	return '{d}/{m}/{y}'
		.replace('{d}', d)
		.replace('{m}', m)
		.replace('{y}', y)
}
