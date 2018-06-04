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
    var userId = req.swagger.params['userId'].value;
    state.getStateById(userId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

// DELETE EVENT
module.exports.findStateById = function findStateById(req, res, next) {
    var id= req.swagger.params['id'].value;
    state.findStateById(id)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};