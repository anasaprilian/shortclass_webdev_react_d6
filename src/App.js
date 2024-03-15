import ToDoList from './ToDoList/ToDoList'
import todos from './ToDoList/todos';


function App() {
  return (
    <div className="App">
      <ToDoList list = {todos}/>
    </div>
  );
}

export default App;
