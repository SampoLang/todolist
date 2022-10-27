import './App.css';
import Todolist from "./components/Todolist";
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
function Main() {

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="App">
        <h1>Simple Todolist</h1>
        <Todolist />
      </div>
    </LocalizationProvider>
  );
}

export default Main;