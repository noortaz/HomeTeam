import React from 'react';
import Modal from 'react-modal';

//import data
// import data from '../../../data/taskData';


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
    tasks: []
  };

  addTask = () => {
    this.setState({
      tasks: [...this.state.tasks, ''],
    })
  }

  handleTaskChange = (event) => {
    const newstate = {...this.state}
    newstate.tasks[event.target.id] = event.target.value;
    this.setState({...newstate});
  }

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
      tasks: []
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
                <label>Give a description</label>
                <input type="text" name="description" />
              </div>

              <div>
                <label>Email</label>
                <input type="email" name="email"/>
              </div>

              <div>
                
                {this.state.tasks.map((task, index) => {
                  return (
                    <div key={index}>
                      <input id={index} name="taskList" onChange={this.handleTaskChange}/>
                    </div>
                  )
                })}

                <button type='button' onClick={this.addTask}>Add a task</button>
                
              </div>

              

              <div>
                <button type='button' onClick={this.props.addMember}>Add member</button>
                {this.props.members.map((member, index) => {
                  return (
                    <div key={index}>
                      <input id={index} name="members" onChange={this.props.handleMemberChange}/>
                    </div>
                  )
                })}
              </div>

              <div>
                <label>Duration</label>
                <select name="duration">
                  <option>One week</option>
                  <option>Two week</option>
                  <option>A month</option>
                </select>
              </div>

              <button type="Submit">Submit</button>
              <button type='button' onClick={this.closeModal}>close</button>

            </form>

          </Modal>
        </div>
      </>
    )
  }
}

export default CreateProject;