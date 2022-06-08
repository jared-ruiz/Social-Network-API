//express functionality
const router = require('express').Router();

//import user controller api functionality
const {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

//set up POST routes
router
    //(/api/users/~)
    .route('/')
    .get(getAllUsers)
    .post(createUser)

//set up GET, PUT, and DELETE 
router
    //(/api/users/~)
    .route('/:id')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser)

//add friend to friend array (/api/users/~)
router.route('/:userId/friends/:friendId').put(addFriend);

//delete friend from friend array (/api/users/~)
router.route('/:userId/friends/:friendId').delete(removeFriend);

//export to routes index.js
module.exports = router;