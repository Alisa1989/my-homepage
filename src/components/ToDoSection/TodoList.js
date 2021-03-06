import React from "react";
import { Link } from "react-router-dom";

const ToDoList = (props) => {
  console.log("todolist", props.todos);

  return (
    <div className="todo-container">
      {props.todos.map((item) => (
          <div key={item.id} item={item}>
            <div className={`item${item.completed ? "completed" : ""}`}>
              <button onClick={() => props.toggleItem(item.id, item.completed)}>
                Done?
              </button>
              <Link to={`/ToDo/${item.id}`}>
                <button>Details</button>
              </Link>
              <p>{item.task}</p>
            </div>
          </div>
      ))};
          <button onClick={() => props.clearCompleted()}>
                Clear Completed
          </button>
    </div>
  );
}

export default ToDoList;