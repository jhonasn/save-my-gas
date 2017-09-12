var fs = require('fs')
var request = require('request').defaults({
	jar: true
})
var img = null,
	imgB64 = null
// request.get('http://www.anp.gov.br/preco/prc/Resumo_Por_Estado_Index.asp', function(err, res, body) {
// 	request.get({
// 			url: 'http://www.anp.gov.br/preco/prc/imagem.asp',
// 			jar: res.headers['set-cookie'][0]
// 		}, function(err, res, body) {
// 			img = body
// 			var imgBuff = new Buffer(body, 'binary');
// 			imgB64 = 'data:image/gif;base64,' + imgBuff.toString('base64')
// 			fs.writeFileSync('C:\\Users\\jhonasnascimento\\Desktop\\testebuff.gif', imgBuff)
// 		}, true)
// 		.pipe(fs.createWriteStream('C:\\Users\\jhonasnascimento\\Desktop\\teste.gif'))
// })

var http = require('http'),
	Stream = require('stream').Transform,
	url = require('url')

http.get('http://www.anp.gov.br/preco/prc/Resumo_Por_Estado_Index.asp')
.on('response', function(res) {
	//find Cookie
	getImg(res.headers['set-cookie'][0])
})

function getImg(cookie) {
	url = url.parse('http://www.anp.gov.br/preco/prc/imagem.asp')

	var options = {
		hostname: url.hostname,
		path: url.path,
		method: 'GET',
		headers: {
			'Cookie': cookie,
		}
	}

	http.request(options)
	.on('response', function(response) {
		var data = new Stream();
		var ext = response.headers["content-type"].split('/')[1];

		response.on('data', function(chunk) {
			data.push(chunk);
		});

		response.on('end', function() {
			img = data.read()
			fs.writeFileSync(`C:\\Users\\jhonasnascimento\\Desktop\\teste.${ext}`, img);
			imgB64 = img.toString('base64')
			fs.writeFileSync('C:\\Users\\jhonasnascimento\\Desktop\\teste.html', `
				<html>
					<body>
						<img src="data:image/gif;base64, ${imgB64}" />
					</body>
				</html>
			`)
		});
	})
	.end();
}
