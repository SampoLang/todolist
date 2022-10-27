import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import { Button, TextField } from '@mui/material';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



function Todolist() {
    const [todo, setTodo] = useState({ description: '', date: '', priority: '' });
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    }

    const addTodo = (event) => {
        setTodos([...todos, todo]);
    }

    const columns = [
        { headerName: "Date", field: "date" },
        { headerName: "Description", field: "description" },
        { headerName: "Priority", field: "priority" }]

    const defaultColDef = { sortable: true, filter: true, floatingFilter: true }
    return (
        <div>
            <input type="text" onChange={inputChanged} placeholder="Description" name="description" value={todo.description} />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="insert date"
                    value={todo.date}
                    onChange={(newValue) => {
                        newValue = newValue.toLocaleDateString();
                        console.log(newValue);
                        setTodo({ ...todo, [todo.date]: newValue });
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            <input type="text" onChange={inputChanged} placeholder="Priority" name="priority" value={todo.priority} />
            <Button onClick={addTodo} variant="contained">Add</Button>
            <div className="ag-theme-material" style={{ height: '700px', width: '70%', margin: 'auto' }} >
                <AgGridReact
                    animateRows={true}
                    columnDefs={columns}
                    defaultColDef={defaultColDef}
                    rowData={todos}>
                </AgGridReact>
            </div>
        </div>
    );
};

export default Todolist;