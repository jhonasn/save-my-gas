# TODOS

### High Priority
*Those tasks will define the 1.0 version*

- [x] make http requests work
- [x] work to get nearer gas stations implementing:
 - [x] get geolocation looking for nearer stations
 - [x] google place api to get the gas stations
 - [x] google directions api to show the route to destination
   - used directions/distancematrix api to get distance between user and gasstation)
- [x] implement stations pagination (google maps token)
   - used infinite scroll instead pagination
- [x] get gas stations princing from someware updated, case this is very difficult ask prices for users in application
    - i can get brasilian prices from:
        - http://www.anp.gov.br/ <- i can't found WS of that shit
        - https://api.apontador.com.br <- maybe useful to get phone number of stations
- [x] scratch data from anp.gov
- [x] implement data from anp.gov with geolocation - *doing this*
- [x] make db for stations info with scratched anp data
- [ ] implement service to auto update station from anp scratch
- [x] implement back to top button with an directive
- [x] make the computation to transform distance galons consumption in money
    - likely i'll need to reajust this, but ya, for now is ok
- [x] lock user to use app when there isn't vehicle registered
- [x] show fuel consumption to each station
- [x] implement length converters (km/ml)
- [x] implement reload with list pull down refresher
- [x] make the computation to show in galons per miles and convert to liters
- [x] make the computation to transform distance in galons
- [ ] make or get consumption average of vehicle (there's some statistics in inmetro per year)
    - fock yeah some webservice to save my life:
        - http://www.fueleconomy.gov/feg/ws/index.shtml
        - http://developer.edmunds.com/api-documentation/vehicle/
        - http://www.carqueryapi.com/
        - http://www.kbb.com/jsdata/2.1.37.1_40678/_modelsyears?vehicleclass=UsedCar
        - http://www.webservices.nl/en/product/vehicle-specificationsaccessories/
        - http://www.dataonesoftware.com/;
- [x] on vehicle edit save errors isn't threated
- [x] verify if register vehicles is really needed
    - yes it is
- [x] fix vehicles not deleting vehicles
- [x] put consumption field at vehicle entity
- [x] put auto calculate fuel consumption field at vehicle entity
- [x] implement vehicle consumption field on edit, problem when enter with comma
- [x] order station list with angular/ionic orderby

- [x] implement field into gas station model containing fuel types and last update from fuel price in order to make better searches on gas station screen
    - [x] implement updater for these fields

*** search for cheaper refuel screen
- [ ] Implement location selector component to get (and ask) cordova gps_off
- [ ] Implement open plugin to choose wich application to open gps to the gas station
- [ ] Implement details button
- [ ] Implement refuel button
- [ ] Exchange table by list to display gas stations

*** gas station screen
- [ ] all...

### Medium Priority
*Tasks that maybe will be implemented or don't have high priority*

- [ ] separate connection verification from controllers
- [ ] calculates with usage time the vehicle's fuel consumption
 - it's a bit complicated to implement, for now we get just the consumption from somewhere and the user will change this when he thinks that's appropriated
- [x] separate google maps requests from controllers (maybe)
- [x] open a point in google maps app
- [x] open routes from directions in google maps app
- [x] enable cors with gmaps
- [x] enable cors to debug via browser

### Low Priority
*Those tasks will be implemented on versions later 1.0*

- [ ] implement vehicle reorder
- [x] implement search to another place in order to show how much fuel will spend to locations
- [x] make places list in order to make a comparation where how much it will be spend
- [x] save vehicle in the cloud

## Later Tasks
*Tasks that will be implemented after the app goes to production or apply for the last*

- [ ] implement android native scroll
- [x] verify if is a good to use Crosswalk instead WebView
- [ ] when application goes to production implement android google admob/adsense api
- [x] enable billing of google console
- [x] review design
