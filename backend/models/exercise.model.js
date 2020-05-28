// CREATE MONGOOSE SCHEMA FOR USERS

// require mongoose
const mongoose = require('mongoose');

// get a schema from mongoose set to schema variable
const Schema = mongoose.Schema;

// create new userSchema
const exerciseSchema = new Schema({
    username: {type: String, required: true },
    description: {type: String, required: true },
    duration: {type: Number, required: true },
    date: {type: Date, required: true }
});

// put inside Exercise model and export it (always capatilize schema and schema variables)
const Exercise =mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;