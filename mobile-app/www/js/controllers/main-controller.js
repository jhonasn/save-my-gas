angular.module('save-my-gas')
.controller('MainController',
function (
	authService
) {
	var user = authService.getUser()
	if(!user) {
		authService.gotoLogin()
	}
})
