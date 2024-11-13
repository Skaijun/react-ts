import React from "react";
import Todo from "../models/todo";

type TodosObj = {
  items: Todo[];
  add: (text: string) => void;
  remove: (id: string) => void;
  toggleState: (id: string) => void;
};

export const TodosContext = React.createContext<TodosObj>({
  items: [],
  add: (text: string) => { },
  remove: (id: string) => { },
  toggleState: (id: string) => { }
});

const TodosContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };

  const handleRemoveTodo = (todoId: string) => {
    const isProceed = window.confirm(
      "Are you sure you want to delete this todo from the list?"
    );

    if (isProceed) {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
    }
  };

  const handleToggleTodo = (todoId: string) => {
    setTodos((prevTodos) => {
      const selectedTodoIndex: number = prevTodos.findIndex(todo => todo.id === todoId);
      const selectedStateItem = prevTodos[selectedTodoIndex];
      const updatedTodosState = [...prevTodos];

      const updatedItem = {
        ...selectedStateItem,
        isCompleted: !selectedStateItem?.isCompleted
      };
      updatedTodosState[selectedTodoIndex] = updatedItem;
      return updatedTodosState;
    });
  }

  const contextValue: TodosObj = {
    items: todos,
    add: addTodoHandler,
    remove: handleRemoveTodo,
    toggleState: handleToggleTodo
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
