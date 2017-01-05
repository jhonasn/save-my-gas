angular.module('save-my-gas')

.factory('formatService', function(
	utilService
) {
	var formatService = {
		city: function(city) {
			return formatService.toTitleCase(city.name)
		},

		gasStation: function(gasStation) {
			return formatService.toTitleCase(
				gasStation.flag && gasStation.flag !== 'BRANCA' ?
				gasStation.flag + ' - ' + gasStation.companyName :
				gasStation.companyName
			)
		},

		toTitleCase: function(text) {
			return text.replace(/\w\S*/g, function(txt) {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
			})
		},

		zeroPad: function(n) {
			if (typeof n === 'number') {
				if (n < 10) {
					return '0' + n;
				}
			}

			return n;
		},

		time: function(milis, format) {
			if (format === undefined || format === null) {
				format = 'nice'
			}

			var time = utilService.parseMilis(milis)

			switch (format) {
				case 'nice':
					return formatService.timeNice(time)
					break
				case true:
					return formatService.timeNormal(time)
					break
				case 'normal':
					return formatService.timeNormal(time)
					break
				default:
					return time
			}
		},

		timeNormal: function(time) {
			var pad = formatService.zeroPad

			//d:hh:MM:ss.mmm
			time = [
					time.days,
					pad(time.hours),
					pad(time.minutes), pad(time.seconds)
				].join(':')
				.concat('.').concat(time.milis)
			if (time.negative) {
				time = '-'.concat(time)
			}

			return time
		},

		timeNice: function(time) {
			var formated = ''
			if (time.days > 0) {
				formated += time.days + ' dia'

				if (time.days > 1) {
					formated += 's'
				}

				if (time.hours > 0) {
					formated += ' e ' + time.hours + ' hora'
				}
				if (time.hours > 1) {
					formated += 's'
				}
			} else if (time.hours > 0) {
				formated += time.hours + ' hora'

				if (time.hours > 1) {
					formated += 's'
				}

				if (time.minutes > 0) {
					formated += ' e ' + time.minutes + ' min'
				}
				if (time.minutes > 1) {
					formated += 's'
				}
			} else if (time.minutes > 0) {
				formated += time.minutes + ' min'

				if (time.minutes > 1) {
					formated += 's'
				}
			} else {
				formated += time.seconds + ' seg'

				if (time.seconds > 0) {
					formated += 's'
				}
			}

			return formated
		},

		toGeoString: function(geo) {
			if (geo.lat && geo.lng) {
				return geo.lat + ',' + geo.lng
			} else if (geo.latitude && geo.longitude) {
				return geo.latitude + ',' + geo.lng
			} else if (Array.isArray(geo) && geo.length === 2 && !isNaN(geo[0]) && !isNaN(geo[1])) {
				return geo[0] + ',' + geo[1]
			}
			return geo
		},

		distance: function(distance) {
			if (isNaN(distance)) {
				return distance
			}

			if (distance < 1000) {
				return Math.round(distance) + ' m'
			} else {
				distance /= 1000
				return (
					Number.isInteger(distance) ?
					distance :
					distance.toFixed(1)
				) + ' km'
			}
		},

		liters: function(liters, decimal) {
			if (isNaN(liters)) {
				return liters
			}

			if (!decimal) {
				decimal = 1
			}

			if (liters < 1) {
				return Number(liters.toFixed(3).split('.')[1]) + ' ml'
			} else {
				return liters.toFixed(decimal) + ' L'
			}
		}
	}

	return formatService
})
