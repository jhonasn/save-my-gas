define(function () {

    return function () {

        //implement get station from gmaps

        var db = {
            // start: function() {
            //   for (var i = 0; i < localStorage.length; i++) {
            //     this[localStorage.key(i)] = localStorage[localStorage.key(i)]
            //   }
            // },
            getEntitiesNames: function () {
                var names = []
                for (var i = 0; i < localStorage.length; i++) {
                    names.push(localStorage.key(i))
                }

                return names
            },
            get: function (index) {
                if (localStorage.hasOwnProperty(index))
                    return JSON.parse(localStorage[index])
                else
                    return null
            },
            set: function (index, value) {
                localStorage[index] = JSON.stringify(value)
            }
        }

        return {
            getAll: function (type) {
                var entitiesNames = db.getEntitiesNames()
                for (var i in entitiesNames) {
                    var collectionName = entitiesNames[i]
                    if (db.get(collectionName) && collectionName.toLowerCase() === type.toString().toLowerCase()) {
                        return db.get(collectionName)
                    }
                }

                return null
            },
            get: function (type, id) {
                if (this.getAll(type) != null) {
                    var entities = this.getAll(type)
                    var results = entities.filter(function (element) {
                        if ('id' in element && typeof (element.id) === 'number' && element.id == id)
                            return true
                    })

                    if (results.length > 0) {
                        results[0].idx = entities.indexOf(results[0])
                    }

                    return results[0]
                } else {
                    return null
                }
            },
            save: function (type, entity) {
                var prevEntity = this.get(type, entity.id)


                var entities = this.getAll(type)
                if (!entities) {
                    db.set(type, [])
                    entities = this.getAll(type)
                }

                if (prevEntity && prevEntity.idx && prevEntity.idx > -1) {
                    entities[prevEntity.idx] = entity
                } else {
                    entity.id = entities.length + 1
                    entities.push(entity)
                }

                db.set(type, entities)

                return true
            },
            delete: function (type, entity) {
                var prevEntity = this.get(type, entity.id)

                if (prevEntity) {
                    var entities = this.getAll(type)

                    if (prevEntity.idx && prevEntity.idx > -1) {
                        prevEntity = entities.splice(prevEntity.idx, 1)
                        if (prevEntity) {
                            db.set(type, entities)
                            return true
                        }
                    }
                }

                return false
            }
        }
    }
})
