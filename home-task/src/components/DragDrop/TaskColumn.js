import React from 'react';

//import libraries
import { Droppable} from 'react-beautiful-dnd';
import styled from 'styled-components';

import Task from './Task'

const Container = styled.div`
margin: 8px;
border: 1px solid grey;
border-radius: 8px;
width: 30%;

display: flex;
flex-direction: column;
`;
const Title = styled.h3`
padiing: 8px;
`;
const TaskList = styled.div`
padiing: 8px;
transition: background-color 0.2s ease;
background-color: ${props => (props.isDraggingOver ? 'lightgreen' : 'white')};
flex-grow: 1;
min-height: 200px;
`;


class TaskColumn extends React.Component {
  render() {
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
                {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}

              {provided.placeholder}
              </TaskList>
          )}
        </Droppable>
      </Container>
    )
  }
}

export default TaskColumn;