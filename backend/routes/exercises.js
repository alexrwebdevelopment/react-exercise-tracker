// define router
const router = require('express').Router();
// require mongodb exercise schema
let Exercise = require('../models/exercise.model');

// when someone goes to /exercise, get exercise schema using find(), then it will return a promise
// there either send json with exercise schema, or if err return err
router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises)) 
        .catch(err => res.status(400).json('Error: ' + err));
});

// add/save new exercise to database when go to /add
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    });

    newExercise.save()
    .then(users => res.json('exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// find and show particular exercise (found by mongodb ID)
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err=>res.status(400).json('Error: '+ err));
});

// delete particular exercise 
router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// update particular exercise 
router.route('/update/:id').post((req, res) => {
    Exercise.findByIdAndUpdate(req.params.id)
    .then(exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date(req.body.username);

        exercise.save()
        .then(() => res.json('exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
});
// export router so we can use it in server page
module.exports = router; 