import React from 'react';

//import routes
import {Link} from 'react-router-dom';
import axios from 'axios';

//import components
import CreateProject from './CreateProject';

//import data
// import projectData from '../../data/projectData';

class Project extends React.Component {

  state = {
    projectData: [{members: []}]
  };

  getProject = () => {
    axios.get('http://localhost:8080/projectData')
      .then(response => {
        this.setState({
          projectData: response.data
        })
      })
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
    console.log(this.state.projectData);
    let title = event.target.title.value;
    let description = event.target.description.value;
    let duration = event.target.duration.value;
    console.log(title, description, duration);
    let postProject = () => {
      axios.post('http://localhost:8080/projectData', {
        title: title,
        description: description,
        duration: duration
      }).then(response => {
        console.log(response.data)
      })
    }
    postProject();
    window.location.reload();

  }

  componentDidMount() {
    this.getProject();
  }

  render() {
    

    return (
      <>
        <CreateProject submitProject={this.submitProject} members={this.state.projectData[0].members} addMember={this.addMember} handleMemberChange={this.handleMemberChange}/>


        {/* <div key={this.state.id}>
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
        </div> */}
        
        {this.state.projectData.map((item, index) => {
          return (
            <div key={index}>
              <h1> Project Name: {item.title} </h1>
              <p> Description: {item.description} </p>
              <p> Duration: {item.duration} </p>
              {/* <p> Members: 
              {item.members.map((member, index) => {
                return (
                  <span key={index}> {member} </span>
                )
              })}
              </p> */}
              <Link to={`/${item.projectId}`} ><button>See project</button></Link>
            </div>
          )
        })} 
        
      </>
    )
  }
}

export default Project;
