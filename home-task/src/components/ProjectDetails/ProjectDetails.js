import React from 'react';

//import packages
import {Link} from 'react-router-dom';
import axios from 'axios';


//import the components
import DragDrop from '../DragDrop/DragDrop';

//import styles
import './style.scss';
import goBack from '../../assets/Icon-back-arrow.svg'

class ProjectDetails extends React.Component {

  state = {
    data: '',
    taskList: [],
  }

  getAllTasks = () => {
    axios.get('http://localhost:8080/taskData')
    .then(response => {
      const tasks = response.data.columnOrder.map(columnId => {
        const column = response.data.columns[columnId];
        return  column.taskIds.map(taskId => response.data.tasks[taskId])
      })
      this.setState({
        data: response.data,
        taskList: tasks[0]
      })
    })
  }

  postTasks = () => {
    axios.post('http://localhost:8080/taskData', {
      members: this.state.data.members
    }).then(response => {
      //console.log(response.data)
    })
  }

  sendPoints = (event) => {
   // event.preventDefault();
    console.log("sendPoints function" , this.state.data.members)

    this.setState({
      data: {
        members: this.state.data.members,
      }
    })
  }

  componentDidMount() {
    this.getAllTasks();
    // console.log('component mounts')
    
  }

  componentDidUpdate() {
    this.postTasks();
    
  }

  render() {
    // console.log('data from parent state ,' , this.state.data.members)
    return (
      <>
      <div className="project__head">
        <Link to="/project"><button className="project__head__btn"><img className="project__head__icon" src={goBack} alt=""/></button></Link>
        <div className="project__head__text">
            <h1 className='project__head__title'>Weekly Task</h1>
            <p className='project__head__body'>We will complete seven tasks this week and every memeber should complete at least one task. To get a reward you have to complete at least two task</p>
        </div>        
      </div>
      {/* <div>
        <button>Check Rewards</button>
      </div> */}
      

      <div className="details">
        <h2 className="details__head">Get Details</h2>
        <ul className="details__list">
          {this.state.taskList.map((item) => {
            return (
              <li className="details__item" key={item.id}>
                <h3 className="details__item__title">{item.title}</h3>
                <p className="details__item__description">{item.description}</p>
                {/* <p className="details__item__assigned">Assigned To: {(item.assignedTo[1]) ? `${item.assignedTo[0]} and ${item.assignedTo[1]}` : `${item.assignedTo[0]}`}</p> */}
              </li>
            )
          })}
        </ul>
      </div>

        <DragDrop data={this.state.data} sendPoints={this.sendPoints}/>
      </>
    )
  }
}


export default ProjectDetails;