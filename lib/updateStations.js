/*
 * Return all State, City and Neighborhoods on the anp system
 */
var http = require('http')
var cheerio = require('cheerio')
var path = require('path')
var fs = require('fs')
var entitiesPath = path.join(__dirname, '/tempData')

module.entities = {
    states: [],
    cities: [],
    neighborhoods: [],
    fuelTypes: [],
    stations: [],
    sellPrices: []
}

module.stationScratchProgress = {
    total: 0,
    completed: 0,
}

module.strToAnpEntity = function(value) {
    var val = value.split('*')
    return {
        id: val[0],
        name: val.length > 0 ? val[1].replace(/\@/g, ' ') : ''
    }
}

module.anpEntityToStr = function(obj) {
    return '0*1'
        .replace('0', obj.id)
        .replace('1', obj.name ? obj.name.replace(/\ /g, '@') : obj.name)
}

var toTitleCase = function(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
}

var clearHtmlText = function(text) {
    return text
        .trim()
        .replace(/\r/g, '')
        .replace(/\n/g, '')
        .replace(/\t/g, '')
}

var toPropName = function(text) {
    text = clearHtmlText(text)
    text = require('diacritics').remove(text.toUpperCase())
    text = text.toLocaleLowerCase()
    text = text.replace(/\ de\ /g, '')
    text = text.replace(/\ da\ /g, '')
    text = text.replace(/\ do\ /g, '')
    text = toTitleCase(text)
    text = text.charAt(0).toLowerCase() + text.substr(1)
    return text
        .replace(/\ /g, '')
        .replace('(', '')
        .replace(')', '')
        .replace('.', '')
}

module.resquestCommon = function(res, cb) {
    // var iconv = new require('iconv').Iconv('latin1', 'utf-8')
    var iconv = new require('iconv').Iconv('ISO-8859-1', 'UTF8')

    res.on('response', function(res) {
            var chunks = []
            var totalLength = 0
            res.on('data', function(data) {
                chunks.push(data)
                totalLength += data.length
            })
            res.on('end', function() {
                var results = new Buffer(totalLength)
                var pos = 0
                for (var i = 0; i < chunks.length; i++) {
                    chunks[i].copy(results, pos)
                    pos += chunks[i].length
                }
                cb(null, iconv.convert(results))
            })
            res.on('error', function(err) {
                cb(err)
            })
        })
        .on('error', function(err) {
            cb(err)
        })
}

module.get = function(url, cb) {
    var req = http.get(url)
    module.resquestCommon(req, cb)
}

module.post = function(url, formData, cb) {
    url = require('url').parse(url)
    formData = require('querystring').stringify(formData)
    var options = {
        hostname: url.hostname,
        path: url.path,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': formData.length
        }
    }

    var req = http.request(options)
    module.resquestCommon(req, cb)
    req.write(formData)
    req.end()
}

module.exports.anpUpdate = function(updateRegions, cb) {
    if(updateRegions) {
        module.updateRegions(cb)
    } else {
        //get from db, for now this is fs json
	if(module.readStationsFiles()) {
                    module.updateAllStations(cb)
        } else {
            module.updateRegions(cb)//get regions from anb
        }
    }
}

module.updateRegions = function(cb) {
    var async = require('async')
    async.parallel([
        module.getStates,
        module.getCities
    ], function(err, res) {
        if(err) cb(err)

        fs.writeFileSync(path.resolve(entitiesPath, 'fuelTypes.json'), JSON.stringify(module.entities.fuelTypes))
        fs.writeFileSync(path.resolve(entitiesPath, 'states.json'), JSON.stringify(module.entities.states))
        fs.writeFileSync(path.resolve(entitiesPath, 'cities.json'), JSON.stringify(module.entities.cities))

        module.updateAllStations(cb)
    })
}

module.updateAllStations = function(cb) {
    var async = require('async')
    var stationsFunctions = []

    //create heap of functions that will get stations info
    module.entities.cities.forEach(function(city) {
        module.entities.fuelTypes.forEach(function(fuelType) {
            stationsFunctions.push(async.apply(module.getStationsByCity, city, fuelType))
        })
    })

    module.stationScratchProgress.total = stationsFunctions.length

    //gogogo!
    async.parallelLimit(stationsFunctions, 10, function (err, res) {
        if(err) cb(err)

        console.log('FINISH GET STATIONS!')

        cb(true)
    })
}

