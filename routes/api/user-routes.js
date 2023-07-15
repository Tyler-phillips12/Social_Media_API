const router = require('express').Router();

// establish requests
const {
    createUser,
    getUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController');

// get all users
router.route('/').get(getUsers).post(createUser);

// requests pertaining to a single user by ID
router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser)

// requests pertaining to a users friendslist
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend)

    module.exports = router;