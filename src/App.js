import React from "react";
import Header from "./Components/Header";
import ToDoList from "./Components/ToDoList";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			toDoName: "",
			todoList: [
				{
					name: "Kirgiz",
					id: Math.random(),
					isEditing: false,
					isChecking: false,

				},
				{
					name: "Margar",
					id: Math.random(),
					isEditing: false,
					isChecking: false,

				},
			],
			counter: 0,
		};
	}


	filteredToDo = (status) => {
		if (status === 'all') {
			this.setState({
				todoList: [...this.state.todoList]
			})

		} else {

			this.setState({
				todoList: this.state.todoList.filter((item) => item.isChecking === status)
			})

		}
	}




	returnPrevName = (id, prevName) => {
		this.setState({
			todoList: this.state.todoList.map((item) => {
				if (id === item.id) {
					return { ...item, name: prevName }
				}
				return item;
			})
		})
	}

	changeIsEditing = (id, isEditing) => {
		this.setState({
			todoList: this.state.todoList.map((item) => {
				if (id === item.id) {
					return { ...item, isEditing }
				}
				return item;
			})
		})
	}



	changeIsChecking = (id, isChecking) => {
		this.setState({
			todoList: this.state.todoList.map((item) => {
				if (id === item.id) {
					return { ...item, isChecking: isChecking }
				}
				return item;
			})
		})
	}

	onEditingToDoNameChange = (id, newValue) => {
		this.setState({
			todoList: this.state.todoList.map((item) => {
				if (id === item.id) {
					return { ...item, name: newValue }
				}
				return item;
			})
		})
	}


	onToDoChange = (e) => {
		this.setState({
			toDoName: e.target.value,
		});
	};

	btnAddClicked = () => {
		if (this.state.toDoName !== '') {
			this.setState({
				todoList: [...this.state.todoList, { name: this.state.toDoName, id: Math.random(), isEditing: false, isChecking: false }],
				toDoName: "",
			});
		}
	};

	btnDel = (id) => {
		this.setState({
			todoList: this.state.todoList.filter((toDo) => id !== toDo.id),
		});
	}

	render() {
		return (
			<div id="main-container">
				<div id='header'>
					<Header
						toDoName={this.state.toDoName}
						onToDoChange={this.onToDoChange}
						onAddBtnClick={this.btnAddClicked}
					/>
				</div>
				<div id='toDo-list'>
					<ToDoList
						toDoList={this.state.todoList}
						onDelBtnClick={this.btnDel}
						onToDoChangeToDoList={this.onToDoChange}
						changeIsEditing={this.changeIsEditing}
						onEditingToDoNameChange={this.onEditingToDoNameChange}
						returnPrevName={this.returnPrevName}
						filteredToDo={this.filteredToDo}
						changeIsChecking={this.changeIsChecking}
					/>
				</div>
			</div>
		);
	}
}
