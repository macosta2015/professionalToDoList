import React from 'react';
import Todo from './ToDo'


const ToDoList = ({ todos, setTodos }) => {
    // console.log(todos)
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Todo
                        setTodos={setTodos}
                        todos={todos}
                        key={todo.id}
                        todo={todo}
                        text={todo.text}
                        id={todo.id}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;