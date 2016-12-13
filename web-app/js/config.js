angular.module('save-my-gas')

.config(function ($localStorageProvider) {
	$localStorageProvider.setKeyPrefix('br.com.savemygas.')
})

.run(function (authService) {
	authService.start()
})
