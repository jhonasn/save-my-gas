angular.module('save-my-gas')
.factory('authInterceptorService',
	function(
		$q,
		$window,
		$location,
		$localStorage
	) {
		return {
			request: function(config) {
				config.headers = config.headers || {}

				var user = $localStorage.user
				if (user) {
					config.headers.Authorization = user['access_token']
				}

				return config
			},

			responseError: function(rejection) {
				if (!rejection) {
					rejection = {
						specified: false,
						status: rejection.status
					}
				} else {
					rejection.specified = false
					rejection.status = rejection.status
				}

				var hereIsLogin = $window.location.pathname === '/index.html' ||
						$window.location.pathname === '/'

				if (rejection.status === 401 && !hereIsLogin) {
					rejection.specified = true
					$location.path('/logout')
						//erro no lado do servidor
				} else if (rejection.status === 500) {
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

				return $q.reject(rejection)
			}
		}
	})
