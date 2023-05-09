import React, { useState } from "react";
import "./App.css";

const App = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    };
    return (
        <div>
            <header>
                <h1>Ed's to do list</h1>
            </header>
            This was made from Scratch! Also hello world!
            <button onClick={increment}>Increment</button>
            {counter}
        </div>
    );
};

export default App;