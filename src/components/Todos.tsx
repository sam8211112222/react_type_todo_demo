import React, {useContext} from "react";
import LiComponents from "./LiComponents";
import classes from "./Todos.module.css";
import {TodosContext} from "../store/todos-context";


// 之前的寫法
// const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id:string) => void }> = (props) => {

// 現在這邊已經不需要用props來傳遞參數了

const Todos: React.FC = () => {


    const todoContext = useContext(TodosContext)


    return (
        <ul className={classes.todos}>
            {todoContext.items.map((item) => (
                // <li key={item.id}>{item.text}</li>
                <LiComponents key={item.id} text={item.text} onRemoveTodo={todoContext.removeTodo.bind(null, item.id)}/>
            ))}
        </ul>
    )
}

export default Todos