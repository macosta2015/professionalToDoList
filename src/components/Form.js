import React from 'react';

const Form =  ({setInputText, todos, setTodos, inputText}) => {

    const inputHandler = (e) =>{
        console.log("Inside inputHandler")
        console.log(e.target.value)
        // When the onChange is activated, we then start using inputHandlder
        //This then changes the value of setInputText to "e.target.value"
        setInputText(e.target.value)
    };

    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([
            ...ToDoList, 
            {text: inputText, completed: false, id:Math.random() *1000}
        ]);
    };

    return (
        <form>
            <input onChange={inputHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">
                        All
                    </option>
                    <option value="completed">
                        Completed
                    </option>
                    <option value="uncompleted">
                        Uncompleted
                    </option>
                </select>
            </div>
        </form>
    );
};

export default Form;



