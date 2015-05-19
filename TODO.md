# TODOS

### High Priority
*Those tasks will define the 1.0 version*

- [x] make http requests work
- [x] work to get nearer gas stations implementing:
 - [x] get geolocation looking for nearer stations
 - [x] google place api to get the gas stations
 - [x] google directions api to show the route to destination
   - used directions/distancematrix api to get distance between user and gasstation)
- [ ] make the computation to transform distance in galons and after in money
 - [ ] make or get consumption average of vehicle per potency/power (there's some statistics in inmetro per year)
- [ ] implement data to show all cars power
- [ ] calculates with usage time the vehicle's fuel consumption
- [ ] get gas stations princing
- [ ] fix error messages, generalize it
- [ ] verify if register cars is really needed
- [ ] *fix cars not deleting cars*

### Medium Priority
*Tasks that maybe will be implemented or don't have high priority*
- [ ] separate connection verification from controllers
- [ ] separate google maps requests from controllers (maybe)
- [x] open a point in google maps app
- [ ] open routes from directions in google maps app
- [x] enable cors with gmaps

### Low Priority
*Those tasks will be implemented on versions later 1.0*

- [ ] implement vehicle reorder
- [ ] implement search to another place in order to show how much fuel will spend to location
- [ ] make places list in order to make a comparation where how much it will be spend
- [ ] verify if is a good to use Crosswalk instead WebView

## Later Tasks
*Tasks that will be implemented after the app goes to production or apply for the last*
- [ ] when application goes to production implement android google admob/adsense api
- [ ] enable billing of google console
- [ ] review design
