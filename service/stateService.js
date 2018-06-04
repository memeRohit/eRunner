'use strict';
var state = require('../models/state');


/** 
 * Create state
 * This can only be done by the logged in client.
 *
 * body client Created client object
 * no response value expected for this operation
*/
exports.createState = function (body) {
    return new Promise(function (resolve, reject) {


        var data = new state({
            name: body.name,
            userId: body.userId,
            description: body.description,
            eventId: body.eventId,
            type:body.type,
            createdBy: body.userId,
            updatedBy: body.userId,
            createdDate: Date.now(),
            updatedDate: Date.now()
        });
        console.log(data)
        state.find({ eventId: data.eventId, name: data.name }).exec(function (err, res) {
            console.log("results", res);
            if (err) {
                reject({ error: true, message: err });
            }
            else if (res.length > 0) {
                reject({ error: true, message: "state already exists" });
            }
            else {
                data.save(function (err, result) {
                    console.log('...result....', result)
                    if (err) {
                        console.log('...err....', err);
                        reject({ error: true, message: err });
                        return;
                    }
                    else
                        resolve({ error: false, result: result, message: "state created successfully" });
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

exports.getStateById = function (eventId) {
    return new Promise(function (resolve, reject) {

        state.find({ eventId: eventId }).sort({ createdDate: -1 }).exec(function (error, result) {
            console.log('...result....', result)


            if (error) {
                console.log('...err....', error);

                reject({error: true,message: message.error});
                return;
            }
            else if (result)
                resolve({ error: false, result: result, message: "state get successfully" })
            else
                resolve({ error: true, message: "State  does not exist" })
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

exports.findStateById = function (id) {
    return new Promise(function (resolve, reject) {

        state.find({_id: id }).sort({ createdDate: -1 }).exec(function (error, result) {
            console.log('...result....', result)
            if (error) {
                console.log('...err....', error);

                reject(error);
                return;
            }
            else if (result)
                resolve({ error: false, result: result, message: "state get successfully" })
            else
                resolve({ error: true, message: "state does not exist" })
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
exports.deleteApp = function (stateId) {
    return new Promise(function (resolve, reject) {

        app.findOneAndRemove({ _id: stateId }, (error, result) => {
            console.log('....result...', result)
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



