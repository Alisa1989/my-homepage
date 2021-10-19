import React from 'react';

import ToDoItem from './ToDoItem';

const ToDoList = props => {
    return (
        <div className= "todo-container">
            {props.todos.map(item => {
                return <ToDoItem key={item.id} item={item} toggleItem={props.toggleItem}/>
            })}
        </div>
    );
};

export default ToDoList;