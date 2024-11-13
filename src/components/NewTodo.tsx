import { useContext, useRef } from "react";
import { TodosContext } from "../store/todos";
import classes from "./NewTodo.module.css"

const NewTodo: React.FC = () => {
    const textRef = useRef<HTMLInputElement>(null);
    const todosCtx = useContext(TodosContext);

    const submitFormHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const todoText = textRef.current!.value;

        if (todoText.trim().length === 0) {
            return null;
        }

        todosCtx.add(todoText);

        textRef.current!.value = '';
    };

    return <form className={classes.form} onSubmit={submitFormHandler}>
        <label htmlFor="todo"></label>
        <input type="text" id="todo" ref={textRef} />
        <button>Add</button>
    </form>;
};

export default NewTodo;