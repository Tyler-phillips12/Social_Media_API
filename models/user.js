const { Schema, model } = require('mongoose');

// sets schema for the User Model
const userSchema = new Schema({
    username: {
        type: String,
        required: true, 
        unique: true,
        trim: true
    },
    email:  {
        type: String, 
        required: true, 
        unique: true,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

// uses getter to obtain total array of "friends" field
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// creates the user model given the schema
const User = model('User', userSchema);

module.exports = User;