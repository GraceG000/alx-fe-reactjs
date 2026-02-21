import React, { useState } from "react";

function AddTodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
        data-testid="todo-input"
      />

      <button type="submit">
        Add Todo
      </button>
    </form>
  );
}

export default AddTodoForm;