'use strict';
var config = require('../models/config');


/** 
 * Create task
 * This can only be done by the logged in client.
 *
 * body client Created client object
 * no response value expected for this operation
*/
exports.createConfig = function (body) {
    return new Promise(function (resolve, reject) {

        var data = new config({
            appId: body.appId,
            createdBy: body.userId,
            pdatedBy: body.userId,
            createdDate: Date.now(),
            updatedDate: Date.now()
        });

        if (body.notification) {
            data.notification = body.notification
        }
        if (body.email) {
            data.email = body.email
        }
        if (body.message) {
            data.message = body.message
        }

        data.save(function (err, result) {
            if (err) {
                reject({ error: true, message: err });
                return;
            }
            else
                resolve({ error: false, result: result, message: "config created successfully" });
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
exports.getConfigById = function (id) {
    return new Promise(function (resolve, reject) {

        config.findOne({ _id: id }, (error, result) => {

            if (error) {
                reject(error);
                return;
            }
            else if (result)
                resolve({ error: false, result: result, message: "config get successfully" })
            else
                resolve({ error: true, message: "config does not exist" })
        })

    });
}

