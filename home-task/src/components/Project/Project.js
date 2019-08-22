import React from 'react';
import CreateProject from './Modal/CreateProject';
import DragDrop from '../DragDrop/droppable/DragDrop';

class Project extends React.Component {

  state = {
    title: '',
    duration: '',
    description: '',
    //taskList: ['take our dog for a walk']
  }

  submitProject = (event) => {
    event.preventDefault();
    console.dir(event.target);
    this.setState({
      title: event.target.elements[0].value,
      duration: event.target.elements[3].value,
      //taskList: event.target.elements[2].value
    })

  }

  render() {
    return (
      <>
        <CreateProject submitProject={this.submitProject}/>
        <div>
          <h1> New Project: {this.state.title} </h1>
          <p> Description: {this.state.description} </p>
          <p> Duration: {this.state.duration} </p>
          {/* <p>task lists : {this.state.taskList.map((item) => {
            return (
              <p>Task-1 {item}</p>
            )
          })}</p> */}
        </div>
          {/* <KanbanBoard/> */}
        <DragDrop />
      </>
    )
  }
}

export default Project;
