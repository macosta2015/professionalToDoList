import React from 'react';
import Todo from './ToDo'


const ToDoList = ({todos}) => {
    console.log(todos)
    return (
        <div className="todo-container">
            <ul className="todo-list">
                <Todo/>
            </ul>
        </div>
    );
};

export default ToDoList;