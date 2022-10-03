import React from "react";
import Todotable from "./Todotable"

export default function Todolist() {
    const [todo, setTodo] = React.useState({
        description: "",
        date: ""
    });
    const [todos, setTodos] = React.useState([]);
    const descChanged = (event) => {
        setTodo({ ...todo, description: event.target.value });
    }
    const dateChanged = (event) => {
        setTodo({ ...todo, date: event.target.value });
    }
    const addTodo = (event) => {
        event.preventDefault();
        setTodos([todo, ...todos]);
        setTodo({ description: "", date: "" });

    }
    const deleteTodo = (index) => {
        const updatedTodo = [...todos].filter((todo, i) => i !== index)
        setTodos(updatedTodo);
    }
    return (
        <div>
            <fieldset><legend>Add Todo:</legend>
                <form onSubmit={addTodo}>
                    <label> Description: </label>
                    <input name="desc" type="text" required value={todo.description} onChange={descChanged}></input>
                    <label> Date: </label>
                    <input name="date" type="date" required value={todo.date} onChange={dateChanged}></input>
                    <input type="submit" value="Add"></input>
                    <Todotable todos={todos} deleteTodo={deleteTodo} />

                </form>
            </fieldset>
        </div>
    );
}