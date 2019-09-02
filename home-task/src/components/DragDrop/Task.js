import React from 'react';

import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import msg from '../../assets/message.svg';


const Container = styled.div`
border: 1px solid lightgrey;
margin-bottom: 8px;
padding: 8px;
border-radius: 8px;
background-color: ${props => (props.isDragging ? 'white' : '#543855')};
color: ${props => (props.isDragging ? 'salmon' : 'white')};

display: flex;
flex-direction: column;
`;

const Uplayer = styled.div`
display: flex;
justify-content: space-between;
`

const Form = styled.div`
display: flex;
align-items: center;
`


class Task extends React.Component {
  
  state = {
    score: 0
  }

  sendText = () => {
    const recipient = '+12267782404';
    const textmessages = 'A task has been completed!';
    fetch(`http://localhost:8080/sendSMS?recipient=${recipient}&textmessages=${textmessages}`)
    .then(response => console.log(response))
    .catch(err => console.log(err));
  }

  handleScore = () => {
    if (this.props.columnTitle === "Done") {
      this.setState({
        score: 1
      })
    }
  }

  render() {
    let assignedMember = this.props.task.assignedTo[0];
    let gainedPoints = this.props.members[assignedMember]

    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
          >
            <Uplayer>
              <h4>{this.props.task.title}</h4>
              <p className='assignedTo'> {assignedMember}</p>
            </Uplayer>
            
            <form>
              <Form>
                <img className='msg-icon' onClick={this.sendText} src={msg} alt="" />
                <button className='score' type="button" onClick={this.props.sendPoints}>Point: {gainedPoints}</button>
              </Form>
            </form>
            {provided.placeholder}
          </Container>
        )}
      </Draggable>
    )
  }
}

export default Task;