import './App.css';
import React, { useState } from "react";
import Todolist from "./components/Todolist";
function Main() {

  return (
    <div className="App">
      <h1>Simple Todolist</h1>
      <Todolist />
    </div>
  );
}

export default Main;