//express functionality
const router = require('express').Router();

//import user controller api functionality
const {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

//set up POST routes
router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

//set up GET, PUT, and DELETE 
router
    .route('/:id')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser)

//export to routes index.js
module.exports = router;