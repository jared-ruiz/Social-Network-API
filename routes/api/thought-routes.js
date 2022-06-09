//express functionality 
const router = require('express').Router();

//import thought controller functionality
const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)
    
router
    .route('/:id')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)

router
    .route('/:thoughtId/reactions')

    //adds reaction to thought's reaction array
    .put(addReaction)

    //delete reaction from thoughts array within model
    .delete(deleteReaction);

//export to routes index.js
module.exports = router;