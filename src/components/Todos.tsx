import React from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos";
import classes from "./Todos.module.css"

const Todos: React.FC = () => {
    const todosCtx = React.useContext(TodosContext);
    return (
        <ul className={classes.todos} style={{ textAlign: 'center', listStyle: 'none', color: 'darkblue', cursor: 'pointer', }}>
            {
                todosCtx.items.map(item => (
                    <TodoItem
                        key={item.id}
                        todoText={item.text}
                        isCompleted={item.isCompleted}
                        onRemoveTodo={todosCtx.remove.bind(null, item.id)}
                        onToggleCompletion={todosCtx.toggleState.bind(null, item.id)}
                    />
                ))
            }
        </ul>
    );
};

export default Todos;