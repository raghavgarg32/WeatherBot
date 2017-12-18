var request = require('request')



exports.getWeatherData = function getData(url, session, city, callback){
    request.get(url, function(err,res,body){
        if(err){
            console.log(err);
        }else {
            callback(body, session, city);
        }
    });
};

