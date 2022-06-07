//import model User
const { User } = require('../models');

//multiple populate array for getALL
const populatePaths = [{path: 'thoughts', select: '-__v'}, { path: 'friends', select: '-__v'}];


const userController = {
    //get all users
    getAllUsers(req, res) {
        User.find({})
        .populate(populatePaths)
        .select('-__v')
        .sort({ _id: -1 })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.json(err);
        })
    },
    
    //get single user
    getOneUser({params}, res) {
        User.findOne({ _id: params.id })
        .populate(populatePaths)
        .then(dbUserData => {
            if (!dbUserData) {
                res.json(404).json({ message: 'No user found with that id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },

    //post a new user
    createUser({body}, res) {
        //body contains email and username
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            res.status(400).json(err);
        })
    },

    //put a existing user
    updateUser({params}, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
        .then(dbUserData => {
            if (!dbUserData) {
                res.json(494).json({ message: 'No user found with that id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            res.status(400).json(err);
        })
    },

    //delete user (extra: delete user's thoughts when deleted)
    deleteUser({params}, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(dbUserData => {
            if (!dbUserData) {
                res.json(404).json({ message: 'No user found with that id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            res.status(400).json(err);
        })
    }
}

module.exports = userController;