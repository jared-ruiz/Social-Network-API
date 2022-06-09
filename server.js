//require modules
const mongoose = require('mongoose');
const express = require('express');

//general express set up
const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//utilize established api routes (create them and export to use)
app.use(require('./routes'));

//mongoose connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social-network-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//server listener
//to drop db use this: mongo <dbname> --eval "db.dropDatabase()"
app.listen(PORT, () => console.log(`You are successfully connected to localhost: ${PORT}`));