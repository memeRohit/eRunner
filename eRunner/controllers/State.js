'use strict';
var utils = require('../utils/writer.js');
var State = require('../service/stateService');

// FOR CREATING STATE
module.exports.createState = function createState(req, res, next) {
    var body = req.swagger.params['body'].value;
    State.createState(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};



// GET STATE THROUGH EVENTID
module.exports.getStateByEventId = function getStateByEventId(req, res, next) {
    var eventId = req.swagger.params['eventId'].value;
    State.getStateByEventId(eventId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

// DELETE STATE
module.exports.deleteState = function deleteState(req, res, next) {
    var stateId= req.swagger.params['stateId'].value;
    State.deleteState(stateId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};