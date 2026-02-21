import React, { useState } from "react";

function TodoList() {

  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Write Tests", completed: false }
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

    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );

  };


  const deleteTodo = (id) => {

    setTodos(
      todos.filter(todo => todo.id !== id)
    );

  };


  return (

    <div>

      <h1>Todo List</h1>


      <input
        type="text"
        placeholder="Add Todo"
        id="todoInput"
      />


      <button
        onClick={() => {
          const input =
            document.getElementById("todoInput");

          addTodo(input.value);

          input.value = "";
        }}
      >
        Add
      </button>



      <ul>

        {todos.map(todo => (

          <li key={todo.id}>

            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration:
                  todo.completed
                    ? "line-through"
                    : "none"
              }}
            >
              {todo.text}
            </span>


            <button
              onClick={() =>
                deleteTodo(todo.id)
              }
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