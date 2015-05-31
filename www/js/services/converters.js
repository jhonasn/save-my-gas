define(function () {

    var module = {}
    module.exports = {}

    module.exports.consumption = {
        units: {
            kpl: { value: 2.82481, unit: 'km/l', description: 'kilometer per liter' }, //kpl to mpg
            mpg: { value: 0.832674, unit: 'ml/g', description: 'milles per gallon' }, //mpg to mpgus
            mpgus: { value: 2.35215, unit: 'ml/g (us)', description: 'milles per gallon (us)' }, //kpl to mpgus
        },

        mpgToKpl: function (value) {
            return value / this.units.kpl.value
        },
        kplToMpg: function (value) {
            return value * this.units.kpl.value
        },
        mpgToMpgUs: function (value) {
            return value * this.units.mpg.value
        },
        mpgUsToMpg: function (value) {
            return value / this.units.mpg.value
        },
        mpgUsToKpl: function (value) {
            return value / this.units.mpgus.value
        },
        kplToMpgUs: function (value) {
            return value * this.units.mpgus.value
        }
    }

    module.exports.liquid = {
        units: {
            l: 0.219969, //l to g
            g: 1.20095, //g to gus
            gus: 0.264172 //l to gus
        },

        lToGal: function (value) {
            return value * this.units.l
        },
        lToGalUs: function (value) {
            return value * this.units.gus
        },
        galToGalUs: function (value) {
            return value * this.units.g
        },
        galToL: function (value) {
            return value / this.units.l
        },
        galUsToGal: function (value) {
            return value / this.units.g
        },
        galUsToL: function (value) {
            return value / this.units.gus
        }
    }

    module.exports.length = {
        unit: 1.609344, //ml to km, standard with us and uk

        kmToMl: function (value) {
            return value / this.unit
        },
        mlToKm: function (value) {
            return value * this.unit
        }
    }

    module.exports.distance = {
        latLngDiag1Km: 0.00635204829695035,
        latLng1Km: 0.008983152841195216238567855526753191953,//(1.0000000000000002 km)
        distanceLitersConsumption: function (distance, vehicle) {
            //distance will always use kilometers, the google default unit
            // vehicleObjExpects = { unit: 'kpl ex.', consumption: '10(kpl)' }
            var vehicleConsumption = 0

            //transform vehicle consumption unit to google unit (?)
            if (vehicle.unit.value == module.exports.consumption.units.kpl.value) {
                //unit ok do nothing
                vehicleConsumption = vehicle.consumption
            } else if (vehicle.unit.value == module.exports.consumption.units.mpg.value) {
                vehicleConsumption = MPGtoKPL(vehicle.consumption)
            } else if (vehicle.unit.value == module.exports.consumption.units.mpgus.value) {
                vehicleConsumption = MPGUStoKPL(vehicle.consumption)
            } else {
                return 'Error: vehicle unit not recognized'
            }

            return vehicleConsumption * (distance.value / 1000)//distance come in meters
        },

        distanceGalonsConsumption: function (distance, vehicle) {
            var distanceLiters = distanceLitersConsumption(distance, vehicle)
            return module.liquid.lToGal(distanceLiters)
        },

        distanceGalonsUsConsumption: function (distance, vehicle) {
            var distanceLiters = distanceLitersConsumption(distance, vehicle)
            return module.liquid.lToGalUs(distanceLiters)
        },

        fuelCostUs: function (fuelBasePrices, fuelQuantity, liquidUnit) {
            //verify the default unit of fuel to make this computation
            //we will assume galons (im) as default unit for now
            var fuelGalons = 0
            , fuelPriceAverage = 0

            //do the average
            if(fuelBasePrices.length && fuelBasePrices.length > 0) {
                fuelPriceAverage = fuelBasePrices.reduce(function(prev, curr, i) {
                    return prev + curr
                })
                fuelPriceAverage = fuelPriceAverage / fuelBasePrices.length
            } else
                fuelPriceAverage = fuelBasePrices

            //normalize fuel unit
            if(liquidUnit == module.exports.liquid.units.g) {
                fuelGalons = fuelQuantity
            } else if(liquidUnit == module.exports.liquid.units.gus) {
                fuelGalons = module.exports.liquid.galUsToGal(fuelQuantity)
            } else if(liquidUnit == module.exports.liquid.units.l) {
                fuelGalons = module.exports.liquid.lToGal(fuelQuantity)
            }//barrels ? <- :(

            return fuelGalons * fuelPriceAverage
        },

        coordsToKm: function (coord1, coord2){  // generally used geo measurement function
            var lat1 = coord1.latitude
            , lon1 = coord1.longitude
            , lat2 = coord2.latitude
            , lon2 = coord2.longitude
            var R = 6378.137 // Radius of earth in KM
            var dLat = (lat2 - lat1) * Math.PI / 180
            var dLon = (lon2 - lon1) * Math.PI / 180
            var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2)
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
            var d = R * c
            return d // km
        }
    }

    module.constructor = function () {
        return module.exports
    }

    return module.constructor
})
