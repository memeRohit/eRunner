'use strict';

var utils = require('../utils/writer.js');
var state = require('../service/stateService');

// FOR CREATING EVENT
module.exports.createState = function createState(req, res, next) {
    var body = req.swagger.params['body'].value;
    state.createState(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};



// GET EVENT THROUGH APPID
module.exports.getStateById = function getStateById(req, res, next) {
    var eventId = req.swagger.params['eventId'].value;
    state.getStateById(eventId)
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
    state.deleteState(stateId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};