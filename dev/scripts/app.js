import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route, Link, Switch, BrowserHistory
} from 'react-router-dom';
import WelcomePage from './components/welcomePage.js';

//The Main Event 
//Place Holder for Firebase

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
