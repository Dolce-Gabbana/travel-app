import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class AddTrips extends React.Component {
    constructor (){
        super ();
        this.state = {
            modalIsOpen: false,
            tripDate: '',
            destination: ''
            
        }
        //binding
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }
    handleChange(event) {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        const tripInfo = {
            tripDate: this.state.tripDate,
            destination: this.state.destination,
        };
        this.setState({
            tripDate: '',
            destination: ''
        });
        const dbRef = firebase.database().ref();
        dbRef.push(tripInfo);
    }
    // Modal controls
    openModal() {
        this.setState({ modalIsOpen: true });
    }
    closeModal() {
        this.setState({ modalIsOpen: false });
    }   


    render () {
        return (
            <div>
                {/* Button below activates Modal Popup */}
                <button onClick={this.openModal} className='addTrip'>Add Trip</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                >

                    <h2>Add Trip Form</h2>
                    <button onClick={this.closeModal}>close</button>
                    <form action="" onSubmit={this.handleSubmit} className="addTripForm" >
                        <h2>Trip Info:</h2>

                        <label htmlFor="tripDate">Trip Date:</label>
                        <input type="date" id="tripDate" name="tripDate"  onChange={this.handleChange} value={this.state.tripDate} required />

                        <label htmlFor="destination">Destination:</label>
                        <input type="text" id="destination" name="destination" onChange={this.handleChange} value={this.state.destination} required />
                    
                    </form>
                </Modal>
            </div>
        )
    }
}

export default AddTrips