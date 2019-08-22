import React, { Component } from 'react';

//import styles
import './dragdrop.scss';

// import components
import TaskList from './draggable/TaskList';
import TaskDone from './draggable/TaskDone';

//import libraries
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

//import data
import data from '../../data/taskData';


// data count generator
const getItems = (count, offset = 0) =>
	Array.from({ length: count }, (v, k) => k).map(k => ({
		id: `item-${1 + k + offset}`,
    content: `Task ${1 + k + offset}: `,
    task: `${data[k].title}`
	}));

// a function that reorders the result
const reorder = (list, startIndex, endIndex) => {
	const result = Array.from(list);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
	const sourceClone = Array.from(source);
	const destClone = Array.from(destination);
	const [removed] = sourceClone.splice(droppableSource.index, 1);

	destClone.splice(droppableDestination.index, 0, removed);

	const result = {};
	result[droppableSource.droppableId] = sourceClone;
	result[droppableDestination.droppableId] = destClone;

	return result;
};


// styles the cards while dragging
const grid = 8;
const getListStyle = isDraggingOver => ({
	background: isDraggingOver ? 'lightblue' : 'lightgrey',
	padding: grid,
	width: 250
});

class DragDrop extends Component {
	state = {
		items: getItems((data.length)),
    selected: getItems(0, (data.length))
	};

    /**
     * A semi-generic way to handle multiple lists. Matches
     * the IDs of the droppable container to the names of the
     * source arrays stored in the state.
     */
	id2List = {
		droppable: 'items',
		droppable2: 'selected'
	};

  getList = id => this.state[this.id2List[id]];
  

	onDragEnd = result => {
		const { source, destination } = result;

		// dropped outside the list
		if (!destination) {
			return;
		}

		if (source.droppableId === destination.droppableId) {
			const items = reorder(
				this.getList(source.droppableId),
				source.index,
				destination.index
			);

			let state = { items };

			if (source.droppableId === 'droppable2') {
				state = { selected: items };
      }
      

			this.setState(state);
		} else {
			const result = move(
				this.getList(source.droppableId),
				this.getList(destination.droppableId),
				source,
				destination
			);

			this.setState({
				items: result.droppable,
				selected: result.droppable2
			});
		}
	};


	render() {
		return (
      <DragDropContext onDragEnd={this.onDragEnd} >
        <div className="box">        
          <Droppable droppableId="droppable" className="box--left">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}>
                  <TaskList taskItems={this.state.items}/>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="droppable2" className="box--right">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}>
                  <TaskDone taskSelected={this.state.selected} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
			</DragDropContext>
		);
	}
}


export default DragDrop;
