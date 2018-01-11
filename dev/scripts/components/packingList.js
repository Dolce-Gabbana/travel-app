import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
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
=======
import Modal from 'react-modal';
import Nav from './nav.js';

class PackingListForm extends React.Component {
    constructor() {
        super();
        this.state = {
            currentItem: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            currentItem: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.submitForm(this.state.currentItem);
        this.setState({
            currentItem: ''
        })
    }
    render() {
        return(
            <form action="" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.currentItem} />
                <button type="submit">Add Item</button>
            </form>
        )
    }
}


class CategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: `${this.props.category}`,
            listItems: []
        }
        this.addListItem = this.addListItem.bind(this);
    }

    addListItem(listItem) {
        // clone the current state of our listItems into a new array
        const newState = Array.from(this.state.listItems);
        // add the new listItems to the cloned array
        newState.push(listItem);
        // update the state
        this.setState({
            listItems: newState
        })
    }
    render() {
        return(
            <div>
                <h2>{this.props.category}</h2>
                <PackingListForm submitForm={this.addListItem} />
                <ul>
                    {this.state.listItems.map((listItem) => {
                        console.log(listItem);
                        return <ListItem key={listItem} item={listItem} />
                    })}
                </ul>
            </div>
        )
    }
}

const ListItem = (props) => {
    return (
        <li>{props.item}</li>
    )
}

class displayListItem extends React.Component {
    constructor(props) {
        super();
    }
    return() {
        render (
            <li>{props.item}</li>
        )
    }
}

class PackingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category1: "Clothes",
            category2: "Shoes & Accessories",
            category3: "Toiletries",
            category4: "Electronics",
            category4: "Miscellaneous"
        }
    }
    render() {
        return(
            <section className="PackingList">
                <Nav />
                <div className="wrapper">
                    <CategoryList category={this.state.category1} />
                    <CategoryList category={this.state.category2} />
                    <CategoryList category={this.state.category3} />
                    <CategoryList category={this.state.category4} />
                </div>
            </section>
        )
    }
}

export default PackingList;

>>>>>>> 23f822f338a4f3eb5e48ead44f8b1f86f7d354d3
