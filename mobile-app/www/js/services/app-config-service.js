angular.module('save-my-gas')
.factory('appConfigService', function ($http, $q) {
	var defered = $q.defer()

	$http.get('/config.json')
	.then(function (response) {
		var config = response.data
		if (!config) {
			console.error('Aplicação sem configuração')
			defered.reject()
			return
		} else if (!config.name) {
			console.error('Aplicação sem nome')
			defered.reject()
			return
		} else if (!config.env) {
			console.error('Aplicação sem ambiente')
			defered.reject()
			return
		} else if (!config[config.env]) {
			console.error('Aplicação sem configuracao de ambiente')
			defered.reject()
			return
		} else if (!config[config.env].urlDomain) {
			console.error('Aplicação sem dominio na configuracao de ambiente')
			defered.reject()
			return
		} else if (!config[config.env].urlApi) {
			console.error('Aplicação sem endereço da api na configuracao de ambiente')
			defered.reject()
			return
		}

		angular.module('save-my-gas')
		.constant('appConstants', SaveMyGas.config)

		defered.resolve(config[config.env])
	})
	.catch(function (err) {
		console.error('Aplicação sem arquivo de configuração')
	})

	return defered.promise
})
