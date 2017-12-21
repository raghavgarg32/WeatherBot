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
    console.log(weatherResponse.main.temp)
    let imageurl;

    if (weatherResponse.weather[0].main.toLowerCase() === "clear") {
    	imageurl = "https://icons.wxug.com/data/wximagenew/k/Klockheed/2.jpg";
    }
    else if (weatherResponse.weather[0].main.toLowerCase() === "smoke") {
    	imageurl = "https://cdn.pixabay.com/photo/2016/10/19/12/38/industry-1752876_960_720.png";
    }
    else if (weatherResponse.weather[0].main.toLowerCase() === "rain") {
    	imageurl = "https://i.ytimg.com/vi/J5OSRpRyl6g/maxresdefault.jpg";
    }
    else if (weatherResponse.weather[0].main.toLowerCase() === "sunny") {
    	imageurl = "http://www.qygjxz.com/data/out/217/5720389-sunny-pictures.jpg";
    }
    else if (weatherResponse.weather[0].main.toLowerCase() === "snow") {
    	imageurl = "http://i.funny.pho.to/preview/snow_effect/falling_snow_effect.jpeg";
    }
    else if (weatherResponse.weather[0].main.toLowerCase() === "drizzle") {
    	imageurl = "https://c1.staticflickr.com/8/7393/11375147803_0f453d8676_b.jpg";
    }
    else if (weatherResponse.weather[0].main.toLowerCase() === "thunder") {
    	imageurl = "https://cdn.pixabay.com/photo/2017/02/13/20/50/thunder-2063728_960_720.jpg";
    }
    else if (weatherResponse.weather[0].main.toLowerCase() === "fog") {
    	imageurl = "https://img00.deviantart.net/5b37/i/2016/006/a/0/fog_stock_05_by_malleni_stock-d9mylkv.jpg";
    }
    else if (weatherResponse.weather[0].main.toLowerCase() === "clouds") {
    	imageurl = "http://www.agweek.com/sites/default/files/styles/full_1000/public/field/image/clouds-1571768_1280.jpg?itok=IDXqFiJK";
    }
    else if (weatherResponse.weather[0].main.toLowerCase() === "mist" || weatherResponse.weather[0].main.toLowerCase() === "haze") {
    	imageurl = "https://prodwpids-idrivesafely.netdna-ssl.com/wp-content/uploads/2015/01/DRIVING_IN_THE_MIST.jpg";
    }

    if (weatherResponse.weather[0]) {
        var msg = new builder.Message(session);
	    msg.attachmentLayout(builder.AttachmentLayout.carousel)
	    msg.attachments([
	        new builder.HeroCard(session)
	            .title("Weather For " + city)
	            .text("Today is " + weatherResponse.weather[0].main + " " + "and the temperature is " + (weatherResponse.main.temp - 273.15).toFixed(2) + "°C")
	            .images([builder.CardImage.create(session, imageurl)])
	    ]);
	    session.send(msg);
	
        builder.Prompts.choice(session, "Would you like to know the weather in another city?", "Yes|No", { listStyle: builder.ListStyle.button });
    }
}
