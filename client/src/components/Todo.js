import React, { Component } from "react";
import axios from "axios";

import Input from "./Input";
import ListTodo from "./ListTodo";

class Todo extends Component {
  state = {
    listItem: [],
  };

  componentDidMount() {
    this.getListItem();
  }

  getListItem = () => {
    axios
      .get('./api/listItem')
      .then((res) => {
        if (res.data) {
          this.setState({
            listItem: res.data
          });
        }
      })
      .catch((err) => console.log(err));
  };

  deleteListItem = (id) => {
    axios
      .delete(`/api/listItem/${id}`)
      .then((res) => {
        if (res.data) {
          this.getListItem();
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    let { listItem } = this.state;

    return (
      <div>
        <h1>My Todo(s)</h1>
        {/* <Input addTodos={this.addTodos}></Input> */}
        <Input getListItem={this.getListItem}/>
        <ListTodo listItem={listItem} deleteListItem={this.deleteListItem} />
      </div>
    );
  }
}

export default Todo;
