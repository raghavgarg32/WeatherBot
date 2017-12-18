var request = require('request')

//Gets information about currency rates
exports.getCurrencyData = function getData(url, session, amount, currentcur, nextcur, callback){
    request.get(url, function(err,res,body){
        if(err){
            console.log(err);
        }else {
            callback(body, session, amount, currentcur, nextcur);
        }
    });
};

exports.getWeatherData = function getData(url, session, city, callback){
    request.get(url, function(err,res,body){
        if(err){
            console.log(err);
        }else {
            callback(body, session, city);
        }
    });
};

//Gets the address to show the user
exports.showAddress = function getData(url, session, username, password, callback){
    request.get(url, {'headers':{'ZUMO-API-VERSION': '2.0.0'}}, function(err,res,body){
        if(err){
            console.log(err);
        }else {
            callback(body, session, username, password);
        }
    });
};

//Gets the email to show the user
exports.showEmail = function getData(url, session, username, password, callback){
    request.get(url, {'headers':{'ZUMO-API-VERSION': '2.0.0'}}, function(err,res,body){
        if(err){
            console.log(err);
        }else {
            callback(body, session, username, password);
        }
    });
};

//Gets the phone number to show the user
exports.showPhone = function getData(url, session, username, password, callback){
    request.get(url, {'headers':{'ZUMO-API-VERSION': '2.0.0'}}, function(err,res,body){
        if(err){
            console.log(err);
        }else {
            callback(body, session, username, password);
        }
    });
};

//Gets the balance to show the user
exports.showBalance = function getData(url, session, username, password, callback){
    request.get(url, {'headers':{'ZUMO-API-VERSION': '2.0.0'}}, function(err,res,body){
        if(err){
            console.log(err);
        }else {
            callback(body, session, username, password);
        }
    });
};

//Gets all details to show the user
exports.showAllDetails = function getData(url, session, username, password, callback){
    request.get(url, {'headers':{'ZUMO-API-VERSION': '2.0.0'}}, function(err,res,body){
        if(err){
            console.log(err);
        }else {
            callback(body, session, username, password);
        }
    });
};

//Adds the user's address input to the existing data
exports.postAddress = function SendData(url, username, password, Address){
    var options = {
        url: url,
        method: 'POST',
        headers: {
            'ZUMO-API-VERSION': '2.0.0',
            'Content-Type':'application/json'
        },
        json: {
            "username" : username,
            "password" : password,
            "Address" : Address
        }
      };
      
      request(options, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body);
        }
        else{
            console.log(error);
        }
      });
};

//Adds the user's phone number input to the existing data
exports.postPhone = function getData(url, username,password,Phone){
    var options = {
        url: url,
        method: 'POST',
        headers: {
            'ZUMO-API-VERSION': '2.0.0',
            'Content-Type':'application/json'
        },
        json: {
            "username" : username,
            "password" : password,
            "Phone" : Phone
        }
      };
      
      request(options, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body);
        }
        else{
            console.log(error);
        }
      });
};


//Deletes the user's address input to the existing data
exports.deleteAddress = function deleteData(url,session, username, password ,Address, id, callback){
    var options = {
        url: url + "\\" + id,
        method: 'DELETE',
        headers: {
            'ZUMO-API-VERSION': '2.0.0',
            'Content-Type':'application/json'
        }
    };
    request(options,function (err, res, body){
        if( !err && res.statusCode === 200){
            console.log(body);
            callback(body,session,username,password, Address);
        }else {
            console.log(err);
            console.log(res);
        }
    })

};

//Deletes the user's phone number input to the existing data
exports.deletePhone = function deleteData(url,session, username, password ,Phone, id, callback){
    var options = {
        url: url + "\\" + id,
        method: 'DELETE',
        headers: {
            'ZUMO-API-VERSION': '2.0.0',
            'Content-Type':'application/json'
        }
    };
    request(options,function (err, res, body){
        if( !err && res.statusCode === 200){
            console.log(body);
            callback(body,session,username,password, Phone);
        }else {
            console.log(err);
            console.log(res);
        }
    })

};

//posts the answers to the QnA
exports.postQnAResults = function getData(url, session, question, callback){
    var options = {
        url: url,
        method: 'POST',
        headers: {
            'Ocp-Apim-Subscription-Key': '63442b0b4c5d46ab8a8ead37dddf460e',
            'Content-Type':'application/json'
        },
        json: {
            "question" : question
        }
        };
    
        request(options, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            callback(body, session, question);
        }
        else{
            console.log(error);
        }
        });
    };
