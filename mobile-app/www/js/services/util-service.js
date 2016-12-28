angular.module('save-my-gas')

.factory('utilService',
	function($q) {
		return {
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
				var mime = arr[0].match(/:(.*?);/)[1]
				var bstr = atob(arr[1])
				var n = bstr.length
				var u8arr = new Uint8Array(n)

				while (n--) {
					u8arr[n] = bstr.charCodeAt(n);
				}

				return new Blob([u8arr], {
					type: mime
				});
			},

			toTitleCase: function(text) {
				return text.replace(/\w\S*/g, function(txt) {
					return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
				})
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
	})
