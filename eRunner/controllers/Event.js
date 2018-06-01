'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/eventService');

// FOR CREATING EVENT
module.exports.createEvent = function createEvent(req, res, next) {
    var body = req.swagger.params['body'].value;
    Event.createEvent(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};



// GET EVENT THROUGH APPID
module.exports.getEventByAppId = function getEventByAppId(req, res, next) {
    var appId = req.swagger.params['appId'].value;
    Event.getEventByAppId(appId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

// DELETE EVENT
module.exports.deleteEvent = function deleteEvent(req, res, next) {
    var eventId= req.swagger.params['eventId'].value;
    Event.deleteEvent(eventId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};