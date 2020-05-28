// import react and component from react
import React, { Component } from 'react';
// import link from react router dom that allows us to link to different routee
import { Link } from 'react-router-dom';
// import css stylesheet
import '../App.css';

// components all look like this
export default class Navbar extends Component {
    // have to render a return statement
    render () {
        return (
            <nav>
                <div className="container">
                    <div className = "logo">
                    <h1><Link to="/" className="">Excercise Tracker</Link></h1>
                    </div>
                    <div className="menu">
                        <ul>
                            <li>
                                <Link to="/" className="nav-link">Exercises</Link>
                            </li>
                            <li>
                                <Link to="/create" className="nav-link">Create Exercise Log</Link>
                            </li>
                            <li>
                                <Link to="/user" className="nav-link">Create User</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};