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
					id: Math.random()
				},
				{
					name: "Margar",
					id: Math.random()
				},
			],
			editable: false,
		};
	}
	onToDoChange = (e) => {
		this.setState({
			toDoName: e.target.value,
		});
	};

	btnClicked = () => {
		this.setState({
			todoList: [...this.state.todoList, { name: this.state.toDoName, id: Math.random() }],
			toDoName: "",
		});
	};

	btnDel = (id) => {
		this.setState({
			todoList: this.state.todoList.filter((item) => id != item.id),
		});
	}

	render() {
		return (
			<div>
				<Header
					toDoName={this.state.toDoName}
					onToDoChange={this.onToDoChange}
					onAddBtnClick={this.btnClicked}
				/>
				<ToDoList toDoList={this.state.todoList} onDelBtnClick={this.btnDel} />
			</div>
		);
	}
}
