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
                        <li>
                            <Link to="/">
                                <i classlist="fa fa-list" aria-hidden="true"></i>
                                <p>Welcome Page</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/packingList">
                                <i classlist="fa fa-list" aria-hidden="true"></i>
                                <p>Packing List</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav