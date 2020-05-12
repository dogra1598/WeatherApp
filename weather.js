class Weather{
    constructor(city){
        this.apiKey = '21580ea5399b422387e104047200805';
        this.city = city;
    }

    // Fetch weather info form API
    async getWeather(){
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${this.apiKey}&q=${this.city}`)

        const responseData = await response.json();

        return responseData;
    } 

    
    // Change weather location
    changeLocation(city){
        this.city = city;
    }
}