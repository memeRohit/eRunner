var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const configSchema = mongoose.Schema({

    notification: {
        serverKey: String
    },
    email: {
        email: String,
        password: String
    },
    message: {
        fromNumber: String,
        key: String
    },
    appId: {
        type: Schema.ObjectId,
        ref: 'app'
    },
    createdBy: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    updatedBy: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    createdDate: {
        type: Date,
        default: Date.now()
    },
    updatedDate: {
        type: Date,
        default: Date.now()
    },
    enable: {
        type: Number,
        default: 0
    }

});
configSchema.pre('findOne', function (next) {
    this.populate('appId');
    next();
});

configSchema.pre('find', function (next) {
    this.populate('appId');
    next();
});

const config = module.exports = mongoose.model('config', configSchema);
