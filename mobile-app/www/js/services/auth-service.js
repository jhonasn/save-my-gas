angular.module('save-my-gas')
.factory('authService',
function(
	$http,
	$localStorage,
	appConstants
) {
	var _setUser = function(user) {
		$localStorage.user = user
	}

	var _login = function(e) {
		if (e.url.indexOf(url) === 0) {
			win.executeScript({
					code: "document.body.innerHTML"
				},
				function(values) {
					var user = JSON.parse(values[0].match(/\{\".*\}/g)[0])
					user.provider = provider
					_setUser(user)
					win.close()
				}
			)
		} else if (e.url.indexOf('/login') !== -1) {
			Materialize.toast('Não foi possivel efetuar o login por ' + provider)
		}
	}

	var authService = {
		getUser: function() {
			return $localStorage.user
		},

		//inicia ciclo de login, coloca o usuario na sessão se estiver logado
		start: function() {
			var user = authService.getUser()
			if (user) {
				var agora = new Date()
				var dataExpira = new Date(user['.expires'])
				if (agora > dataExpira) {
					authService.logout()
					return;
				} else {
					authService.gotoHome()
				}
			} else {
				authService.gotoLogin()
			}
		},

		gotoLogin: function() {
			window.location.href = '/index.html'
			return
		},

		gotoHome: function() {
			window.location.href = '/main.html'
			return
		},

		signup: function(model) {
			$http.post(url, model).then(function(response) {
				Materialize.toast('Cadastro Efetuado com sucesso!')
				Materialize.toast('Faça o login')
			}).catch(function(err) {
				Materialize.toast('Não foi possivel efetuar o login por ' + provider)
			})
		},

		login: function(provider, model) {
			if (provider === 'email') {
				var url = appConstants.urlApi + '/users/login'

				$http.post(url, model).then(function(response) {
					var user = response.data;
					user.provider = provider

					if (user['access_token']) {
						_setUser(data)
					} else {
						Materialize.toast('Cadastro Efetuado com sucesso!')
						Materialize.toast('Faça o login')
					}
				}).catch(function(err) {
					Materialize.toast('Não foi possivel efetuar o login por ' + provider)
				})
			} else {
				var url = appConstants.urlDomain + '/auth/' + provider

				var win = window.open(url, '_blank', 'location=no')

				// For Cordova
				if (window.cordova) {
					win.addEventListener('loadstop', _login)
				} else {
					// For `ionic serve --lab`. Wait for the user to close the window
					// and, when they do, check the server to see if they're now logged in.
					var interval = setInterval(function() {
						if (win.closed) {
							_login(win)
							clearInterval(interval)
						}
					}, 100)
				}
			}
		},

		logout: function() {
			var user = authService.getUser();
			if (user) {
				$http.post(
						appConstants.urlDomain + '/api/Users/logout', {}, {
							headers: {
								"Authorization": user.access_token
							}
						}
					).then(function() {
						$localStorage.$reset()
					})
					.catch(function() {
						Materialize.toast('Não foi possível realizar o logout')
					})
			} else {
				authService.gotoLogin()
			}
		}
	}

	return authService
})
