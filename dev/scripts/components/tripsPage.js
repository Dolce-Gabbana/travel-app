import React from 'react';
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom';
import AddNewUser from './addNewUser.js';
import LogIn from './logIn.js';
import PackingList from './packingList.js';
import AddTrips from './addTrips.js';
import Nav from './nav.js';

class TripsPage extends React.Component {
    constructor (){
        super ();
    }
//I don't know why add trips button is not showing but I can add it to the welcome page???
    render (){
        return(
            <div>
                <AddTrips />
            </div>
        )
    }



}
export default TripsPage