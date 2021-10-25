import React from "react";
import { Link } from "react-router-dom";

const ToDoList = (props) => {
  return (
    <div className="todo-container">
      {props.todos.map((item) => {
        return (
          <div key={item.id} item={item}>
            <div
              className="taskContainer"
              className={`item${item.completed ? "completed" : ""}`}
            >
              <button
                onClick={() =>
                  props.toggleItem(item.id, item.completed)
                }
              >
                Done?
              </button>
              <Link to={`/ToDo/${item.id}`}>
                <button>Details</button>
              </Link>

              <p>{item.task}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ToDoList;
