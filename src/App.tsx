import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos(prevTodos => prevTodos.concat(newTodo));
  };

  const handleRemoveTodo = (todoId: string) => {
    const isProceed = window.confirm('Are you sure you want to delete this todo from the list?');

    if (isProceed) {
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ textAlign: 'center' }}>React Typescript [TODO-List]</h1>
      </header>
      <hr />
      <br />
      <NewTodo onAddTodo={addTodoHandler} />
      <hr />
      <br />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
}

export default App;
