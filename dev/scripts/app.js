import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route, Link, Switch, BrowserHistory
} from 'react-router-dom';
import WelcomePage from './components/welcomePage.js';

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
					</Switch>
				</div>
			</Router>
		)
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
