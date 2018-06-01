'use strict';
var state = require('../models/state');
  
// API FOR STATE CREATE
exports.createState = function (body) {
    return new Promise(function (resolve, reject) {


        var data = new state({
            stateName : body.stateName,
            stateDescription : body.stateDescription,
            eventId:body.eventId,
            type:body.type,
            createdBy : body.userId,
            updatedBy : body.userId,
            createdDate : Date.now(),
            updatedDate : Date.now()
        });
        console.log(data)
        state.find({eventId:data.eventId,stateName:data.stateName}).exec(function(err,res){
            console.log("results",res);
            if(err){
                reject({ error: true, message: err });
            }
            else if (res.length > 0) {
                reject({ error: true, message: "State already exists" });
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
                resolve({ error: false, result: result, message: "State created successfully" });
        })
    }

    });
})
}
// LIST OF STATE THROUGH STATEID
exports.getStateByEventId = function (eventId) {
    return new Promise(function (resolve, reject) {
  
        state.find({eventId: eventId }).sort({createdDate:-1}).exec(function (error, result) {
        console.log('...result....',result)
          
       
        if (error) {
            console.log('...err....',error);
            
          reject(error);
          return;
        }
        else if (result)
          resolve({ error: false, result: result, message: "State get successfully" })
        else
          resolve({ error: true, message: "State does not exist" })
      })
  
    });
  }
// DELETE STATE BY STATEID
  exports.deleteState = function (stateId) {
    return new Promise(function (resolve, reject) {
  
      state.findOneAndRemove({_id: stateId }, (error, result) => {
          console.log('....result...',result)
        if (error) {
          reject(error);
          return;
        }
        else if (result)
          resolve({ error: false, result: result, message: "State deleted " })
        else
          resolve({ error: true, message: "State does not exist" })
      })
  
    });
  }