// CREATE MONGOOSE SCHEMA FOR USERS

// require mongoose
const mongoose = require('mongoose');

// get a schema from mongoose set to schema variable
const Schema = mongoose.Schema;

// create new userSchema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

// put inside User model and export it
const User =mongoose.model('User', userSchema);

module.exports = User;