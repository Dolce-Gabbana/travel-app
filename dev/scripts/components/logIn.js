import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class LogIn extends React.Component {
    constructor (){
        super(); 
        this.state = {
            modalIsOpen: false,
            userEmail: '',
            userPassword: '',

        }
        //binding
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit (event) {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.userEmail,this.state.userPassword)
            .then((data) => {
                console.log(data);
            })
            .catch ((error) => {
            alert(error.message)
        })    
    }

    // Modal controls
    openModal() {
        this.setState({ modalIsOpen: true });
    }
    closeModal() {
        this.setState({ modalIsOpen: false });
    }   
    render() {
        return (
        <div>
            {/* Button below activates Modal Popup */}
            <button onClick={this.openModal} className='logIn'>Log In</button>
            <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
            >
                <h2>Log In Form</h2>
                <button onClick={this.closeModal}>close</button>
                <form action="" onSubmit={this.handleSubmit} className="modalForm" >
                    <h2>Your Info:</h2>

                    <label htmlFor="userEmail">Email:</label>
                    <input type="text" id="userEmail" name="userEmail" placeholder="Email" onChange={this.handleChange} value={this.state.userEmail} required />

                    <label htmlFor="userPassword">Password:</label>
                    <input type="password" id="userPassword" name="userPassword" onChange={this.handleChange} value={this.state.userPassword} placeholder="Password" required />

                    <input type="submit" value="Log In" className="submitButton" />
                    </form>
            </Modal>
        </div>
        )
    }
}
export default LogIn