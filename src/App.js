import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList.js";
import Counter from "./components/Counter.js";

const App = () => {

    //State stuff
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);

    //Use effect to only run once
    useEffect(() => {
        getLocalTodos()
    }, []);

    //Use effect, anytime [todos] or [status] changes, run the function
    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status]);

    //Functions
    const filterHandler = () => {
        switch (status) {
            case "completed":
                setFilteredTodos(todos.filter((todo) => todo.completed === true));
                break;
            case "uncompleted":
                setFilteredTodos(todos.filter((todo) => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos)
                break;
        }
    };

    //Save to local
    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    //Get local
    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            // let todoLocal = localStorage.getItem("todos", JSON.stringify(todos))
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            // setTodos(todoLocal)
        }
    };

    return (
        <div className="App">
            <header>
                <h1>Ed's to do list</h1>
            </header>
            <Form
                inputText={inputText}
                todos={todos}
                setTodos={setTodos}
                setInputText={setInputText}
                setStatus={setStatus}
            />
            <ToDoList
                filteredTodos={filteredTodos}
                setTodos={setTodos}
                todos={todos}
            />
            {/* <Counter /> */}
        </div>
    );
};

export default App;