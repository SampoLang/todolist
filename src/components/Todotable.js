import react from "react";
import { Button } from "@mui/material";
const Todotable = (props) => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                    {
                        props.todos.map((todo, index) =>

                            <tr key={index}>
                                <td>{todo.date}</td>
                                <td>{todo.description}</td>
                                <td>
                                    <button onClick={() => props.deleteTodo(index)} >Delete</button>
                                </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Todotable;
