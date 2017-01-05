angular.module('save-my-gas')

.factory('utilService', function($q) {
	var utilService = {
		isObjectId: function(id) {
			return /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i.test(id)
		},

		fileToB64: function(file) {
			var defered = $q.defer()

			var reader = new FileReader()
			var b64 = reader.readAsDataURL(file)

			reader.onload = function(result) {
				defered.resolve(result.target.result)
			}
			reader.onerror = function(err) {
				defered.reject(err)
			}

			return defered.promise
		},

		B64ToFile: function(b64String) {
			var arr = b64String.split(',')
			var mime = arr[0].match(/:(.*?)/)[1]
			var bstr = atob(arr[1])
			var n = bstr.length
			var u8arr = new Uint8Array(n)

			while (n--) {
				u8arr[n] = bstr.charCodeAt(n)
			}

			return new Blob([u8arr], {
				type: mime
			})
		},

		parseMilis: function(milis) {
			var negative = false

			if (milis < 0) {
				negative = true
				milis = Math.abs(milis)
			}

			var milisDay = 24 * 60 * 60 * 1000
			var milisHour = 60 * 60 * 1000
			var milisMinute = 60 * 1000

			var d = Math.floor(milis / milisDay)
			var h = Math.floor((milis - (d * milisDay)) / milisHour)
			var m = Math.floor((milis - ((d * milisDay) + (h * milisHour))) / milisMinute)
			var s = Math.floor((milis - ((d * milisDay) + (h * milisHour) + (m * milisMinute))) / 1000)
			var mi = Math.round(milis - ((d * milisDay) + (h * milisHour) + (m * milisMinute) + (s * 1000)))

			if (mi === 1000) {
				s++
				mi = 0
			}
			if (s === 60) {
				m++
				s = 0
			}
			if (m === 60) {
				h++
				m = 0
			}
			if (h === 24) {
				d++
				h = 0
			}

			return {
				negative: negative,
				days: d,
				hours: h,
				minutes: m,
				seconds: s,
				milis: mi
			}
		}

		// resizeImg: function(img, width) {
		// 	/// set size proportional to image
		// 	canvas.height = canvas.width * (img.height / img.width)
		//
		// 	/// step 1 - resize to 50%
		// 	var oc = document.createElement('canvas'),
		// 		octx = oc.getContext('2d')
		//
		// 	oc.width = img.width * 0.5
		// 	oc.height = img.height * 0.5
		// 	octx.drawImage(img, 0, 0, oc.width, oc.height)
		//
		// 	/// step 2 - resize 50% of step 1
		// 	octx.drawImage(oc, 0, 0, oc.width * 0.5, oc.height * 0.5)
		//
		// 	/// step 3, resize to final size
		// 	ctx.drawImage(oc, 0, 0, oc.width * 0.5, oc.height * 0.5,
		// 		0, 0, canvas.width, canvas.height)
		// },
		//
		// resizeImg: function(img, width, height) {
		// 	var canvas = document.createElement('canvas'),
		// 		ctx = canvas.getContext('2d')
		//
		// 	canvas.width = width
		// 	canvas.height = height
		//
		// 	ctx.drawImage(img, 0, 0, width, height)
		//
		// 	return canvas.toDataURL()
		// }
	}

	return utilService
})
