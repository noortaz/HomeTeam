import React from 'react';
import Modal from 'react-modal';

import congo from '../../assets/fam-3.jpg';



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

class Congratulations extends React.Component {

  state = {
    modalIsOpen: false,
  };

  openModal = () => {
    this.setState({
      modalIsOpen: true
    });
  }

  afterOpenModal = () => {
    this.subtitle.style.color = '#f00';
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
    });
  }



  render() {

    return (
      <>
        <div>
          <button onClick={this.openModal}>Congratulations!!</button>

          <Modal
            isOpen={this.modalIsOpen}

            onRequestClose={this.closeModal}

            contentLabel="Example Modal"
          >
            <h2 ref={subtitle => this.subtitle = subtitle}>Congratulations!!</h2>
            <img src={congo} alt=""/>
          </Modal>
        </div>
      </>
    )
  }
}

export default Congratulations;