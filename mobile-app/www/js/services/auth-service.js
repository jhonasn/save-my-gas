angular.module('save-my-gas')
	.factory('authService',
		function(
			$http,
			$window,
			$localStorage,
			appConstants
		) {
			var _setUser = function(user) {
				$localStorage.user = user
			}

			var authService = {
				getUser: function() {
					return $localStorage.user
				},

				setUserInfo: function(userInfo) {
					$localStorage.user.info = userInfo
					switch ($localStorage.user.provider) {
						case 'email':
							$localStorage.user.displayName = userInfo.email
							break;
						case 'facebook':
							$localStorage.user.displayName = userInfo.profile.name.givenName +
								' ' + userInfo.profile.name.familyName
							break;
						case 'google':
							$localStorage.user.displayName = userInfo.profile.displayName
							break;
					}
				},

				//send user to proper screen depending on his browser info (localStorage)
				//working on email provider
				start: function() {
					var user = authService.getUser()
					if (user) {
						var now = new Date()
						var createdAt = new Date(user.created)
						var expiresDate = new Date(createdAt.valueOf() + (user.ttl * 1000))
						if (now > expiresDate) {
							authService.logout()
						} else {
							if (!user.info && !authService.hereIsLogin()) {
								var dealSuccess = function(response) {
									var userInfo = response.data;
									if (Array.isArray(response.data) && response.data.length) {
										userInfo = response.data[0]
									}
									authService.setUserInfo(userInfo)
								}

								var dealError = function(err) {
									Materialize.toast('Não foi possível recuperar as informações do seu usuário')
									authService.gotoLogin()
								}

								if (user.provider === 'email') {
									$http.get(appConstants.urlApi + '/users/' + user.userId)
										.then(dealSuccess)
										.catch(dealError)
								} else {
									$http.get(appConstants.urlApi + '/useridentities', {
											params: {
												filter: {
													userId: user.userId
												}
											}
										})
										.then(dealSuccess).catch(dealError)
								}
							} else {
								authService.gotoHome()
							}
						}
					} else {
						authService.gotoLogin()
					}
				},

				hereIsLogin: function() {
					if (window.cordova) {
						return $window.location.pathname.indexOf('/index.html') > -1
					} else {
						return $window.location.pathname === '/index.html' ||
							$window.location.pathname === '/'
					}
				},

				gotoLogin: function() {
					if (!authService.hereIsLogin()) {
						$window.location.href = '/index.html'
					}
				},

				gotoHome: function() {
					if (authService.hereIsLogin()) {
						$window.location.href = '/app.html'
					}
				},

				signup: function(model) {
					var url = appConstants.urlApi + '/users'
					$http.post(url, model).then(function(response) {
						Materialize.toast('Cadastro Efetuado com sucesso!')

						//faz login
						authService.login('email', model)
					}).catch(function(err) {
						var msg = 'Não foi possivel cadastrar sua conta'
						if (err.status === 422) {
							msg = 'O e-mail informado já está cadastrado'
						}
						Materialize.toast(msg)
					})
				},

				login: function(provider, model) {
					if (provider === 'email') {
						var url = appConstants.urlApi + '/users/login'

						$http.post(url, model).then(function(response) {
							var user = response.data;
							user.provider = provider

							if (user.id) {
								user['access_token'] = user.id
								_setUser(user)
								authService.start()
							} else {
								Materialize.toast('Ocorreu um problema ao fazer o login')
							}
						}).catch(function(err) {
							if (err.status === 401) {
								Materialize.toast('Usuário ou senha incorretos')
							} else {
								Materialize.toast('Não foi possivel efetuar o login por ' + provider)
							}
						})
					} else {
						var url = appConstants.urlDomain + '/auth/' + provider

						var win = null

						if (window.cordova) {
							win = window.open(url, '_blank', 'location=no')
						} else {
							win = window.open(url, '_blank', 'location=no,menubar=no,resizable=yes,top=50,width=800,height=410')
						}

						var _getJson = function(win, innerHTML) {
							var user = JSON.parse(innerHTML.match(/\{\".*\}/g)[0])
							user.provider = provider
							_setUser(user)
							win.close()
							authService.gotoHome()
						}

						if (window.cordova) {
							win.addEventListener('loadstop', function(e) {
								if (e.url.indexOf(url) === 0) {
									win.executeScript({
											code: "document.body.innerHTML"
										},
										function(values) {
											_getJson(win, values[0])
										}
									)
								} else if (authService.hereIsLogin()) {
									Materialize.toast('Não foi possivel efetuar o login')
								}
							})
						} else {
							var interval = setInterval(function() {
								if (win.closed) {
									clearInterval(interval)
								}

								try {
									if (win.location.href && win.location.href.indexOf(url) === 0) {
										_getJson(win, win.document.body.innerHTML)
									}
								} catch (e) {}
							}, 100)
						}
					}
				},

				logout: function() {
					var user = authService.getUser();
					if (user) {
						$http.post(
								appConstants.urlDomain + '/api/Users/logout', {}
							).then(function() {
								$localStorage.$reset()
								authService.gotoLogin()
							})
							.catch(function() {
								Materialize.toast('Não foi possível realizar o logout')
									//should i logout from navigator anyway?
									// $localStorage.$reset()
									// authService.gotoLogin()
							})
					} else {
						authService.gotoLogin()
					}
				}
			}

			return authService
		})
