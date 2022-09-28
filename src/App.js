import './App.css';
import React, { useState } from "react";

function Todolist() {
  const [todo, setTodo] = useState({
    description: "",
    date: ""
  });
  const [todos, setTodos] = useState([]);

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
  return (
    <div className="App">
      <h1>Simple Todolist</h1>
      <fieldset><legend>Add Todo:</legend>
        <form onSubmit={addTodo}>
          <label for="desc"> Description: </label>
          <input name="desc" type="text" value={todo.description} onChange={descChanged}></input>
          <label for="date"> Date: </label>
          <input name="date" type="text" value={todo.date} onChange={dateChanged}></input>
          <input type="submit" value="Add"></input>

        </form>
      </fieldset>
      <table>
        <tr>
          <th>Date</th>
          <th>Description</th>
        </tr>
        <tbody>
          {
            todos.map((todo, index) =>
              <tr key={index}>
                <td>{todo.date}</td>
                <td>{todo.description}</td>
              </tr>)
          }
        </tbody>
      </table>
    </div>
  );
}

export default Todolist;