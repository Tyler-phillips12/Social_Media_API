const router = require('express').Router();

// Import the controller functions
const {
    createUser,
    getUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController');

// Define the routes
router.route('/').get(getUsers).post(createUser);

// Requests pertaining to a single user by ID
router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// Requests pertaining to a user's friends list
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

module.exports = router;