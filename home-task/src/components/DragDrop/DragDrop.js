import React from 'react';

//import styles
import './dragdrop.scss';

// import components
import TaskColumn from './TaskColumn';

//import libraries
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import axios from 'axios';



const Container = styled.div`
margin: 2rem 10rem;
// border: 2px solid grey;
// border-radius: 8px;
display: flex;
justify-content: space-around;
`;

class DragDrop extends React.Component {


  state = {};

  getAllTasks = () => {
    axios.get('http://localhost:8080/taskData')
      .then(response => {
        const data = response.data
        this.setState(data);
      })
  }

  sendPoints = (event) => {
    this.setState({
      data: {
        members: this.state.members,
      }
    })
  }

  componentDidMount() {
    this.getAllTasks();
  }
  
  
  onDragEnd = result => {
    const {destination, source, draggableId} = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId &&
        destination.index === source.index) {
        return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = { ...start, taskIds: newTaskIds };

      const newState = { ...this.state, columns: { ...this.state.columns, [newColumn.id]: newColumn } }

      this.setState(newState);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {...start, taskIds: startTaskIds};

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = { ...finish, taskIds: finishTaskIds };

    const newState = { ...this.state, columns: { ...this.state.columns, [newStart.id]: newStart, [newFinish.id]: newFinish } }

    this.setState(newState);
  }

	render() {

    if (this.state.columnOrder) {
      return (
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Container>
            {this.state.columnOrder.filter(Boolean).map((columnId) => {
              const column = this.state.columns[columnId]
              const tasks = column.taskIds.filter(Boolean).map(taskId => this.state.tasks[taskId])

              let memberPoints = tasks
              .filter(Boolean)
              .map(item => (item.assignedTo) ? this.state.members[item.assignedTo[0]] : null)

              return <TaskColumn 
              key={column.id} 
              column={column} 
              tasks={tasks} 
              points={memberPoints} 
              members={this.state.members} 
              sendPoints={this.props.sendPoints} />
            })}
          </Container>
        </DragDropContext>
      )
    } else {
      return <h1>Loading..</h1>
    }
    
	}
}

export default DragDrop;
