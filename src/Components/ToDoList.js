import React from "react";

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props);
  }

  btnDel(indexD) {
    this.props.setState({
      todoList: this.props.todoList.filter((item, index) => indexD != index),
    });
    console.log(this.state);
  }
  btnEdit(indexD) {
    this.setState({
      todoList: this.state.todoList.map((item, index) => {
        if (indexD === index) {
          return {
            ...item,
            editable: true,
          };
        }
        return item;
      }),
    });
  }

  render() {
    console.log("todo Comp");

    return (
      <>
        {this.props.toDoList.map((item, index) => {
          return (
            <div key={index}>
              {item.editable == true ? (
                <input onChange={() => ""} />
              ) : (
                <div>{item.name}</div>
              )}

              <button onClick={this.btnDel.bind(this, index)}>Del</button>
              <button onClick={this.btnEdit.bind(this, index)}>
                {item.editable ? "Save" : "Edit"}
              </button>
            </div>
          );
        })}
      </>
    );
  }
}
