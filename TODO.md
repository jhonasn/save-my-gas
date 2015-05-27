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
- [ ] implement back to top button with an ~~directive~~
- [x] make the computation to transform distance galons consumption in money
    - likely i'll need to reajust this, but ya, for now is ok
- [x] lock user to use app when there isn't vehicle registered
- [ ] calculates with usage time the vehicle's fuel consumption
- [x] show fuel consumption to each station
- [x] implement length converters (km/ml)
- [x] implement reload with list pull down refresher
- [x] make the computation to show in galons per miles and convert to liters
- [x] make the computation to transform distance in galons
- [ ] make or get consumption average of vehicle per potency/power (there's some statistics in inmetro per year)
- [ ] implement data to show all vehicles power
    - fock yeah some webservice to save my life:
        - http://www.fueleconomy.gov/feg/ws/index.shtml
        - http://developer.edmunds.com/api-documentation/vehicle/
        - http://www.carqueryapi.com/
        - http://www.kbb.com/jsdata/2.1.37.1_40678/_modelsyears?vehicleclass=UsedCar
        - http://www.webservices.nl/en/product/vehicle-specificationsaccessories/
        - http://www.dataonesoftware.com/;
- [ ] get gas stations princing from someware updated, case this is very difficult ask prices for users in application
- [ ] fix error messages, generalize it
- [ ] implement google response errors
- [x] verify if register vehicles is really needed
    - yes it is
- [x] fix vehicles not deleting vehicles
- [x] put consumption field at vehicle entity
- [x] put auto calculate fuel consumption field at vehicle entity
- [ ] implement vehicle consumption field on edit, problem when enter with comma
- [ ] put google search with distance filter and radius select on one popup option
- [x] order station list with angular/ionic orderby
- [ ] vehicle save error is not threated

### Medium Priority
*Tasks that maybe will be implemented or don't have high priority*

- [ ] separate connection verification from controllers
- [x] separate google maps requests from controllers (maybe)
- [x] open a point in google maps app
- [x] open routes from directions in google maps app
- [x] enable cors with gmaps
- [x] enable cors to debug via browser

### Low Priority
*Those tasks will be implemented on versions later 1.0*

- [ ] implement vehicle reorder
- [ ] implement search to another place in order to show how much fuel will spend to locations
- [ ] make places list in order to make a comparation where how much it will be spend
- [ ] save vehicle in the cloud

## Later Tasks
*Tasks that will be implemented after the app goes to production or apply for the last*

- [ ] implement android native scroll
- [ ] verify if is a good to use Crosswalk instead WebView
- [ ] when application goes to production implement android google admob/adsense api
- [ ] enable billing of google console
- [ ] review design
