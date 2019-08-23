import React from 'react';

//import routes
import {Link} from 'react-router-dom';

//import components
import CreateProject from './Modal/CreateProject';

//import data
import projectData from '../../data/projectData';

class Project extends React.Component {

  state = {
    id: 'a20',
    title: '',
    description: '',
    duration: '',
    members: [],
    tasks: []
  }

  addMember = () => {
    this.setState({
      members: [...this.state.members, '']
    })
  }

  handleMemberChange = (event) => {
    const newstate = { ...this.state }
    newstate.members[event.target.id] = event.target.value;
    this.setState({ ...newstate });
  }


  submitProject = (event) => {
    event.preventDefault();
    console.dir(event.target);
    console.log(this.state.members)
    this.setState({
      title: event.target.title.value,
      description: event.target.description.value,
      duration: event.target.duration.value,
      members: this.state.members
    })
  }

  render() {

    return (
      <>
        <CreateProject submitProject={this.submitProject} members={this.state.members} addMember={this.addMember} handleMemberChange={this.handleMemberChange}/>


        <div key={this.state.id}>
          <h1> Project Name: {this.state.title} </h1>
          <p> Description: {this.state.description} </p>
          <p> Duration: {this.state.duration} </p>
          <p> Members:
            {this.state.members.map((member, index) => {
              return (
                <span key={index}> {member} </span>
              )
            })}
          </p>
          <Link to='/project/details'><button>See project</button></Link>
        </div>
        
        {projectData.map((item) => {
          return (
            <div key={item.id}>
              <h1> Project Name: {item.title} </h1>
              <p> Description: {item.description} </p>
              <p> Duration: {item.duration} </p>
              <p> Members: 
              {item.members.map((member, index) => {
                return (
                  <span key={index}> {member} </span>
                )
              })}
              </p>
              <Link to='/project/details'><button>See project</button></Link>
            </div>
          )
        })} 
        
      </>
    )
  }
}

export default Project;
