import React from "react";

import ToDoList from "./TodoList";
import "./ToDo.css"

const todos = [
  {
    task: "Clean Garage",
    id: 1,
    completed: false,
  },
  {
    task: "Wash Cats",
    id: 2,
    completed: false,
  },
  {
    task: "Clean Floors",
    id: 3,
    completed: false,
  },
];

//Adding local state to the class
class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todos,
    };
  }

  //change state of item from done to !done
  toggleItem = (itemId, isCompleted) => {
    console.log(itemId, isCompleted);
    this.setState({
      todos: this.state.todos.map((item) => {
        //go through array and look for toggled item
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  //add new item
  addItem = (item) => {
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newItem],
    });
    console.log("item added");
  };

  //clear completed
  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter((item) => !item.completed),
    });
  };

  render() {
    return(
      <div className="ToDo">
        <div className="header">
          <h2> Let's get some stuff done!!</h2>
        </div>
        <ToDoList 
            todos={this.state.todos}
            toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default ToDo;
