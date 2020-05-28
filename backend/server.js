const express = require('express'),
      cors    = require('cors'),
      mongoose = require('mongoose');

// put variable in dot env file (this needs to be above the stuff below)
require('dotenv').config();

// server stuff
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// mongodb atlas stuff
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// establish connection to mongodb database
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB Database connection established succesfully');
});

// require and use route files
const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

// if someone goes to /exercises or /users, it will load that particular router (this is like a middleware so we can just
// add stuff into this server page more easily readable/accessible/modular)
app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);

// starts server
app.listen(port, () => {
    console.log('server is running on port: 5000');
});