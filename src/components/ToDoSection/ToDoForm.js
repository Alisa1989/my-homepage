import React, { useState } from 'react';

function TodoForm(props) {
    console.log("todoform",props);
    const [todo, setTodo] = useState(
        {task: ""}
    )

    //handles user input
    const handleChanges = e => {
        console.log("handlechanges", e.target.value)
        setTodo({ task: e.target.value })
    };

    const submitForm = event => {
        event.preventDefault()
        props.addItem(todo)
        setTodo({task: ""})
    };
        return (
            <div className= "control-panel">
                <form onSubmit={submitForm}>
                    <label htmlFor="text">
                    <input
                        id="text"
                        type="text"
                        name="addTask"
                        placeholder = "enter new"
                        value = {todo.task}
                        onChange={handleChanges}
                        />
                    </label>
                    <button type="submit">Add Item</button>
                </form>
            </div>
        );
}

export default TodoForm