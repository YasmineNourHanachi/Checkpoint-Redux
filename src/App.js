import "./App.css";
import AddTask from "./Component/Modals/AddTask";
import TodoList from "./Component/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <AddTask />
      <TodoList />
    </div>
  );
}

export default App;
