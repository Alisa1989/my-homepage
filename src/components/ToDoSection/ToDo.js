import React, { useState } from "react";

import ToDoList from "./TodoList";
import "./ToDo.css";
import TodoForm from "./ToDoForm";
import { useEffect } from "react/cjs/react.development";

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
function ToDo() {

  console.log("Todo", todos)
  const [list, setList] = useState(todos);
  
  //add new item
  const addItem = (item) => {
    const newItem = {
      task: item.task,
      id: Date.now(),
      completed: false,
    };
    setList([...list, newItem]);
    console.log("item added");
  };

  //clear completed
const clearCompleted = () => {
  const filteredList = list.filter((item) => !item.completed);
  setList(filteredList)
};

  //change state of item from done to !done
  const toggleItem = (itemId, isCompleted) => {
    console.log(itemId, isCompleted);
    
    const findItem = list.find((item) => {
      return itemId === item.id 
    });
    findItem.completed = !isCompleted
    setList([...list]);
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



