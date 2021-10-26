import React, { useState } from "react";

import ToDoList from "./TodoList";
import "./ToDo.css";
import TodoForm from "./ToDoForm";

const todos = [
  {
    task: "Clean Garage",
    id: 1,
    completed: false,
  },
  {
    task: "Wash Cats",
    id: 2,
    completed: true,
  },
  {
    task: "Clean Floors",
    id: 3,
    completed: false,
  },
];

//Adding local state to the class
function ToDo() {

  console.log("Todo", todos)
  const [list, setList] = useState(todos);
  
  //add new item
  const addItem = (item) => {
    const newItem = {
      item,
      id: Date.now(),
      completed: false,
    };
    setList([...list, newItem]);
    console.log("item added");
  };

  //clear completed
const clearCompleted = (e) => {
  e.preventDefault();
  setList([list.todos.filter((item) => !item.completed)]);
};

  // console.log("list", list.todos);
  //change state of item from done to !done
  const toggleItem = (itemId, isCompleted) => {
    console.log(itemId, isCompleted);
    setList({
      todos: list.todos.map((item) => {
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
  
  return (
    <div className="ToDo">
      <div className="header">
        <h2> Let's get some stuff done!!</h2>
      </div>
      <TodoForm addItem={addItem} />
      <ToDoList todos={list} toggleItem={toggleItem} clearCompleted={clearCompleted}/>
    </div>
  );
}

export { ToDo, todos };



