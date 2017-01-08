angular.module('save-my-gas')

.factory('authInterceptorService', function(
	$q,
	$injector
) {
	return {
		request: function(config) {
			config.headers = config.headers || {}

			var authService = $injector.get('authService')

			var user = authService.getUser()
			if (!authService.isAnonymous && user) {
				config.headers.Authorization = user.access_token
			} else {
				authService.isAnonymous = false
			}

			return config
		},

		responseError: function(rejection) {
			var authService = $injector.get('authService')

			if (!rejection) {
				rejection = {
					specified: false,
					status: rejection.status
				}
			} else {
				rejection.specified = false
				rejection.status = rejection.status
			}

			var hereIsLogin = authService.hereIsLogin()

			if (rejection.status === 401 && !hereIsLogin) {
				rejection.specified = true
				authService.logout()
					//erro no lado do servidor
			}

			if (!authService.isRequestWithoutMessage()) {
				if (rejection.status === 500) {
					rejection.specified = true
					Materialize.toast('Ocorreu um erro em nossos servidores')
						//erro de roteamento
				} else if (rejection.status === 405) {
					rejection.specified = true
					Materialize.toast('Ocorreu um erro de rota ao servidor')
				} else if (rejection.status === 404) {
					rejection.specified = true
					Materialize.toast('Não foi possível encontrar o recurso requisitado', 'Erro, recurso não encontrado')
				}
			}

			return $q.reject(rejection)
		}
	}
})
