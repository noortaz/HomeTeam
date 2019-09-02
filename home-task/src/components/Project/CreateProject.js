import React from 'react';
import Modal from 'react-modal';

//import style
import './project.scss';


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

class CreateProject extends React.Component {

  state = {
    modalIsOpen: false,
    tasks: []
  };

  openModal = () => {
    this.setState({ 
      modalIsOpen: true 
    });
  }

  afterOpenModal = () => {
    this.subtitle.style.color = '#323232';
  }

  closeModal = () => {
    this.setState({ 
      modalIsOpen: false,
      tasks: []
    });
  }

  render() {

    return (
      <>
        <button onClick={this.openModal} className='create-btn'>Create new project</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>Create Your Project</h2>
          
          <form className='project-form' onSubmit={this.props.submitProject}>

            <div>
              <label>What's the name of your project</label>
              <input type="text" name="title"/>
            </div>

            <div>
              <label>Give a description</label>
              <input type="text" name="description" />
            </div>

            <div>
              <label>How long should it take?</label>
              <input type="text" name="duration" />
            </div>

            <div className='btn-styles'>
              <button type='button' onClick={this.closeModal}>Go back</button>
              <button type="Submit" >Submit</button>
            </div>

          </form>

        </Modal>
      </>
    )
  }
}

export default CreateProject;



// {/* <div>
                
//     {this.state.tasks.map((task, index) => {
//       return (
//         <div key={index}>
//           <input id={index} name="taskList" onChange={this.handleTaskChange}/>
//         </div>
//       )
//     })}

//     <button type='button' onClick={this.addTask}>Add a task</button>
    
//   </div>

  

//   <div>
//     <button type='button' onClick={this.props.addMember}>Add member</button>
//     {this.props.members.map((member, index) => {
//       return (
//         <div key={index}>
//           <input id={index} name="members" onChange={this.props.handleMemberChange}/>
//         </div>
//       )
//     })}
// </div> */}