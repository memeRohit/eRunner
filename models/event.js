var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const eventSchema = mongoose.Schema({

    name: {
        type: String
    },
    description: {
        type: String
    },
    appId:{
        type:Schema.ObjectId,
        ref:'app'
        
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
eventSchema.pre('findOne', function (next) {
    this.populate('userId');
    next();
});

eventSchema.pre('find', function (next) {
    this.populate('userId');
    next();
});
eventSchema.pre('findOne', function (next) {
    this.populate('appId');
    next();
});

eventSchema.pre('find', function (next) {
    this.populate('appId');
    next();
});



const event = module.exports = mongoose.model('event', eventSchema);