module.getStates = function(cb) {
    //get states and fuel types
    module.get(
        'http://www.anp.gov.br/preco/prc/Resumo_Por_Estado_Index.asp',
        function(err, res) {
            if (err) cb(err)

            var $ = cheerio.load(res)

            $('select[name=selEstado]').find('option').each(function(i, el) {
                module.entities.states.push(module.strToAnpEntity($(el).val()))
            })
            $('select[name=selCombustivel]').find('option').each(function(i, el) {
                module.entities.fuelTypes.push(module.strToAnpEntity($(el).val()))
            })

            cb()
        }
    )
}

module.getCities = function(cb) {
    //get cities
    module.post(
        'http://www.anp.gov.br/preco/prc/Resumo_Por_Municipio_Index.asp', {
            cod_Semana: '832',
            txtMunicipio: '',
        },
        function(err, res) {
            if (err) cb(err)

            var $ = cheerio.load(res)

            $('select[name=selMunicipio]').find('option').each(function(i, el) {
                module.entities.cities.push(module.strToAnpEntity($(el).val()))
            })

            cb()
        }
    )
}

module.getNeighborhoods = function(cb) {
	module.post(
		'http://www.anp.gov.br/preco/prc/Resumo_Ultimas_Coletas_Index.asp', {
			cod_Semana: 832,
			selMunicipio: '9668*SAO@PAULO',
			selCombustivel: '487*Gasolina'
		},
		function (err, res) {
			if(err) cb(err)

			var $ = cheerio.load(res)

			$('select[name=BAIRRO]').find('option').each(function(i, el) {
				//there's no id into neighborhoods
				//the 'select all' option value is 0
				module.entities.neighborhoods.push($(el).val().replace(/\@/g, ' '))
			})

			cb(module.entities.neighborhoods)
		}
	)
}

