const { User, Thought } = require('../models');

const thoughtController = {

    // get request for All thoughts
    getThoughts(req, res) {
        Thought.find()
        .populate({
            path: 'reactions',
            select: '-__v'
        })
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },

    // get request for a single thought by id
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
          .select('-__v')
          .populate({
            path: 'reactions',
            select: '-__v'
          })
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought found containing this ID' })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },

    //   create a new thought
    createThought(req, res) {
        console.log(req.body);
        Thought.create(req.body)
            .then(thought => {
                User.findByIdAndUpdate(req.body.userId,
                    {
                        $addToSet: { thoughts: thought._id }
                    },
                    { new: true })
                    .then((user) =>
                        !user
                            ? res.status(404).json({ message: 'No User found containing this ID, but thought was created' })
                            : res.json(thought)
    
                    )
                    .catch((err) => res.status(500).json(err));
            })
    },

    // update an existing Thought
    updateThought(req,res){
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $set: req.body },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought found containing this ID' })
              : res.json(thought)
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          }
        )
      },

    //   delete a Thought
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
          .then((thought) =>{
            if (!thought) {
              res.status(404).json({ message: 'No thought found containing this ID' });
              return;
            }
            return User.findOneAndUpdate(
              { _id: req.params.userId },
              { $pull: { thoughts: req.params.Id } },
              { new: true }
            )
          })
          .then(userData => {
            if (!userData) {
              res.status(404).json({ message: 'No User found containing this ID, but thought deleted' });
              return;
            }
            res.json(userData);
          })
          .catch(err => res.json(err));
      },

    //   Add a reaction
    addReaction (req,res) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $addToSet: { reactions: req.body} },
          {  new: true }
        )
        .populate({path: 'reactions', select: '-__v'})
        .select('-__v')
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with this id!' })
              : res.json(thought)
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          }
        )
      },

    //   Delete a reaction
    deleteReaction({params}, res){
        Thought.findOneAndUpdate(
            {_id: params.thoughtId},
            {$pull: {reactions: {_id : params.reactionId}}},
            { new: true, runValidators: true }
        )
        .then(thoughtData => {
            if (!thoughtData) {
                res.status(404).json({ message: 'Incorrect reaction data!' });
                return;
            }
            res.json(thoughtData);
        })
        .catch(err => res.json(err));
    }
}

module.exports = thoughtController