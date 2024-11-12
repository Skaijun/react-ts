import { useRef } from "react";
import classes from "./NewTodo.module.css"

const NewTodo: React.FC<{ onAddTodo: (todoText: string) => void }> = ({ onAddTodo }) => {
    const textRef = useRef<HTMLInputElement>(null);

    const submitFormHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const todoText = textRef.current!.value;

        if (todoText.trim().length === 0) {
            return null;
        }

        onAddTodo(todoText);

        textRef.current!.value = '';
    };

    return <form className={classes.form} onSubmit={submitFormHandler}>
        <label htmlFor="todo"></label>
        <input type="text" id="todo" ref={textRef} />
        <button>Add</button>
    </form>;
};

export default NewTodo;