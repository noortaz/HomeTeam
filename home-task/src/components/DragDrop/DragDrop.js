import React from 'react';

//import styles
import './dragdrop.scss';

// import components
import TaskColumn from './TaskColumn';

//import libraries
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';

// //import data
import data from '../../data/fakeData';


const Container = styled.div`
margin: 8px;
border: 1px solid grey;
border-radius: 8px;
display: flex;
justify-content: space-around;
`;

class DragDrop extends React.Component {


  state = data;

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState(this.props.data);
    }
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

    return (
    <DragDropContext onDragEnd={this.onDragEnd}>
      <Container>
          {this.state.columnOrder.map((columnId) => {
            const column = this.state.columns[columnId]
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])
            const memberPoints = tasks.map(item => (item.assignedTo) ? this.state.members[item.assignedTo[0]] : null)
            //console.log(memberPoints);

            return <TaskColumn key={column.id} column={column} tasks={tasks} points={memberPoints} members={this.state.members}/>
          })}
      </Container>
    </DragDropContext> 	
    )
	}
}

export default DragDrop;
