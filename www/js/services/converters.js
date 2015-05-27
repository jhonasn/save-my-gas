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
        distanceLitersConsumption: function (distance, vehicle) {
            //distance will always use kilometers, the google default unit
            // vehicleObjExpects = { unit: 'kpl ex.', consumption: '10(kpl)' }
            var vehicleConsumption = 0

            //transform vehicle consumption unit to google unit (?)
            if (vehicle.unit == unitEnum.km) {
                //unit ok do nothing
                vehicleConsumption = vehicle.consumption
            } else if (vehicle.unit == unitEnum.ml) {
                vehicleConsumption = MPGtoKPL(vehicle.consumption)
            } else if (vehicle.unit == unitEnum.mlus) {
                vehicleConsumption = MPGUStoKPL(vehicle.consumption)
            } else {
                return 'Error: vehicle unit not recognized'
            }

            return vehicleConsumption * distance
        },

        distanceGalonsConsumption: function (distance, vehicle) {
            var distanceLiters = distanceLitersConsumption(distance, vehicle)
            return module.liquid.lToGal(distanceLiters)
        },

        distanceGalonsUsConsumption: function (distance, vehicle) {
            var distanceLiters = distanceLitersConsumption(distance, vehicle)
            return module.liquid.lToGalUs(distanceLiters)
        }
    }

    module.constructor = function () {
        return module.exports
    }

    return module.constructor
})
