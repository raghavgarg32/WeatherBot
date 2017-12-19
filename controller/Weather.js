var rest = require('../API/Restclient');
var builder = require('botbuilder');

//Calls getWeatherData() in RestClient.js with handleWeatherResponse() as callback to display weather
exports.displayWeather = function getWeatherData(session, city) {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=2f2d83bc1a4664834a4b1e34fc39791e";
    rest.getWeatherData(url, session, city, handleWeatherResponse)
};

//This displays the weather
function handleWeatherResponse(message, session, city) {
    var weatherResponse = JSON.parse(message); //Parses JSON data
    if (weatherResponse.weather[0]) {
        session.send("The weather in " + city + " is: " + weatherResponse.weather[0].main);

    }

}
