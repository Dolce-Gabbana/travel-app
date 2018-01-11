import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route, Link, Switch, BrowserHistory
} from 'react-router-dom';
import Modal from 'react-modal';
import WelcomePage from './components/welcomePage.js';
<<<<<<< HEAD
import AddNewUser from './components/addNewUser.js';
import LogIn from './components/logIn.js';
import PackingList from './components/packingList.js';
import AddTrips from './components/addTrips.js'
=======
import PackingList from './components/packingList.js';
import Nav from './components/nav.js';
>>>>>>> 23f822f338a4f3eb5e48ead44f8b1f86f7d354d3

//The Main Event 
// Initialize Firebase
var config = {
apiKey: "AIzaSyCbxJdKcjXziruqH-BIGpSneqMW3OOF_fc",
authDomain: "travel-app-52d0d.firebaseapp.com",
databaseURL: "https://travel-app-52d0d.firebaseio.com",
projectId: "travel-app-52d0d",
storageBucket: "",
messagingSenderId: "395512975538"
};
firebase.initializeApp(config);


class App extends React.Component {
    constructor(){
		super();
	}
    render() {
    	return (
			<Router history={BrowserHistory}>
				<div>
					<Switch>
						<Route exact path='/' component={WelcomePage}></Route>
						<Route path='/' component={AddTrips}></Route>
						
						<Route path='/packingList' component={PackingList}></Route>
					</Switch>
				</div>
			</Router>
		)
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
