'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.createUser = function createUser (req, res, next) {
  var body = req.swagger.params['body'].value;
  User.createUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.getUserById = function getUserById (req, res, next) {
  var id = req.swagger.params['id'].value;
  User.getUserById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginUser = function loginUser (req, res, next) {
  var body = req.swagger.params['body'].value;
  User.loginUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateUser = function updateUser (req, res, next) {
  var username = req.swagger.params['username'].value;
  var body = req.swagger.params['body'].value;
  User.updateUser(username,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.forgotPassword = function forgotPassword (req, res, next) {
  var email = req.swagger.params['email'].value;
  console.log(email);
  User.forgotPassword(email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.verifyOtp = function verifyOtp (req, res, next) {
  var body = req.swagger.params['body'].value;
  console.log(body);
  User.verifyOtp(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.resetPassword = function resetPassword (req, res, next) {
  var password = req.swagger.params['password'].value;
  var email = req.swagger.params['email'].value;
  User.resetPassword(password,email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};







