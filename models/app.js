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
    userId:{
        type:Schema.ObjectId,
        ref:'user'
        
    },
    createdBy: {
        type: Schema.ObjectId,
        ref: 'user'
    },
    updatedBy: {
        type: Schema.ObjectId,
        ref: 'user'
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
appSchema.pre('findOne', function (next) {
    this.populate('userId');
    next();
});

appSchema.pre('find', function (next) {
    this.populate('userId');
    next();
});



const app = module.exports = mongoose.model('app', appSchema);



