import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {
    BrowserRouter as Router,
    Route, Link, Switch
} from 'react-router-dom';
import PackingList from './packingList.js';


class Nav extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="nav">
                <div className="logo">
                    <h2>TripPlanner</h2>
                </div>
                <nav>
                    <ul>
                        <Link to="/">
                            <i classlist="fa fa-list" aria-hidden="true"></i>
                            <p>Welcome Page</p>
                        </Link>
                        <Link to="/packingList">
                            <i classlist="fa fa-list" aria-hidden="true"></i>
                            <p>Packing List</p>
                        </Link>
                        {/* <li>
                            <a href="#">
                                <i classlist="fa fa-list" aria-hidden="true"></i>
                                <p>Packing List</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i classlist="fa fa-calendar" aria-hidden="true"></i>
                                <p>Itinerary</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i classlist="fa fa-usd" aria-hidden="true"></i>
                                <p>Budget</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i classlist="fa fa-book" aria-hidden="true"></i>
                                <p>Journal</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i classlist="fa fa-undo" aria-hidden="true"></i>
                                <p>Past Trips</p>
                            </a>
                        </li> */}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav