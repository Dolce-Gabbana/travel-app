import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

// New User Modal
// Opens when we have a new customer

class AddNewUser extends React.Component {
    constructor(){
        super();
        this.state = {
            modalIsOpen: false
        };

        //binding
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
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
                    <h2 ref={subtitle => this.subtitle = subtitle}>New User Form</h2>
                    <button onClick={this.closeModal}>close</button>
                    <form>
                        <h2>Your Info:</h2>
                        <label htmlFor="userName" className="hiddenLabel">Name:</label>
                        <input type="text" id="userName" name="name" placeholder="Name" required/>

                        <label htmlFor="userEmail" className="hiddenLabel">Email:</label>
                        <input type="text" id="userEmail" name="email" placeholder="Email" required/>

                        <label htmlFor="userPassword" className="hiddenLabel">Password:</label>
                        <input type="password" id="userPassword" name="password" laceholder="Password" required />

                        <label htmlFor="passwordMatch" className="hiddenLabel">Confirm Password:</label>
                        <input type="password" id="passwordMatch" name="passwordMatch" placeholder="Confirm Password" required />
                    </form>

                </Modal>
            </div>
        )
    }

}

export default AddNewUser