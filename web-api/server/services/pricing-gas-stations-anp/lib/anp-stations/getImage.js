var fs = require('fs'),
	request = require('../request')

request.get('http://www.anp.gov.br/preco/prc/Resumo_Por_Estado_Index.asp', (err, body, res) => {
	req = request.get('http://www.anp.gov.br/preco/prc/imagem.asp', (err, body, res) => {
		var ext = res.headers["content-type"].split('/')[1];
		fs.writeFileSync(`C:\\Users\\jhonasnascimento\\Desktop\\teste.${ext}`, body);
		var imgB64 = body.toString('base64')
		fs.writeFileSync('C:\\Users\\jhonasnascimento\\Desktop\\teste.html', `
			<html>
				<body>
					<img src="data:image/gif;base64, ${imgB64}" />
				</body>
			</html>
		`)
	}, { convert: false, headers: { Cookie: res.headers['set-cookie'][0] } })
})
