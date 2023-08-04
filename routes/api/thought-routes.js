const router = require('express').Router();

// Import the controller functions
const {
    createThought,
    getThoughts,
    getSingleThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

// Define the routes
router.route('/').get(getThoughts).post(createThought);

// Requests pertaining to a single thought by id
router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

// Requests pertaining to reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction);

// Request to delete reactions by id
router 
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;