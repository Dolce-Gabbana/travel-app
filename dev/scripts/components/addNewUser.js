import React from 'react';
import ReactDOM from 'react-dom';

// New User Modal
// Opens when we have a new customer

class AddNewUser extends React.Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div>
                <button className='addNewUser' >Add New User</button>
            </div>
        )
    }

}

export default AddNewUser