import React, { useState } from 'react';

function TodoForm() {
    const [todo, setTodo] = useState(
        {item: ""}
    )

    //handles user input
    handleChanges = e => {
        setTodo({ item: e.target.value })
    };

        return (
            <div className= "control-panel">
                <form>
                    <label>
                    <input
                        type="text"
                        name="addItem"
                        onChange={this.handleChanges}
                        />
                    </label>
                    <button>Add</button>
                </form>
            </div>
        );
}

export default TodoForm