define(function () {

    var module = {}
    module.exports = {}

    module.exports.consumption = {
        units: {
            kpl: 2.82481, //kpl to mpg
            mpg: 0.832674, //mpg to mpgus
            mpgus: 2.35215 //kpl to mpgus
        },

        mpgToKpl: function (value) {
            return value / this.units.kpl
        },
        kplToMpg: function (value) {
            return value * this.units.kpl
        },
        mpgToMpgUs: function (value) {
            return value * this.units.mpg
        },
        mpgUsToMpg: function (value) {
            return value / this.units.mpg
        },
        mpgUsToKpl: function (value) {
            return value / this.units.mpgus
        },
        kplToMpgUs: function (value) {
            return value * this.units.mpgus
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
        distanceLitersConsumption: function (distance, car) {
            //distance will always use kilometers, the google default unit
            // carObjExpects = { unit: 'kpl ex.', consumption: '10(kpl)' }
            var carConsumption = 0

            //transform car consumption unit to google unit (?)
            if (car.unit == unitEnum.km) {
                //unit ok do nothing
                carConsumption = car.consumption
            } else if (car.unit == unitEnum.ml) {
                carConsumption = MPGtoKPL(car.consumption)
            } else if (car.unit == unitEnum.mlus) {
                carConsumption = MPGUStoKPL(car.consumption)
            } else {
                return 'Error: car unit not recognized'
            }

            return carConsumption * distance
        },

        distanceGalonsConsumption: function (distance, car) {
            var distanceLiters = distanceLitersConsumption(distance, car)
            return module.liquid.lToGal(distanceLiters)
        },

        distanceGalonsUsConsumption: function (distance, car) {
            var distanceLiters = distanceLitersConsumption(distance, car)
            return module.liquid.lToGalUs(distanceLiters)
        }
    }

    module.constructor = function () {
        return module.exports
    }

    return module.constructor
})
