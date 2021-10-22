import React from "react";
import {useParams} from 'react-router-dom';

const ToDoItem = (props) => {
    const params = useParams();
    const collection = props.todos
    const Item = collection.find(item => item.id === Number(params.id))
    console.log(Item)

  return (
    <div>
        <h2>{Item.task}</h2>
        <button>RED</button>
    </div>
  );
};

export default ToDoItem;
