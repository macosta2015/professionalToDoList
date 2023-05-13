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
    }, [todos, status]);

    //Save to local
    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    //Get local
    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            setTodos(todoLocal)
        }
    };

    //Call the saveLocalTodos function when todos changes
    useEffect(() => {
        saveLocalTodos();
    }, [todos]);

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