module.getCaptcha = function(city, cb) {
//get captcha -> get prices
    var scratchCaptcha = function(err, res) {
        if (err) cb(err)
        console.log('got captcha from ' + current)

        var $ = cheerio.load(res)

        var captcha = $('#frmCaptcha').attr('action').match(/'.*'/g)[0].replace(/'/g, '')
        var tipo = $('[name=Tipo]').val()
        var selSemana = $('[name=selSemana]').val()
        var codSemana = $('[name=cod_Semana]').val()

        
    }
    module.post(
        'http://www.anp.gov.br/preco/prc/Resumo_Por_Municipio_Index.asp', {
            cod_Semana: '832',
            selMunicipio: module.anpEntityToStr(city),
        },
        scratchCaptcha
    )
}

module.getStationsByCity = function(city, fuelType, cb) {
    var current = 'city: 0, fuelType: 1'.replace('0', city.name).replace('1', fuelType.name)
    console.log('starting to get ' + current)
    

    var scratchStations = function(err, res) {
        if (err) cb(err)

        console.log('got stations from ' + current)

        var $ = cheerio.load(res)

        var tableToArray = function(trs) {
            var props = []

            $(trs[1]).find('th').each(function(i, el) {
                props.push(toPropName($(el).text()))
            })

            var stations = []
            $(trs).each(function(i, el) {
                if ($(el).find('th').length > 0) return //skip header lines

                var station = {}
                var tds = $(el).find('td')
                props.forEach(function(p, i) {
                    station[p] = clearHtmlText($(tds[i]).text())
                })
                stations.push(station)
            })

            return stations
        }
        var tableKeyValueToArray = function(trs) {
            var values = []
            $(trs).each(function(i, el) {
                var tds = $(el).find('td')
                if (tds.length < 2) return

                var value = {}
                value[toPropName($(tds[0]).text())] = clearHtmlText($(tds[1]).text())
                values.push(value)
            })
            return values
        }

        var trsFN = $('#postos_nota_fiscal').find('table').first().find('tr')
        var trsNFN = $('#postos_nota_fiscal').find('table').first().find('tr')
        var trsSellPrice = $($('#postos_nota_fiscal').find('table')[1]).find('tr')

        var stationsFN = tableToArray(trsFN).map(function(obj) {
            obj.invoiceOk = true
            obj.cityId = city.id
            return obj
        })
        var stationsNFN = tableToArray(trsNFN).map(function(obj) {
            obj.invoiceOk = false
            obj.cityId = city.id
            return obj
        })
        var sellPrice = tableKeyValueToArray(trsSellPrice).map(function(obj) {
            obj.cityId = city.id
            return obj
        })
        module.entities.stations = module.entities.stations.concat(stationsFN.concat(stationsNFN))
        module.entities.sellPrices = module.entities.sellPrices.concat(sellPrice)
        console.log('stations from 0 completed, fuel 1'.replace('0', city.name).replace('1', fuelType.name))
        fs.writeFileSync(path.resolve(entitiesPath, 'sellPrices.json'), JSON.stringify(module.entities.sellPrices))
        fs.writeFileSync(path.resolve(entitiesPath, 'stations.json'), JSON.stringify(module.entities.stations))

        module.stationScratchProgress.completed++

        console.log('0 of 1 [ 2 % ]'.replace('1',module.stationScratchProgress.total).replace('0', module.stationScratchProgress.completed).replace('2', ((module.stationScratchProgress.completed*100)/module.stationScratchProgress.total).toFixed()))

        cb()
    }

    //init
    //get stations prices
        module.post(
            'http://www.anp.gov.br/preco/prc/Resumo_Por_Municipio_Posto.asp', {
                Tipo: tipo, //i don't know what is it
                selSemana: selSemana, //not required/verified
                cod_Semana: codSemana,
                selCombustivel: module.anpEntityToStr(fuelType),
                selMunicipio: module.anpEntityToStr(city),
                txtValor: captcha, //catcha
            },
            scratchStations
        )
    
}

module.readStationsFiles = function() {
	if(fs.existsSync(entitiesPath)) {
            module.entities.fuelTypes = JSON.parse(fs.readFileSync(path.join(entitiesPath, 'fuelTypes.json'), 'utf-8'))
            module.entities.states = JSON.parse(fs.readFileSync(path.join(entitiesPath, 'states.json'), 'utf-8'))
            module.entities.cities = JSON.parse(fs.readFileSync(path.join(entitiesPath, 'cities.json'), 'utf-8'))
            module.entities.stations = JSON.parse(fs.readFileSync(path.join(entitiesPath, 'stations.json'), 'utf-8'))
	    return true
	} else {
		if(fs.mkdirSync(entitiesPath)) {
			return false
		}
	}
}

module.exports.postProcessStations = function(cb) {
	if(!module.readStationsFiles()) {
		//error on read files
		cb('the files could not be readed, likely they or your folder do not exists')
		return
	}

	//read ok, then process
	var isEquals = function (a,b) {
		return a.razaoSocial == b.razaoSocial &&
	    a.bairro == b.bairro &&
	    a.endereco == b.endereco &&
	    a.cityId == b.cityId
	}

	var joinEntities = function (a,b) {
		for(var i in a) {
			if(!b.hasOwnProperty(i)) {
				b[i] = a[i]
			}
		}

		return b
	}
	var processed = 0,
	total = module.entities.stations.length
	var filteredStations = module.entities.stations.reduce(function(filtered, next) {
		if(!Array.isArray(filtered)) {
			return isEquals(filtered, next) ? [joinEntities(filtered,next)] : [filtered, next]
		} else {
			var equals = filtered.filter(function(obj) {
				return isEquals(obj, next)
			})
			//joinEntities equals into next
			equals.forEach(function(obj) {
				joinEntities(next, obj)
			})
			var notEquals = filtered.filter(function(obj) {
				return !isEquals(obj, next)
			})
			notEquals.push(next)

			processed++
			console.log('process: {0} of {1} - {2}%'
							.replace('{0}', processed)
							.replace('{1}'}', total)
							.replace('{2}', ((processed*100)/total).toFixed(2))
			)

			return notEquals
		}
	})

	fs.writeFileSync(path.join(entitiesPath, 'ppStations.json'), JSON.stringify(filteredStations))
	console.log('stations processed and saved on ppStations.json')

	//in another method put geolocation in each stations by the address
	cb(null, 'Post Process Finished!')
}
