'use strict';
var event = require('../models/event');
  
// API FOR EVENT CREATE
exports.createEvent = function (body) {
    return new Promise(function (resolve, reject) {


        var data = new event({
            name : body.name,
            userId:body.userId,
            description : body.description,
            appId:body.appId,
            createdBy : body.userId,
            updatedBy : body.userId,
            createdDate : Date.now(),
            updatedDate : Date.now()
        });
        console.log(data)
        event.find({userId:data.userId,eventName:data.name}).exec(function(err,res){
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
// LIST OF EVENT
exports.getEventByAppId = function (appId) {
    return new Promise(function (resolve, reject) {
  
        event.find({appId: appId }).sort({createdDate:-1}).exec(function (error, result) {
        console.log('...result....',result)
          
       
        if (error) {
            console.log('...err....',error);
            
          reject(error);
          return;
        }
        else if (result)
          resolve({ error: false, result: result, message: "event get successfully" })
        else
          resolve({ error: true, message: "event does not exist" })
      })
  
    });
  }
// DELETE EVENT BY EVENTID
  exports.deleteEvent = function (eventId) {
    return new Promise(function (resolve, reject) {
  
      event.findOneAndRemove({_id: eventId }, (error, result) => {
          console.log('....result...',result)
        if (error) {
          reject(error);
          return;
        }
        else if (result)
          resolve({ error: false, result: result, message: "Event deleted " })
        else
          resolve({ error: true, message: "Event does not exist" })
      })
  
    });
  }