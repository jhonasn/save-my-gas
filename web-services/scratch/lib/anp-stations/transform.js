var path = require('path')
var anpEntities = require(path.join(rootPath, 'lib', 'anp-stations', 'entities.js'))
var geolocation = require(path.join(rootPath, 'lib', 'anp-stations', 'geolocation.js'))
var strOp = require(path.join(rootPath, 'lib', 'stringOperations.js'))

var processed = 0,
	total = 0 

module.exports.postProcessStations = function(cb) {
	anpEntities.delete('ppStations')
	if(!anpEntities.readStationsFiles()) {
		//error on read files
		cb('the files could not be readed, likely they or your folder do not exists')
		return
	}

	total = anpEntities.entities.stations.length

	
	//remove stations without invoice
	anpEntities.entities.stations = anpEntities.entities.stations.reduce(function(all, next) {
		if(Array.isArray(all)) {
			if(next.invoiceOk) {
				all.push(next)
			}
			return all
		} else {
			if(all.invoiceOk && next.invoiceOk) {
				return [all, next]
			} else if(all.invoiceOk) {
				return [all]
			} else if (next.invoiceOk) {
				return [next]
			} else {
				return []
			}
		}
	})
	total = anpEntities.entities.stations.length

	//split by city for performance
	anpEntities.entities.cities.forEach(function(city) {
		city.stations = anpEntities.entities.stations.filter(function(s) { return s.cityId == city.id })
		if(city.stations.length > 0) {
			city.stations.forEach(function(s) {
				module.formatStationObj(s)
				var sidx = anpEntities.entities.stations.indexOf(s)
				anpEntities.entities.stations.splice(sidx, 1)
			})
			city.stations = city.stations.reduce(module.reduceStations)
		}
		console.log('finished city: ', city.name, ' stations: ', city.stations.length)
	})

	//rejoin stations
	var filteredStations = []
	anpEntities.entities.cities.forEach(function(city) {
		filteredStations = filteredStations.concat(city.stations)
	})

	var fileName = 'ppStations.json'
	anpEntities.save('ppStations', filteredStations)
	
	console.log('stations processed and saved on ppStations.json')
	console.log('stations not processed: ', anpEntities.entities.stations)

	var conflictedProps = filteredStations.filter(function(o) {
		return o.hasOwnProperty('conflicted')
	}).length

	console.info('stations conflicted: ', conflictedProps)

	//in another method put geolocation in each stations by the address
	cb(null, 'Post Process Finished!')
}

module.isEquals = function (a,b) {
	return a.razaoSocial == b.razaoSocial &&
		a.bairro == b.bairro &&
		a.endereco == b.endereco &&
		a.cityId == b.cityId
}

module.formatStationObj = function (station) {
	var fuelType = anpEntities.entities.fuelTypes.filter(function(f) { return f.id == station.fuelTypeId })[0]
	var fuelTypeName = strOp.toPropName(fuelType.name)

	station.precoVenda = station.precoVenda ? parseFloat(station.precoVenda.replace(',','.')) : null
	station.precoCompra = station.precoCompra ? parseFloat(station.precoCompra.replace(',','.')) : null

	station[fuelTypeName] = {}
	station[fuelTypeName].precoVenda = station.precoVenda != NaN ? station.precoVenda : null
	station[fuelTypeName].precoCompra = station.precoCompra != NaN ? station.precoCompra : null
	station[fuelTypeName].modalidadecompra = station.modalidadecompra
	station[fuelTypeName].fornecedorBBranca = station.fornecedorBBranca
	station[fuelTypeName].fuelTypeId = parseInt(fuelType.id)

	delete station.fuelTypeId
	delete station.precoVenda
	delete station.precoCompra
	delete station.modalidadecompra
	delete station.fornecedorBBranca

	station[fuelTypeName].unit = station.unit
	delete station.unit

	if(station.dataColeta) {
		station[fuelTypeName].dataColeta = strOp.dateStringToDate(station.dataColeta)
		delete station.dataColeta
	}
	if(station.dataRecusa) {
		station[fuelTypeName].dataRecusa = strOp.dateStringToDate(station.dataRecusa)
		delete station.dataRecusa
	}

	station.cityId = parseInt(station.cityId)
}

module.joinEntities = function (a,b) {
	var resolveConflicted = function(a, b, i) {
		if(a[i] && b[i] && a[i] != b[i]) {

			if(!b.hasOwnProperty('conflicted')) {
				b.conflicted = {}
			}
			if(!b.conflicted.hasOwnProperty(i)) {
				b.conflicted[i] = [a[i], b[i]]
			} else {
				var hasAValue = b.conflicted[i].some(function(o) { return o == a[i] })
				var hasBValue = b.conflicted[i].some(function(o) { return o == b[i] })
				if(!hasAValue) {
					b.conflicted[i].push(a[i])
				}
				if(!hasBValue) {
					b.conflicted[i].push(b[i])
				}
			}
		}
	}

	for(var i in a) {
		if(!b.hasOwnProperty(i)) {
			b[i] = a[i]
		}
		resolveConflicted(a, b, i)
	}

	for(var j in b) {
		if(!a.hasOwnProperty(j)) {
			a[j] = b[j]
		}
		resolveConflicted(a, b, j)
	}

	return b
}


module.anotherProcessed = function() {
	processed++
		console.log('process: {0} of {1} - {2}%'
			    .replace('{0}', processed)
			    .replace('{1}', total)
			    .replace('{2}', ((processed*100)/total).toFixed(2))
			   )
}

module.reduceStations = function(filtered, next) {
	if(!Array.isArray(filtered)) {
		module.anotherProcessed()
		return module.isEquals(filtered, next) ? [module.joinEntities(filtered,next)] : [filtered, next]
	} else {
		var equals = filtered.filter(function(obj) {
			return module.isEquals(obj, next)
		})
		//joinEntities equals into next
		equals.forEach(function(obj) {
			if(!next.invoiceOk || !obj.invoiceOk) {
				next.invoiceOk = false
				obj.invoiceOk = false
			}
			module.joinEntities(next, obj)
		})
		var notEquals = filtered.filter(function(obj) {
			return !module.isEquals(obj, next)
		})
		notEquals.push(next)

		module.anotherProcessed()

		return notEquals
	}
}

