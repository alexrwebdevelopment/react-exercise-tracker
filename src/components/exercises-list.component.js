import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

//functional react component. lack of state and life cycle methods. if all you need to do is accept props and return jsx use this type of component
const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0, 10)}</td>
        <td>
            <Link to = {"/edit/" + props.exercise._id}>edit</Link> | <button href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</button>
        </td>

    </tr>
)

// class component
export default class ExercisesList extends Component {
    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);
        
        this.state = {exercises: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/exercises/')
        .then(response => {
            this.setState({exercises: response.data})
        })
        .catch((error) => {
            console.log(error);
        })
    }

    deleteExercise(id) {
        // delete particular exercise of the one clicked
        axios.delete('http://localhost:5000/exercises/' + id)
        .then (res => console.log(res.data));
        // only return/show the exercises whos id does not match the exercise id deleted
        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }

    exerciseList() {
        return this.state.exercises.map(currentexercise => {
            return <Exercise exercise = {currentexercise} deleteExercise={this.deleteExercise} key = {currentexercise._id}/>;
        })
    }
    render () {
        return (
            <div id="exercise-list">
                <h3>Logged Exercises</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.exerciseList() }
                    </tbody>
                </table>
            </div>
        );
    }
};