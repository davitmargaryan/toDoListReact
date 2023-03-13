import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("header Comp");
    return (
      <>
        <input value={this.props.toDoName} onChange={this.props.onToDoChange} />
        <button onClick={this.props.addBtn}>add</button>
      </>
    );
  }
}
