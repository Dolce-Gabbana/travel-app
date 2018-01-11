import React from 'react';
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom';
import AddNewUser from './addNewUser.js';
import PackingList from './packingList.js';
import Nav from './nav.js';


//Welcome /Home Page
class WelcomePage extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <h1>Welcome to Our Unnamed Travel App</h1>
                <AddNewUser />
                <Nav />

            </div>
        )
    }
}




export default WelcomePage