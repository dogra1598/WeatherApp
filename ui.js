class UI {
    constructor() {
        this.location = document.querySelector('#w-location');
        this.desc = document.querySelector('#w-desc');
        this.string = document.querySelector('#w-string');
        this.details = document.querySelector('#w-details');
        this.icon = document.querySelector('#w-icon');
        this.humidity = document.querySelector('#w-humidity');
        this.windSpeed = document.querySelector('#w-wind-speed');
        this.windDir = document.querySelector('#w-wind-dir');
        this.visibility = document.querySelector('#w-vis_km');
    }

    paint(weather, location, condition){
        this.location.textContent = `${location.name}, ${location.country}`;
        this.desc.textContent = condition.text;
        this.string.textContent = `${weather.temp_c}°C ${weather.temp_f}°F`;
        this.icon.setAttribute('src', condition.icon);
        this.humidity.textContent = `Humidity: ${weather.humidity}`;
        this.windDir.textContent = `Wind Direction: ${weather.wind_dir}`;
        this.visibility.textContent = `Visibility: ${weather.vis_km} km`;
        this.windSpeed.textContent = `Wind Speed: ${weather.wind_kph} km/h`;
    }
}