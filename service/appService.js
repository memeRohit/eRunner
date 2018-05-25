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
            appDescription : body.appDescription,
            appKey : nid({ hex: 1 }),
            createdBy : body.userId,
            pdatedBy : body.userId,
            createdDate : Date.now(),
            updatedDate : Date.now()
        });
        
        data.save(function (err, result) {
            if (err) {
                reject({ error: true, message: err });
                return;
            }
            else
                resolve({ error: false, result: result, message: "app created successfully" });
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
exports.getAppById = function (id) {
    return new Promise(function (resolve, reject) {
  
      app.findOne({ _id: id }, (error, result) => {
       
        if (error) {
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
  
