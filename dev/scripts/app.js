import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route, Link, Switch, BrowserHistory
} from 'react-router-dom';
import Modal from 'react-modal';
import WelcomePage from './components/welcomePage.js';
import PackingList from './components/packingList.js';
import Nav from './components/nav.js';

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
						<Route path='/packingList' component={PackingList}></Route>
					</Switch>
				</div>
			</Router>
		)
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
