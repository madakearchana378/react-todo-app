import React from "react";

function TodoItem({ todo, deleteTodo, toggleTodo }) {
  return (
    <div className="todo-item">

      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={function () {
            toggleTodo(todo.id);
          }}
        />

        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
            color: todo.completed ? "gray" : "black",
          }}
        >
          {todo.title}
        </span>
      </div>

      <div className="todo-actions">
        <button
          className="delete-btn"
          onClick={function () {
            deleteTodo(todo.id);
          }}
        >
          Delete
        </button>
      </div>

    </div>
  );
}

export default TodoItem;