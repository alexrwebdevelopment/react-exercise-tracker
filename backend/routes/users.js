// define router
const router = require('express').Router();
// require mongodb user schema
let User = require('../models/user.model');

// when someone goes to /user, get users schema using find(), then it will return a promise
// there either send json with users schema, or if err return err
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// add/save new user to database when go to /add
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
    .then(users => res.json('user added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// export router so we can use it in server page
module.exports = router; 