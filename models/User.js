const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        //regex validation using mongoose's match property
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            //refereces thought model
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            //references self user model
            ref: 'User'
        }
    ]
},
{
    toJSON: {
        //allows the use of virtuals
        virtuals: true,
    },
    id: false
})

//virtual to count how many friends the user has
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

//create user model
const User = model('User', userSchema);

//export user model to index
module.exports = User;