import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class Nav extends React.Component {
    constructor() {
        super();
    }
    render() {
        <div className="nav">
            <div className="logo">
                <h2>TripPlanner</h2>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">
                            <i classList="fa fa-list" aria-hidden="true"></i>
                            <p>Packing List</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i classList="fa fa-calendar" aria-hidden="true"></i>
                            <p>Itinerary</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i classList="fa fa-usd" aria-hidden="true"></i>
                            <p>Budget</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i classList="fa fa-book" aria-hidden="true"></i>
                            <p>Journal</p>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i classList="fa fa-undo" aria-hidden="true"></i>
                            <p>Past Trips</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    }

}

export default Nav