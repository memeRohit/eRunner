var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const userSchema =  mongoose.Schema({

    name: {
        type: String
    },
    password:  {
        type: String
    },
    email:  {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber:{
        type: String
    },
    otp:{
        type: Number
    },
    otpExpiresIn: {
        type: Number
    },
    createdBy:{
        type: Schema.ObjectId,
        ref: 'User'
    },
    updatedBy:{
        type: Schema.ObjectId,
        ref: 'User'
    },
    createdDate:{
        type: Date,
        default: Date.now()
    },
    updatedDate:{
        type: Date,
        default: Date.now()
    },
    enable:{
        type: Number,
        default: 0
    }
    
});



const user = module.exports = mongoose.model('user', userSchema);



