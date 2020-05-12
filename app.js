// Init Storage
const storgae = new Storage();
// Get stored location data
const weatherLocation = storgae.getLocationData()

// Init weather object
const weather = new Weather(weatherLocation.city);

// Init UI object
const ui = new UI();

//  Get weather when DOM load
document.addEventListener('DOMContentLoaded',getWeather)

// change location event
document.querySelector('#w-change-btn').addEventListener('click', (e) => {
    const city = document.querySelector('#city').value;

    // Change location
    weather.changeLocation(city);

    // Set location to LS
    storgae.setLocationData(city);

    // Get and display
    getWeather();

    // close modal
    $('#locModal').modal('hide');
})


function getWeather() {
    weather.getWeather()
        .then(results => {
            // console.log(results.current.condition);
            
            ui.paint(results.current, results.location, results.current.condition)
        })
        .catch(err => console.log(err))
}