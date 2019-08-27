import React from 'react';

import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
border: 1px solid lightgrey;
margin-bottom: 8px;
padding: 8px;
border-radius: 8px;
background-color: ${props => (props.isDragging ? 'lightblue' : 'beige')}
`;


class Task extends React.Component {
  render() {
    let assignedMember = this.props.task.assignedTo[0];
    let gainedPoints = this.props.members[assignedMember]
    let rewardNum = this.props.gainReward
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
          >
          {this.props.task.title}
            <p>Assigned To: {assignedMember}</p>
            <p>Points: {gainedPoints}</p>
            <p>Reward: {(rewardNum) ? `${assignedMember} has ${rewardNum} reward!` : `${assignedMember} has no reward`}</p>
          
            {provided.placeholder}
          </Container>
        )}
      </Draggable>
    )
  }
}

export default Task;