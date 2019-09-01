import React from 'react';
import Modal from 'react-modal';



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

class AddTask extends React.Component {

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

          <button onClick={this.openModal}>Add Task</button>

          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 ref={subtitle => this.subtitle = subtitle}>Add new task</h2>

            <form onSubmit={this.props.submitTask}>

              <div>
                <label>Your task number</label>
                <input type="number" name="taskNumber" />
              </div>

              <div>
                <label>What to do?</label>
                <input type="text" name="title" />
              </div>

              <div>
                <label>How to do it?</label>
                <input type="text" name="description" />
              </div>

              <div>
                <label>Who will do it?</label>
                <input type="person" name="person" />
              </div>

              <button type="Submit" >Submit</button>
              <button type='button' onClick={this.closeModal}>close</button>

            </form>

          </Modal>
        </div>
      </>
    )
  }
}

export default AddTask;