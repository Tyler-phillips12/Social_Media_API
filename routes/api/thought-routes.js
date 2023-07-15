const router = require('express').Router();

// establish requests
const {
    createThought,
    getThoughts,
    getSingleThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

// Get all Thoughts
router.route('/').get(getThoughts).post(createThought);

// requests pertaining to a single thought by id
router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)

// requests pertaining to reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction);

// request to delete reactions by id
router 
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction)

    module.exports = router;