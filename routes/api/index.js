const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

//users route
router.use('/users', userRoutes);
router.use('./thoughts', thoughtRoutes);

//export router to server.js
module.exports = router;