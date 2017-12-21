var request = require('request');

exports.getWeatherData = function getData(url, session, city, callback) {
    request.get(url, function(err, res, body) {
        if (err) {
            console.log(err);
        } else if (res.statusCode === 200) {
            callback(body, session, city);
        } else {
            session.send("Sorry we couldn't find the weather of \"" + city + "\"");
        }
    });
};
