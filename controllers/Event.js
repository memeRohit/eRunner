'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/eventService');


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


