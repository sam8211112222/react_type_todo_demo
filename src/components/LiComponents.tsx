import React from "react";
import classes from "./LiComponents.module.css";

const LiComponents:React.FC<{text:string ; onRemoveTodo:(event:React.MouseEvent) => void}> =(props) =>{
    return(
        <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>
    )
}

export default LiComponents