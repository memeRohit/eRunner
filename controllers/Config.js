'use strict';

var utils = require('../utils/writer.js');
var Config = require('../service/configService');


module.exports.createConfig = function createConfig(req, res, next) {
    var body = req.swagger.params['body'].value;
    Config.createConfig(body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};


module.exports.getConfigById = function getConfigById(req, res, next) {
    var id = req.swagger.params['id'].value;
    Config.getConfigById(id)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};





