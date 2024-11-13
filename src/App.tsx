import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos";

function App() {
  return (
    <TodosContextProvider>
      <div className="App">
        <header className="App-header">
          <h1 style={{ textAlign: 'center' }}>React Typescript [TODO-List]</h1>
        </header>
        <hr />
        <br />
        <NewTodo />
        <hr />
        <br />
        <Todos />
      </div>
    </TodosContextProvider>
  );
}

export default App;
