import React from 'react';
import Modal from 'react-modal';
// import styled from 'styled-components';


// const TaskModal = styled.div`

// `;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '28rem',
    height: '28rem',
    backgroundColor: 'lightpink',
    borderRadius: '2rem',
    border: '1px solid lightpink',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
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
    const title = this.subtitle.style;
    title.color = '#323232';    
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

          <button className='btn-task' onClick={this.openModal}>Add a new task</button>

          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 ref={subtitle => this.subtitle = subtitle}>Add new task</h2>

            <form className='task-form' onSubmit={this.props.submitTask}>

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

              <div className='btn-styles'>
                <button type='button' onClick={this.closeModal}>Go back</button>
                <button type="Submit" >Submit</button>
                
              </div>
              

            </form>

          </Modal>
        </div>
      </>
    )
  }
}

export default AddTask;