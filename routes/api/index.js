const router = require('express').Router();
const userRoutes = require('./user-routes');

//users route
router.use('/users', userRoutes);

//export router to server.js
module.exports = router;