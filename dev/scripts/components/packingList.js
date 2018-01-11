import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route, Link, Switch, BrowserHistory
} from 'react-router-dom';

class PackingList extends React.Component {
    constructor () {
        super();
    
    
    
    };
    render () {
        return (
            <div>

                <ul className="clothing">clothing</ul>
                <ul className="shoes">shoes</ul>
                <ul className="toiletries">toiletries</ul>
                <ul className="medication">medication</ul>
                <ul className="electronics">electronics</ul>
                <ul className="misc">misc</ul>
            </div>
        )
    }

}
export default PackingList