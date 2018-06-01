var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const stateSchema = mongoose.Schema({

    stateName: {
        type: String
    },
    stateDescription: {
        type: String
    },
    type: {
        type: String
    },
    eventId:{
        type:Schema.ObjectId,
        ref:'event'  
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
stateSchema.pre('findOne', function (next) {
    this.populate('eventId');
    next();
});

stateSchema.pre('find', function (next) {
    this.populate('eventId');
    next();
});



const state = module.exports = mongoose.model('state', stateSchema);



