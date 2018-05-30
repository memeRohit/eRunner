'use strict';

var utils = require('../utils/writer.js');
var App = require('../service/appService');


module.exports.createApp = function createApp(req, res, next) {
    var body = req.swagger.params['body'].value;
    App.createApp(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};


module.exports.getAppById = function getAppById(req, res, next) {
    var appId = req.swagger.params['appId'].value;
    App.getAppById(appId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};




