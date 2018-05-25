var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const appSchema = mongoose.Schema({

    appName: {
        type: String
    },
    appDescription: {
        type: String
    },
    appKey: {
        type: String
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



const app = module.exports = mongoose.model('app', appSchema);



