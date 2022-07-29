const router = require('express').Router();
const {
    // import controller methods here
    getAllUsers,
    getUserById,
    postNewUser,
    postNewFriend,
    putUserById,
    deleteUserById,
    deleteExistingFriend
} = require('../../controllers/user-controller.js');

// ***********
// USER ROUTES
// ***********

// /api/users
router
    .route('/')
    .get(getAllUsers) // getAllUsers
    .post(postNewUser); // postNewUser

// /api/users/:id
router
    .route('/:id')
    .get(getUserById) // getUserById
    .put(putUserById) // putUserById
    .delete(deleteUserById); // deleteUserById

// /api/users/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(postNewFriend) // postNewFriend
    .delete(deleteExistingFriend); // deleteExistingFriend

// REMOVE USER'S ASSOCIATED THOUGHTS WHEN DELETED (BONUS)
module.exports = router;