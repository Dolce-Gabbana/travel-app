import React from 'react';
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom';
import AddNewUser from './addNewUser.js';
<<<<<<< HEAD
import LogIn from './logIn.js';
import PackingList from './packingList.js';
import AddTrips from './addTrips.js';
=======
import PackingList from './packingList.js';
import Nav from './nav.js';
>>>>>>> 23f822f338a4f3eb5e48ead44f8b1f86f7d354d3


//Welcome /Home Page
class WelcomePage extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div>
<<<<<<< HEAD
                <header>
                    <h1>Welcome to Our Unnamed Travel App</h1>
                    <AddNewUser />
                    <LogIn />
                </header>
                <ul>
                    <li>
                        <Link to="/addTrips">Trip Info</Link>
                    </li>

                </ul>

=======
                <h1>Welcome to Our Unnamed Travel App</h1>
                <AddNewUser />
                <Nav />
>>>>>>> 23f822f338a4f3eb5e48ead44f8b1f86f7d354d3

            </div>
        )
    }
}




export default WelcomePage