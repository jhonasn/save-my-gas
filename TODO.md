# TODOS

### High Priority
*Those tasks will define the 1.0 version*

- [x] make http requests work
- [x] work to get nearer gas stations implementing:
 - [x] get geolocation looking for nearer stations
 - [x] google place api to get the gas stations
 - [x] google directions api to show the route to destination
   - used directions/distancematrix api to get distance between user and gasstation)
- [ ] implement stations pagination (google maps token)
- [ ] implement back to top button
- [ ] implement android native scroll
- [ ] show fuel consumption to each station
- [x] implement length converters (km/ml)
- [x] implement reload with list pull down refresher
- [x] make the computation to show in galons per miles and convert to liters
- [x] make the computation to transform distance in galons
- [ ] make the computation to transform distance galons consumption in money
- [ ] make or get consumption average of vehicle per potency/power (there's some statistics in inmetro per year)
- [ ] implement data to show all cars power
- [ ] calculates with usage time the vehicle's fuel consumption
- [ ] get gas stations princing from someware updated, case this is very difficult ask prices for users in application
- [ ] fix error messages, generalize it
- [x] verify if register cars is really needed
    - yes it is
- [x] fix cars not deleting cars
- [ ] put consumption field at vehicle entity
- [ ] put auto calculate fuel consumption field at vehicle entity

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
- [ ] implement search to another place in order to show how much fuel will spend to location
- [ ] make places list in order to make a comparation where how much it will be spend
- [ ] save vehicle in the cloud

## Later Tasks
*Tasks that will be implemented after the app goes to production or apply for the last*

- [ ] verify if is a good to use Crosswalk instead WebView
- [ ] when application goes to production implement android google admob/adsense api
- [ ] enable billing of google console
- [ ] review design
