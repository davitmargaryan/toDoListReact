const ToDoItem = (props) => {
	const { toDo, onDeleteClick } = props;
	return (
		<div>
			{toDo.editable == true ? (
				<input onChange={() => ""} />
			) : (
				<div>{toDo.name}</div>
			)}

			<button onClick={() => { onDeleteClick(toDo.id) }}>Del</button>
			{/* <button onClick={this.btnEdit.bind(this, ind)}>
				{toDo.editable ? "Save" : "Edit"}
			</button> */}
		</div>
	)
}

export default ToDoItem;