var rest = require('../API/Restclient');
var builder = require('botbuilder');

//Calls 'getWeatherData' in RestClient.js with 'displayWeather' as callback to get weather
exports.displayWeather = function getWeatherData(session,city){
    var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=2f2d83bc1a4664834a4b1e34fc39791e";
    rest.getWeatherData(url, session,city, handleWeatherResponse)
};

//This displays the weather
function handleWeatherResponse(message, session, city) {
    var WeatherResponse = JSON.parse(message);//Takes in JSON
    session.send("The weather is: %s", WeatherResponse.weather[0].main); 
    session.send("Would like to see the weather of another city?"); 
    
    
    

}