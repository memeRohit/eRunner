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
    var userId = req.swagger.params['userId'].value;
    App.getAppById(userId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};


module.exports.deleteApp = function deleteApp(req, res, next) {
    var appId= req.swagger.params['appId'].value;
    App.deleteApp(appId)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

