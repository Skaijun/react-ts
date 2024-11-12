import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css"

const Todos: React.FC<{ todos: Todo[], onRemoveTodo: (id: string) => void }> = ({ todos, onRemoveTodo }) => {
    return (
        <ul className={classes.todos} style={{ textAlign: 'center', listStyle: 'none', color: 'darkblue', cursor: 'pointer', }}>
            {
                todos.map(item => (
                    <TodoItem key={item.id} todoText={item.text} onRemoveTodo={onRemoveTodo.bind(null, item.id)} />
                ))
            }
        </ul>
    );
};

export default Todos;