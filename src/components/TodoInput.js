import React, { useState } from "react";
import { useTodos } from "../context/TodoContext";

function TodoInput() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const { addTodo } = useTodos();

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim() === "") {
      return;
    }

    if (date === "") {
      alert("Please select date");
      return;
    }

    addTodo(title, date);

    setTitle("");
    setDate("");
  }

  return (
    <form className="todo-input-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter task name..."
        value={title}
        onChange={function (e) {
          setTitle(e.target.value);
        }}
      />

      <input
        type="date"
        value={date}
        onChange={function (e) {
          setDate(e.target.value);
        }}
      />

      <button type="submit">
        Add Todo
      </button>

    </form>
  );
}

export default TodoInput;





