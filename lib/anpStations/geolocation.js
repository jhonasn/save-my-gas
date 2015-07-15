module.$http.get('http://localhost:8100/google/distance.matrix/json' , {
            params: {
                //key: this.gmAppKey,
                origins: this.geolocaionStr,
                destinations: destinationsPoints.join('|'),
                travelMode: 'DRIVING'
            }
        })
