'use strict';
var app = require('../models/app');
var nid = require('nid')({ length: 16 });

/** 
 * Create task
 * This can only be done by the logged in client.
 *
 * body client Created client object
 * no response value expected for this operation
*/
exports.createApp = function (body) {
    return new Promise(function (resolve, reject) {


        var data = new app({
            appName : body.appName,
            userId:body.userId,
            appDescription : body.appDescription,
            appKey : nid({ hex: 1 }),
            createdBy : body.userId,
            updatedBy : body.userId,
            createdDate : Date.now(),
            updatedDate : Date.now()
        });
        console.log(data)
        app.find({userId:data.userId,appName:data.appName}).exec(function(err,res){
            console.log("results",res);
            if(err){
                reject({ error: true, message: err });
            }
            else if (res.length > 0) {
                reject({ error: true, message: "App already exists" });
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
                resolve({ error: false, result: result, message: "app created successfully" });
        })
    }

    });
})
}
/**
 * Get user by user name
 * 
 *
 * username String The name that needs to be fetched. Use user1 for testing. 
 * returns User
 **/
exports.getAppById = function (appId) {
    return new Promise(function (resolve, reject) {
  
      app.findOne({ _id: appId }, (error, result) => {
        console.log('...result....',result)
          
       
        if (error) {
            console.log('...err....',error);
            
          reject(error);
          return;
        }
        else if (result)
          resolve({ error: false, result: result, message: "App get successfully" })
        else
          resolve({ error: true, message: "App does not exist" })
      })
  
    });
  }
  
/**
 * Get user by user name
 * 
 *
 * username String The name that needs to be fetched. Use user1 for testing. 
 * returns User
 **/
exports.deleteApp = function (appId) {
    return new Promise(function (resolve, reject) {
  
      app.findOneAndRemove({ _id: appId }, (error, result) => {
          console.log('....result...',result)
        if (error) {
          reject(error);
          return;
        }
        else if (result)
          resolve({ error: false, result: result, message: "App deleted " })
        else
          resolve({ error: true, message: "App does not exist" })
      })
  
    });
  }



