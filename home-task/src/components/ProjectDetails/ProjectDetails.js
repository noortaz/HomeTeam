import React from 'react';

//import packages
import {Link} from 'react-router-dom';
import axios from 'axios';


//import the components
import DragDrop from '../DragDrop/DragDrop';
//
import NewDrag from '../NewDrag/NewDrag';


class ProjectDetails extends React.Component {

  state = {
    taskList: []
  }

  getAllTasks = () => {
    axios.get('http://localhost:8080/taskData')
    .then(response => {
      console.log(response.data);
      this.setState({
        taskList: response.data
      })
    })
  }

  componentDidMount() {
    this.getAllTasks();
  }


  render() {

    console.log(this.state.taskList);
    return (
      <>
      <div>
          <Link to="/project"><button>Go back</button></Link>
        <h1>Weekly Tasks</h1>
        <p>We will complete seven tasks this week and every memeber should complete at least one task. To get a reward you have to complete at least two task</p>
      </div>
      <div>
        <button>Check Rewards</button>
      </div>
      

      <div>
        <h2>All tasks for this project</h2>
        <ul>
          {this.state.taskList.map((item) => {
            return (
              <li key={item.taskid}>
                <p>Title: {item.title}</p>
                <p>Description: {item.title}</p>
                <p>Assigned To: {(item.assignedTo[1]) ? `${item.assignedTo[0]} and ${item.assignedTo[1]}` : `${item.assignedTo[0]}`}</p>
              </li>
            )
          })}
        </ul>
      </div>

      <DragDrop />
      </>
    )
  }
}


export default ProjectDetails;