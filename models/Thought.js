const { Schema, model, Types } = require('mongoose');
//getter from utils folder. Formats date to a presentable 
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default:  Date.now,
        get: createdAt => dateFormat(createdAt)
    }
},
{
    toJSON: {
        getters: true
    }
})

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        //adds a min of 1 character to max of 280 for string requirement
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        //this getter should take in default date and format it at the least
        get: createdAt => dateFormat(createdAt)
    },
    username: {
        type: String,
        required: true
    },
    //array of reaction objects
    reactions: [reactionSchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    }
})

//virtual that retrieves length of thought's reaction array
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

//create thought model
const Thought = model('Thought', thoughtSchema);

//export thought model to index
module.exports = Thought;