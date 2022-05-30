import React, {useContext, useRef} from "react";
import classes from "./NewTodo.module.css";
import {TodosContext} from "../store/todos-context";

// 也可以寫成onAddTodo : (enteredText:string) => void
// const NewTodo:React.FC<{onAddTodo(enteredText:string):void}> =(props) =>{

// 不用props的寫法
const NewTodo:React.FC =() =>{


    // 改成用  useContext  的寫法
    const todoContext = useContext(TodosContext)

    const todoTextInputRef = useRef<HTMLInputElement>(null)

    const submitHandler =(event:React.FormEvent) =>{
        event.preventDefault()
        const  enteredText = todoTextInputRef.current!.value

        if (enteredText.trim().length ===0){
            // throw error
            return;
        }

        // 舊寫法
        // props.onAddTodo(enteredText)

        // 新寫法
        todoContext.addTodo(enteredText)

        // 每次更新完就清空輸入欄
        todoTextInputRef.current!.value = ""
    }

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <label htmlFor={"text"}>Todo Text</label>
            <input type={"text"} id={"text"} ref={todoTextInputRef}/>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;