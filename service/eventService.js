'use strict';
var event = require('../models/event');
  
// API FOR EVENT CREATE
exports.createEvent = function (body) {
    return new Promise(function (resolve, reject) {


        var data = new event({
            eventName : body.eventName,
            userId:body.userId,
            eventDescription : body.eventDescription,
            appId:body.appId,
            createdBy : body.userId,
            updatedBy : body.userId,
            createdDate : Date.now(),
            updatedDate : Date.now()
        });
        console.log(data)
        event.find({userId:data.userId,eventName:data.eventName}).exec(function(err,res){
            console.log("results",res);
            if(err){
                reject({ error: true, message: err });
            }
            else if (res.length > 0) {
                reject({ error: true, message: "Event already exists" });
            }
            else {
        data.save(function (err, result) {
            console.log('...result....',result)
            if (err) {
                console.log('...err....',err);
                reject({ error: true, message: err });
                return;
            }
            else
                resolve({ error: false, result: result, message: "Event created successfully" });
        })
    }

    });
})
}