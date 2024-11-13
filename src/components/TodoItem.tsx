// import React from "react";
// import Todo from "../models/todo";
import classes from "./TodoItem.module.css"

const TodoItem: React.FC<{ todoText: string, isCompleted: boolean, onRemoveTodo: () => void, onToggleCompletion: () => void }> =
    ({ todoText, isCompleted, onRemoveTodo, onToggleCompletion }) => {
        return <li onClick={onToggleCompletion} className={`${classes.item} ${isCompleted ? classes.completed : ''}`}>
            {todoText}<span onClick={onRemoveTodo} className={classes.remove}>X</span>
        </li>;
    };
// const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
//     return <li key={todo.id}>{todo.text}</li>;
// };

export default TodoItem;