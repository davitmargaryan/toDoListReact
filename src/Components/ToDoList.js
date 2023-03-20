import React from "react";
import {ToDoItem} from "./ToDoItem";

export default class ToDoList extends React.Component {
	constructor(props) {
		super(props);
	}



	render() {
		return (
			<>
				{this.props.toDoList.map((toDo) => {
					return (
						<ToDoItem key={toDo.id}
							toDo={toDo}
							onDeleteClick={this.props.onDelBtnClick}
							onToDoChangeToDoList={this.onToDoChange}
							changeIsEditing={this.props.changeIsEditing}
							onEditingToDoNameChange={this.props.onEditingToDoNameChange}
							returnPrevName={this.props.returnPrevName}
							changeIsChecking={this.props.changeIsChecking}
						/>
					);
				})}



				<div className="dropdown">
					<button className="dropbtn">Filter</button>
					<div id="myDropdown" className="dropdown-content">
						<button onClick={() => { this.props.filteredToDo('all') }}>All to-do lists</button>
						<button onClick={() => { this.props.filteredToDo(true) }}>Completed to-do lists</button>
						<button onClick={() => { this.props.filteredToDo(false) }}>Unfulfilled to-do lists</button>
					</div>
				</div>
			</>
		);
	}
}
