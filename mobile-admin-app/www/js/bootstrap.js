var SaveMyGas = {
	config: null,

	start: function() {
		document.addEventListener("deviceready", SaveMyGas.configure, false)

		if (typeof cordova === 'undefined') {
			angular.element(document).ready(SaveMyGas.configure)
		}
	},

	configure: function() {
		// if (!window.cordova) {
		// 	angular.element(document.body).append('<base href="/">')
		// }

		var initInjector = angular.injector(["ng"])
		var $http = initInjector.get("$http")

		$http.get('config.json')
			.then(function(response) {
				var config = response.data
				if (!config) {
					console.error('Aplicação sem configuração')
						// defered.reject()
					return
				} else if (!config.name) {
					console.error('Aplicação sem nome')
						// defered.reject()
					return
				} else if (!config.env) {
					console.error('Aplicação sem ambiente')
						// defered.reject()
					return
				} else if (!config[config.env]) {
					console.error('Aplicação sem configuracao de ambiente')
						// defered.reject()
					return
				} else if (!config[config.env].urlDomain) {
					console.error('Aplicação sem dominio na configuracao de ambiente')
						// defered.reject()
					return
				} else if (!config[config.env].urlApi) {
					console.error('Aplicação sem endereço da api na configuracao de ambiente')
						// defered.reject()
					return
				}

				// SaveMyGas.config = config;
				angular.module('save-my-gas')
					.constant('appConstants', config[config.env])

				angular.bootstrap(document, ['save-my-gas'])
			})
			.catch(function(err) {
				console.error('Aplicação sem arquivo de configuração')
			})
	}
}

SaveMyGas.start()

// $(document).ready(function() {
// 	$(".button-collapse").sideNav()
//
// 	$('.modal-trigger').leanModal()
//
// 	$('.dropdown-button').dropdown({
// 		belowOrigin: true
// 	})
//
// 	// $('[data-mask-money]').mask('000.000.000.000.000,00', { reverse: true })
// })
//
//
// function datePicker() {
// 	$('.datepicker').pickadate({
// 		closeOnSelect: true,
// 		selectMonths: true,
// 		selectYears: 130,
// 		labelMonthNext: 'Próximo Mês',
// 		labelMonthPrev: 'Mês Anterior',
// 		labelMonthSelect: 'Selecione o Mês',
// 		labelYearSelect: 'Selecione o ano',
// 		monthsFull: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
// 		monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
// 		weekdaysFull: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
// 		weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
// 		weekdaysLetter: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
// 		today: 'Hoje',
// 		clear: 'Limpar',
// 		close: 'Fechar',
// 		format: 'dd/mm/yyyy',
// 		onSet: function() {
// 			this.close()
// 		}
// 	})
// }
