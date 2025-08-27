import React, { useState } from "react";

function Home() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    const text = inputValue.trim();
    if (text) {
      setTodos([...todos, { id: Date.now(), text }]);
      setInputValue("");
    }
  };

   const deleteTodo = (id) => {
   setTodos(todos.filter(todo=>todo.id !== id));
  };
  const handlePressKey = (e)=>{
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div>
      <div className="container">
        <div className="hero">
          <h1>Simple ToDo App</h1>
          <p>This todo app for test design.</p>
        </div>

        <div className="input-section">
          <input
            className="input"
            id="todoInput"
            type="text"
            placeholder="Write Text here . . ."
            value={inputValue}
            onChange={(e)=>{setInputValue(e.target.value)}}
            onKeyPress={handlePressKey}
          />
          <button className="AddButton" onClick={addTodo}>
            + Add New
          </button>
        </div>

        <div className="todo-list">
          {todos.map(todo => (
            <div key={todo.id} className="todo-item">
              <div className="item">
                {todo.text}
                <button 
                  className="delete-btn" 
                  onClick={() => deleteTodo(todo.id)}
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="counter">
          <span className="counterTitle">
            Total List :
            <span className="counterNumber">
              {todos.length}
            </span>
          </span>
        </div>
      </div>
      <button className="mobile-add-btn" onClick={addTodo}>
        + Add New
      </button>
    </div>
  );
}

export default Home;
