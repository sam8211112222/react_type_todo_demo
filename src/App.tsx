import React from 'react';

import './App.css';
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/todos-context";

function App() {

    // const todos = [
    //     new Todo("Learn React"),
    //     new Todo("Learn Typescript")
    // ];

    return (
        <TodosContextProvider>
            <NewTodo/>
            <Todos/>
        </TodosContextProvider>
    );
}

export default App;
