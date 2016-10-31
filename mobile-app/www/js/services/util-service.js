angular.module('save-my-gas')
	.factory('utilService',
		function($q) {
			return {
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
