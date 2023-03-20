// const ToDoItem = (props) => {
// 	const { toDo, onDeleteClick, changeIsEditing, returnPrevName, changeIsChecking, filteredToDo } = props;



// 	return (
// 		<div className="toDo-item">
// 			{toDo.isEditing ? (
// 				<>
// 					<input id='edit-input' onChange={(e) => props.onEditingToDoNameChange(toDo.id, e.target.value)} value={toDo.name} />
// 					<button className='btn btn-save' onClick={() => { changeIsEditing(toDo.id, false) }}>Save</button>
// 					<button className='btn btn-cancel' onClick={() => { returnPrevName(toDo.id, toDo.name) }}>Cancel</button>
// 				</>
// 			) : (
// 				<>
// 					<div id="toDo-name"
// 						className={toDo.isChecking ? "checked-toDo" : "unchecked-toDo"}
// 						onClick={() => { toDo.isChecking ? changeIsChecking(toDo.id, false) : changeIsChecking(toDo.id, true) }}><span>{toDo.name}</span>
// 					</div>
// 					<div className="btns-del-edit">
// 						<button className="btn btn-del" onClick={() => { onDeleteClick(toDo.id) }}>Del</button>
// 						<button className="btn btn-edit" onClick={() => { changeIsEditing(toDo.id, true) }}>Edit</button>
// 					</div>
// 				</>
// 			)
// 			}
// 		</div >
// 	)
// }

// export default ToDoItem;

import React from "react";

export class ToDoItem extends React.Component {

	state = {
		editingName: ''
	}

	onEditingChangeName = (editingName) => {
		this.setState({ editingName: editingName })
	}

	render() {
		const { toDo, onDeleteClick, changeIsEditing, returnPrevName, changeIsChecking, filteredToDo, onEditingToDoNameChange } = this.props;
		return (
			<div className="toDo-item">
				{toDo.isEditing ? (
					<>
						{/* <input id='edit-input' onChange={(e) => this.props.onEditingToDoNameChange(toDo.id, e.target.value)} value={toDo.name} /> */}
						<input id='edit-input' onChange={(e) => { this.onEditingChangeName(e.target.value) }} value={this.state.editingName} />
						<button className='btn btn-save' onClick={() => {
							onEditingToDoNameChange(toDo.id, this.state.editingName)
							changeIsEditing(toDo.id, false)

							console.log(this.state.editingName)
						}}>Save</button>
						<button className='btn btn-cancel' onClick={() => { returnPrevName(toDo.id, toDo.name) }}>Cancel</button>
					</>
				) : (
					<>
						<div id="toDo-name"
							className={toDo.isChecking ? "checked-toDo" : "unchecked-toDo"}
							onClick={() => { toDo.isChecking ? changeIsChecking(toDo.id, false) : changeIsChecking(toDo.id, true) }}><span>{this.state.editingName}</span>
						</div>
						<div className="btns-del-edit">
							<button className="btn btn-del" onClick={() => { onDeleteClick(toDo.id) }}>Del</button>
							<button className="btn btn-edit" onClick={() => { changeIsEditing(toDo.id, true) }}>Edit</button>
						</div>
					</>
				)
				}
			</div >
		)
	}
}