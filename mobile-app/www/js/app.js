angular.module('save-my-gas', [
	'ui.materialize',
	'ngRoute',
	'ngStorage'
])

.run(function (authService) {
	authService.start()
})
