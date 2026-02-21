import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";

function TodoList() {

  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Study Testing", completed: false },
    { id: 3, text: "Build Todo App", completed: false }
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    };

    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {

    const updatedTodos = todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    );

    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {

    const updatedTodos =
      todos.filter(todo => todo.id !== id);

    setTodos(updatedTodos);
  };

  return (

    <div>

      <h1>Todo List</h1>

      <AddTodoForm addTodo={addTodo} />

      <ul>

        {todos.map(todo => (

          <li key={todo.id}>

            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration:
                  todo.completed ? "line-through" : "none",
                cursor: "pointer"
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>

          </li>

        ))}

      </ul>

    </div>

  );
}

export default TodoList;