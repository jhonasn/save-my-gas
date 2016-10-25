var app = {
	//urlDomain: 'http://192.168.2.116:3000',
	urlDomain: 'https://rest-savemygas.getup.io',
	userInfo: null,
	initialize: function() {
		this.bindEvents();
	},
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	onDeviceReady: function() {
		app.receivedEvent('deviceready');
	},
	receivedEvent: function(id) {
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');

		listeningElement.setAttribute('style', 'display:none;');
		receivedElement.setAttribute('style', 'display:block;');

		console.log('Received Event: ' + id);
	},
	login: function(provider) {
		var url = app.urlDomain + '/auth/' + provider;

		var ref = window.open(url, '_blank', 'location=no');

		// For Cordova
		if (window.cordova) {
			ref.addEventListener('loadstop', function(e) {
				if (e.url.indexOf(url) === 0) {
					ref.executeScript({
							code: "document.body.innerHTML"
						},
						function(values) {
							app.userInfo = JSON.parse(values[0].match(/\{\".*\}/g)[0]);
							app.userInfo.provider = provider;
							ref.close();
							alert(JSON.stringify(app.userInfo));
						}
					);
				} else if (e.url.indexOf('/login') !== -1) {
					alert('Erro no login');
				}
			});
		} else {
			// For `ionic serve --lab`. Wait for the user to close the window
			// and, when they do, check the server to see if they're now logged in.
			var interval = setInterval(function() {
				if (ref.closed) {
					$user.load();
					clearInterval(interval);
				}
			}, 100);
		}
	},
	logout: function() {
		if (app.userInfo) {
			$.ajax({
				type: 'POST',
				url: 'http://192.168.2.116:3000/api/Users/logout',
				headers: {
					"Authorization": app.userInfo.access_token
				}
				//OR
				//beforeSend: function(xhr) {
				//  xhr.setRequestHeader("My-First-Header", "first value");
				//  xhr.setRequestHeader("My-Second-Header", "second value");
				//}
			}).done(function(data) {
				alert(data);
			});
		}
	},
	vaiaranha: function() {
		var win = window.open('http://facebook.com', '_blank', 'location=no');
	}
};

app.initialize();
