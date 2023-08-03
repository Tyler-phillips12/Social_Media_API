const { Schema, model } = require('mongoose');

// Reaction schema only (Not a model). Will be used in the thought model to allow for reactions to posts
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },

        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },

        username: {
            type: String,
            required: true,
        },
    },

    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// Sets schema for Thought Model

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },

        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// Reaction count virtual that retrieves the length of the reactions array field
thoughtSchema.virtual(`reactionCount`).get(function () {
    return this.reactions.length;
});

// creates the Thoughts model given the schema
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;