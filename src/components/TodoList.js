import React, { useState } from "react";
import TodoModal from "./TodoModal";
import { useTodos } from "../context/TodoContext";

function TodoList() {

  const {
    todos,
    deleteTodo,
    toggleTodo,
    updateTodo
  } = useTodos();

  const [selectedTodo, setSelectedTodo] = useState(null);

  if (todos.length === 0) {
    return <h2>No Todos Available</h2>;
  }

  function handleEdit(todo) {
    setSelectedTodo(todo);
  }

  function handleSave(updatedTodo) {
    updateTodo(updatedTodo);
    setSelectedTodo(null);
  }

  return (
    <div className="todo-list">

      {todos.map(function (todo) {

        return (
          <div
            key={todo.id}
            className="todo-item"
          >

            <div className="todo-details">

              <h3
                style={{
                  textDecoration: todo.completed
                    ? "line-through"
                    : "none"
                }}
              >
                {todo.title}
              </h3>

              {todo.description && (
                <p>{todo.description}</p>
              )}

              {todo.date && (
                <p>Due: {todo.date}</p>
              )}

              {todo.priority && (
                <p>Priority: {todo.priority}</p>
              )}

              <p>Status: {todo.status}</p>

            </div>

            <div className="todo-buttons">

              <button
                onClick={function () {
                  toggleTodo(todo.id);
                }}
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>

              <button
                onClick={function () {
                  handleEdit(todo);
                }}
              >
                Edit
              </button>

              <button
                onClick={function () {
                  deleteTodo(todo.id);
                }}
              >
                Delete
              </button>

            </div>

          </div>
        );

      })}

      {selectedTodo && (
        <TodoModal
          todo={selectedTodo}
          onClose={function () {
            setSelectedTodo(null);
          }}
          onSave={handleSave}
        />
      )}

    </div>
  );
}

export default TodoList;










