var appName = 'save-my-gas'
var onDeviceReady = function() {
	//Initialize application
	angular.bootstrap(document, [appName])
}

document.addEventListener("deviceready", onDeviceReady, false)

if (typeof cordova === 'undefined') {
	//var el = angular.element(document.getElementsByTagName('html')[0])
	angular.element().ready(function() {
		try {
			angular.bootstrap(document, [appName])
		} catch (e) {
			console.error(e.stack || e.message || e)
		}
	})
}

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
