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

class CreateProject extends React.Component {

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
      modalIsOpen: false 
    });
  }

  

  render() {
    return (
      <>
        <div>

          <button onClick={this.openModal}>Create new project</button>

          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 ref={subtitle => this.subtitle = subtitle}>Create Your Project</h2>
            
            <form onSubmit={this.props.submitProject}>

              <div>
                <label>Name your project</label>
                <input type="text" name="title"/>
              </div>

              <div>
                <label>Email</label>
                <input type="email"/>
              </div>

              <div>
                <label>Add a task</label>
                <input type="task" name="tasklist"/>
              </div>

              <div>
                <label>Duration</label>
                <select>
                  <option>One week</option>
                  <option>Two week</option>
                  <option>A month</option>
                </select>
              </div>

              <button type="Submit">Submit</button>
              <button onClick={this.closeModal}>close</button>

            </form>

          </Modal>
        </div>
      </>
    )
  }
}

export default CreateProject;