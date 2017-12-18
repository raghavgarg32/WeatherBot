var weather = require('./Weather');
var builder = require('botbuilder');


// Some sections have been omitted
var isAttachment = false;


exports.startDialog = function (bot) {
    // Replace {YOUR_APP_ID_HERE} and {YOUR_KEY_HERE} with your LUIS app ID and your LUIS key, respectively.
    var recognizer = new builder.LuisRecognizer('https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/f5c7f697-cd55-415b-97bf-cd59690104ed?subscription-key=d815d5827cc84b4b8e9935674293bd02&verbose=true&timezoneOffset=0&q=');
    
    bot.recognizer(recognizer);
   
bot.dialog('Start', [//Starts the conversation
    function (session, args, next) {
        session.dialogData.args = args || {};        
        builder.Prompts.text(session, "Please enter in the city you would like to know the weather for?"); //Asks the user for the city
            next(); 
    },
    function (session, result, next) {
        session.conversationData["city"] = result.response;//Stores the city in city
            next();
            // <---- THIS LINE HERE IS WHAT WE NEED 
        
    },
        function (session, result, next) {
        weather.displayWeather(session, session.conversationData["city"]); //Shows the user the conversion
        next();
    },
    function (session, result, next) {
        session.conversationData["city"] = result.response;//Stores the city in city
        // <---- THIS LINE HERE IS WHAT WE NEED 
        next();
        
        
    },   

]).triggerAction({
    matches: 'Start'//when this intent is picked up it triggers the function
});  

bot.dialog('WelcomeIntent', [//Welcomes the user
    function (session, args, next) {
        session.dialogData.args = args || {};        
        builder.Prompts.text(session, "Would you like to see the weather of your current city?"); //Asks the user if they want to see the current city
    },
    
]).triggerAction({
    matches: 'WelcomeIntent'//when this intent is picked up it triggers the function
});  

bot.dialog('End', [//Ends the conversatin
    function (session, args, next) {
        session.dialogData.args = args || {};        
        builder.Prompts.text(session, "Thats it folks!!!"); //Tells the user the conversation has ended
    },
    
]).triggerAction({
    matches: 'End'//when this intent is picked up it triggers the function
});  

}





   


