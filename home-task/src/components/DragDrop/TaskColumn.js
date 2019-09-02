import React from 'react';

//import libraries
import { Droppable} from 'react-beautiful-dnd';
import styled from 'styled-components';

// import components
import Task from './Task';
import Congratulations from './Congratulations';

const Container = styled.div`
margin: 8px;
// padding: 1rem;
// border: 2px solid darksalmon;
// border-radius: 8px;
width: 30%;

display: flex;
flex-direction: column;
`;
const Title = styled.h3`
color: #323232;
margin-bottom: 1rem;
padiing: 8px;
font-family: 'Merienda One', cursive;
`;
const TaskList = styled.div`
padding: 1rem;
border: 2px solid darksalmon;
border-radius: 8px;

transition: background-color 0.2s ease;
background-color: ${props => (props.isDraggingOver ? 'lightsalmon' : 'white')};
border: ${props => (props.isDraggingOver ? '2px solid white' : '2px solid darkslamon')};

flex-grow: 1;
min-height: 200px;
`;


class TaskColumn extends React.Component {

  // state = {
  //   modalIsOpen: false,
  // };

  // openModal = () => {
  //   this.setState({
  //     modalIsOpen: true
  //   });
  // }

  // afterOpenModal = () => {
  //   this.subtitle.style.color = '#f00';
  // }

  // closeModal = () => {
  //   this.setState({
  //     modalIsOpen: false,
  //   });
  // }

  render() {
    let pointNow;
    let gainReward;

    if (this.props.column.title === "We did it!") {

      let lastAddedTask = this.props.tasks.length - 1;
      let oldArray = this.props.column.taskIds
      oldArray.map((item) => console.log(item));

      if(lastAddedTask >= 0) {

        this.props.members[this.props.tasks[lastAddedTask].assignedTo[0]] = this.props.members[this.props.tasks[lastAddedTask].assignedTo[0]] + 1;
        pointNow = this.props.members[this.props.tasks[lastAddedTask].assignedTo[0]];
      }
    }

    // if (this.props.column.title === "We did it!" && this.props.tasks.length >= 5) {
    //   return <Congratulations
    //     openModal={this.openModal}
    //     closeModal={this.closeModal}
    //     modalIsOpen={this.state.modalIsOpen} />
    // }

    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot)=> (
              <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
              >
              {this.props.tasks.filter(Boolean).map((task, index) => <Task 
              columnTitle={this.props.column.title} 
              key={task.id} 
              task={task} 
              index={index} 
              gainReward={gainReward} 
              points={pointNow} 
              members={this.props.members} 
              sendPoints={this.props.sendPoints}/>)}

              {provided.placeholder}
              </TaskList>
          )}
        </Droppable>
      </Container>
    )
  }
}

export default TaskColumn;