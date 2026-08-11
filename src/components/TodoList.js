import React from "react";

function TodoList({ todos, deleteTodo, toggleTodo }) {

  if (todos.length === 0) {

    return (
      <h2>No Todos Available</h2>
    );

  }

  return (

    <div className="todo-list">

      {todos.map(function(todo){

        return (

          <div
            key={todo.id}
            className="todo-item"
            
          
          >

            <h3
              style={{
                textDecoration:
                todo.completed
                ? "line-through"
                : "none"
              }}
            >
              {todo.title}
            </h3>

            <div>

              <button
                onClick={function(){
                  toggleTodo(todo.id);
                }}
              >
                {todo.completed
                  ? "Undo"
                  : "Complete"}
              </button>

              <button
                onClick={function(){
                  deleteTodo(todo.id);
                }}
              >
                Delete
              </button>

            </div>

          </div>

        );

      })}

    </div>

  );

}

export default TodoList;