import React from 'react';
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom';
import AddNewUser from './addNewUser.js';

class WelcomePage extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div>
                <h1>Welcome to Our Unnamed Travel App</h1>
                <AddNewUser />

            </div>
        )
    }
}




export default WelcomePage