import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList.js";
import Counter from "./components/Counter.js";



const App = () => {

    const[inputText, setInputText] = useState ("");
    const [todos,setTodos] = useState([]);

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
            />
            <ToDoList todos={todos}/>
            {/* <Counter /> */}
        </div>
    );
};

export default App;