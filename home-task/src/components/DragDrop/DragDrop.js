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
import axios from 'axios';

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
            return <TaskColumn key={column.id} column={column} tasks={tasks} />
          })}
      </Container>
    </DragDropContext> 	
    )
	}
}

export default DragDrop;




// // styles the cards while dragging
// const grid = 8;
// const getListStyle = isDraggingOver => ({
// 	background: isDraggingOver ? 'lightblue' : 'lightgrey',
// 	padding: grid,
// 	width: 250
// });

/***************************before class component */
// //data count generator
// const getItems = (count, offset = 0) =>
// 	Array.from({ length: count }, (v, k) => k).map(k => ({
// 		id: `item-${1 + k + offset}`,
//     content: `Task ${1 + k + offset}: `,
//     task: `${data[k].title}`
// 	}));

// // a function that reorders the result
// const reorder = (list, startIndex, endIndex) => {
// 	const result = Array.from(list);
// 	const [removed] = result.splice(startIndex, 1);
// 	result.splice(endIndex, 0, removed);

// 	return result;
// };

// /**
//  * Moves an item from one list to another list.
//  */
// const move = (source, destination, droppableSource, droppableDestination) => {
// 	const sourceClone = Array.from(source);
// 	const destClone = Array.from(destination);
// 	const [removed] = sourceClone.splice(droppableSource.index, 1);

// 	destClone.splice(droppableDestination.index, 0, removed);

// 	const result = {};
// 	result[droppableSource.droppableId] = sourceClone;
// 	result[droppableDestination.droppableId] = destClone;

// 	return result;
// };

//****************************** */ inside class before render:


	// state = {
  //   items: data,
  //   selected: data
  // };

/**
 * A semi-generic way to handle multiple lists. Matches
 * the IDs of the droppable container to the names of the
 * source arrays stored in the state.
 */
	// id2List = {
	// 	droppable: 'items',
	// 	droppable2: 'selected'
	// };

  // getList = id => this.state[this.id2List[id]];


	// onDragEnd = result => {
	// 	const { source, destination } = result;

	// 	// dropped outside the list
	// 	if (!destination) {
	// 		return;
	// 	}

	// 	if (source.droppableId === destination.droppableId) {
	// 		const items = reorder(
	// 			this.getList(source.droppableId),
	// 			source.index,
	// 			destination.index
	// 		);

	// 		let state = { items };

	// 		if (source.droppableId === 'droppable2') {
	// 			state = { selected: items };
  //     }


	// 		this.setState(state);
	// 	} else {
	// 		const result = move(
	// 			this.getList(source.droppableId),
	// 			this.getList(destination.droppableId),
	// 			source,
	// 			destination
	// 		);

	// 		this.setState({
	// 			items: result.droppable,
	// 			selected: result.droppable2
	// 		});
	// 	}
  // };
  

  /****************************inside render return */

   // <DragDropContext onDragEnd={this.onDragEnd} >

      //   <div className="box">   

      //     <Droppable droppableId={data.taskid} className="box--left">
      //       {(provided, snapshot) => (
      //         <div
      //           ref={provided.innerRef}
      //           style={getListStyle(snapshot.isDraggingOver)}>
      //             <TaskList taskItems={this.state.items}/>
      //           {provided.placeholder}
      //         </div>
      //       )}
      //     </Droppable>


      //     <Droppable droppableId="droppable2" className="box--right">
      //       {(provided, snapshot) => (
      //         <div
      //           ref={provided.innerRef}
      //           style={getListStyle(snapshot.isDraggingOver)}>
      //             <TaskDone taskSelected={this.state.selected} />
      //           {provided.placeholder}
      //         </div>
      //       )}
      //     </Droppable>


      //   </div>
			// </DragDropContext>