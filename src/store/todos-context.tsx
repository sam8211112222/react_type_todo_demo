import React, {PropsWithChildren, useState} from 'react';

import Todo from '../models/Todo';

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<PropsWithChildren<{}>> = (props) => {


    const [todos, setTodos] = useState<Todo[]>([
        new Todo("Learn React"),
        new Todo("Learn Typescript")
    ])

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText)
        setTodos((prevState)=>{
            return prevState.concat(newTodo)
        })
    }

    const removeTodoHandler =(todoId:string) =>{
        setTodos((prevState)=>{
            return prevState.filter(todo => todo.id !== todoId)
        })
    }

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
    };

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    );
};

export default TodosContextProvider;