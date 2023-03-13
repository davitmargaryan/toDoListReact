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
        },
        {
          name: "Margar",
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
      todoList: [...this.state.toDoList, { name: this.state.toDoName }],
      toDoName: "",
    });
  };

  render() {
    console.log("App Comp");

    return (
      <div>
        <Header
          toDoName={this.state.toDoName}
          onToDoChange={this.onToDoChange}
        />
        <ToDoList toDoList={this.state.todoList} addBtn={this.btnClicked} />
      </div>
    );
  }
}
