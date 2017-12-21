var weather = require('./Weather');

exports.startDialog = function (bot) {
    var recognizer = new builder.LuisRecognizer('https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/f5c7f697-cd55-415b-97bf-cd59690104ed?subscription-key=d815d5827cc84b4b8e9935674293bd02&verbose=true&timezoneOffset=0&q=');
    
    bot.recognizer(recognizer);

    // Dialog for welcoming user
    bot.dialog('WelcomeIntent', [
        function (session, args) {
            // Asks user if they want to find out the weather
            builder.Prompts.choice(session, "Hi there! Would you like to know the weather in a city?", "Yes|No", { listStyle: builder.ListStyle.button });
        },
        function (session, result) {
            // If yes then begin dialog for asking about weather
            if (result.response.entity === "Yes") {
                session.beginDialog('Weather');
            } else {
                session.send("Thanks for using weather bot! :D")
            }
        }
    ]).triggerAction({
        matches: 'WelcomeIntent' // Triggers function on this intent
    });

    // Dialog for asking about weather
    bot.dialog('Weather', [
        function (session, args) {
            // Prompts user to enter city name
            builder.Prompts.text(session, "Please enter the city you would like to know the weather for");
        },
        function (session, result) {
            // Displays weather at given city
            weather.displayWeather(session, result.response);
            
            builder.Prompts.choice(session, "Would you like to know the weather in another city?", "Yes|No", { listStyle: builder.ListStyle.button });
        },
        function (session, result) {
            if (result.response.entity === "Yes") {
                session.beginDialog('Weather');
            } else {
                session.send("Thanks for using weather bot! :D")
            }
        }
    ]);
}
