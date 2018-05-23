'use strict';
var User = require('../models/user');


/**
 * Create user
 * This can only be done by the logged in user.
 *
 * body User Created user object
 * no response value expected for this operation
 **/
exports.createUser = function (body) {
  return new Promise(function (resolve, reject) {
    var user = new User(body);
    // user.createdBy;
    user.save(function (err, user) {
      if (err) {
        if (err.errors && err.errors.email)  // error check if email is not present
        {
          reject({ "message": "Email is required to create a user" })
        }
        else if (err.code == 11000) // error check if email is not unique
        {
          reject({ "message": "This email or phone number already exists" })
        }
        else
          reject(err);

        return;
      }
      resolve(user);
    })

  });
}




/**
 * Delete user
 * This can only be done by the logged in user.
 *
 * username String The name that needs to be deleted
 * no response value expected for this operation
 **/
exports.deleteUser = function (username) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * Get user by user name
 * 
 *
 * username String The name that needs to be fetched. Use user1 for testing. 
 * returns User
 **/
exports.getUserByName = function (username) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "firstName": "firstName",
      "lastName": "lastName",
      "password": "password",
      "userStatus": 6,
      "phone": "phone",
      "id": 0,
      "email": "email",
      "username": "username"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get user by user name
 * 
 *
 * username String The name that needs to be fetched. Use user1 for testing. 
 * returns User
 **/
exports.getUserById = function (id) {
  return new Promise(function (resolve, reject) {

    User.findOne({ _id: id }, (error, user) => {
      console.log(user);
      console.log(error)
      if (error) {
        reject(error);
        return;
      }
      else if (user)
        resolve({ error: false, result: user, message: "User get successfully" })
      else
        resolve({ error: true, message: "User does not exist" })
    })

  });
}

















/**
 * Logs user into the system
 * 
 *
 * username String The user name for login
 * password String The password for login in clear text
 * returns String
 **/
exports.loginUser = function (body) {
  return new Promise(function (resolve, reject) {
    User.findOne({ email: body.email, password: body.password },{password:0}, (error, user) => {
      console.log(user);
      console.log(error)
      if (error) {
        reject(error);
        return;
      }
      if(user)
      resolve(user);
      else
      resolve({message:"Invalid email or password"})
    })

  });
}


/**
 * Logs out current logged in user session
 * 
 *
 * no response value expected for this operation
 **/
exports.logoutUser = function () {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}


/**
 * Updated user
 * This can only be done by the logged in user.
 *
 * username String name that need to be updated
 * body User Updated user object
 * no response value expected for this operation
 **/
exports.updateUser = function (username, body) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}

