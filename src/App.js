import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList.js";
import Counter from "./components/Counter.js";



const App = () => {

    const[inputText, setInputText] = useState ("");

    return (
        <div>
            <header>
                <h1>Ed's to do list</h1>
            </header>
            <Form setInputText={setInputText}/>
            <ToDoList/>
            {/* <Counter /> */}
        </div>
    );
};

export default App;