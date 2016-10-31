angular.module('save-my-gas')
.factory('utilService',
function ($q) {
	return {
		fileToB64: function (file) {
			var defered = $q.defer()

			var reader = new FileReader()
			var b64 = reader.readAsDataURL(file)

			reader.onload = function(result) {
				defered.resolve(result.target.result)
			}
			reader.onerror = function (err) {
				defered.reject(err)
			}

			return defered.promise
		}
	}
})
