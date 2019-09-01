import React from 'react';

//import routes
import {Link} from 'react-router-dom';
import axios from 'axios';

//import components
import CreateProject from './CreateProject';


class Project extends React.Component {

  state = {
    projectData: []
  };

  getProject = () => {
    axios.get('http://localhost:8080/projectData')
    .then(response => {
      this.setState({
        projectData: response.data
      })
    })
  }

  submitProject = (event) => {
    event.preventDefault();

    let title = event.target.title.value;
    let description = event.target.description.value;
    let duration = event.target.duration.value;
    console.log(title, description, duration);

    let postProject = () => {
      axios.post('http://localhost:8080/projectData', {
        title: title,
        description: description,
        duration: duration
      })
    }

    postProject();
    window.location.reload();
  }

  componentDidMount() {
    this.getProject();
  }

  render() {

    if (this.state.projectData !== []) {
      return (
        <>
          <CreateProject submitProject={this.submitProject} />

          {this.state.projectData.map((item, index) => {
            return (
              <div key={index}>
                <h1> Project Name: {item.title} </h1>
                <p> Description: {item.description} </p>
                <p> Duration: {item.duration} </p>
                <Link to={`/${item.projectId}`} ><button>See project</button></Link>
              </div>
            )
          })}
        </>
      )
    } else {
      return <h1>Loading...</h1>
    }
  }
}

export default Project;
