import React from 'react';

//import routes
import {Link} from 'react-router-dom';

//import components
import CreateProject from './Modal/CreateProject';

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
          <Link to='/project/details'><button>See project</button></Link>
        </div>
      </>
    )
  }
}

export default Project;
