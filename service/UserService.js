'use strict';
var User = require('../models/user');
var nodemailer = require('nodemailer');



/*************Function for send email****************/
function sendEmail(email) {

  var mailOptions, smtpTransporter;
  console.log("--------------------------------------------------");
  smtpTransporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'memeinfotechnotifications@gmail.com',
      pass: '18April2018'

    }
  });
  console.log("--------------------------------------------------");
  mailOptions = {
    from: 'memeinfotechnotifications@gmail.com',
    to: email,
    subject: 'Validate your account with the password',
    html: '<h1>Welcome</h1><div><span><a href="http://mitapi.memeinfotech.com:5015/user/updateStatus?email=' + email + '">this is your link</a></span></div>'
  };
  smtpTransporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      throw error;
    }
    else {
      console.log('Email sent: ' + info.response);
    }

  });
  return smtpTransporter;
}



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
          reject({ error: true,"message": "Email is required to create a user" })
        }
        else if (err.code == 11000) // error check if email is not unique
        {
          reject({error: true, "message": "This email or phone number already exists" })
        }
        else
          reject(err);

        return;
      }
      resolve({ error: false, result: user, message: "User created successfully" })
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
    User.findOne({ email: body.email, password: body.password }, { password: 0 }, (error, user) => {
      console.log(user);
      console.log(error)
      if (error) {
        reject(error);
        return;
      }
      if (user)
        resolve({ error: false, result: user, message: "User get successfully" });
      else
        resolve({ message: "Invalid email or password" })
    })

  });
}

/********** Api for forgot password  */

exports.forgotPassword = function (body) {
  return new Promise(function (resolve, reject) {
    User.findOne({ email: body }, (error, user) => {
      console.log(user);
      console.log(error)
      if (error) {
        reject(error);
        return;
      }
      if (user) {
        user.email = sendEmail(user.email);
        resolve({ error: false, message: "Reset link sent to your mail id" });
      }
      else
        resolve({ message: "Invalid email" })
    })

  });
}

/******** Api to reset the password *************/

exports.resetPassword = function (password,email) {
  return new Promise(function (resolve, reject) {
    console.log(email);
    console.log(password);
    User.findOneAndUpdate({ email: email }, { $set: { password: password } }, { new: true }, (error, user) => {
      console.log(user);
      console.log(error)
      if (error) {
        reject(error);
      }
      else if (user) {
        resolve({ error: false, result: user, message: "Password reset successfully" });
      }
      else
        resolve({ message: "Invalid email" })
    })

  });
}



// /**
//  * Updated user
//  * This can only be done by the logged in user.
//  *
//  * username String name that need to be updated
//  * body User Updated user object
//  * no response value expected for this operation
//  **/
// exports.updateUser = function (username, body) {
//   return new Promise(function (resolve, reject) {
//     resolve();
//   });
// }

