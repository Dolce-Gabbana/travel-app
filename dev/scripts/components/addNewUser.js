import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


// New User Modal
// Opens when we have a new customer

class AddNewUser extends React.Component {
    constructor(){
        super();
        this.state = {
            modalIsOpen: false,
            userName: '',
            userEmail: '',
            userPassword: '',
            passwordMatch: ''

        };


        //binding
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e){
        console.log('clicked');
    };

    // save text input value in state
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    




    // Modal controls
    openModal() {
        this.setState({ modalIsOpen: true });
    }
    closeModal() {
        this.setState({ modalIsOpen: false });
    }
    //This is what we see on the page
    render() {
        return (
            <div>
                {/* Button below activates Modal Popup */}
                <button onClick={this.openModal} className='addNewUser'>Add New User</button>
                {/* Modal displays a form for new users to fill out */}
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
            
                    >
                    <h2>New User Form</h2>
                    <button onClick={this.closeModal}>close</button>
                    <form action="" onSubmit={this.handleSubmit} className="modalForm" >
                        <h2>Your Info:</h2>
                        <label htmlFor="userName" className="hiddenLabel">Name:</label>
                        <input type="text" id="userName" name="userName" placeholder="Name" onChange={this.handleChange} value={this.state.userName} required/>

                        <label htmlFor="userEmail" className="hiddenLabel">Email:</label>
                        <input type="text" id="userEmail" name="userEmail" placeholder="Email" onChange={this.handleChange} value={this.state.userEmail} required/>

                        <label htmlFor="userPassword" className="hiddenLabel">Password:</label>
                        <input type="password" id="userPassword" name="userPassword" onChange={this.handleChange} value={this.state.userPassword} placeholder="Password" required />

                        <label htmlFor="passwordMatch" className="hiddenLabel">Confirm Password:</label>
                        <input type="password" id="passwordMatch" name="passwordMatch" onChange={this.handleChange} value={this.state.passwordMatch} placeholder="Confirm Password" required />

                        <input type="submit" value="addUser" className="submitButton" />
                    </form>

                </Modal>
            </div>
        )
    }

}

export default AddNewUser