import React from "react";
import { useTodos } from "../context/TodoContext";

function Pending() {
  const {
    todos,
    completeTodo,
    deleteTodo
  } = useTodos();

  const pendingTodos = todos.filter(function (todo) {
    return todo.status === "Pending";
  });

  return (
    <div className="tasks-page">

      <h1>Pending Tasks</h1>

      <table className="todo-table">

        <thead>
          <tr>
            <th>Task Name</th>
            
          </tr>
        </thead>

        <tbody>

          {pendingTodos.length === 0 ? (

            <tr>
              <td colSpan="4">
                No Pending Tasks
              </td>
            </tr>

          ) : (

            pendingTodos.map(function (todo) {

              return (
                <tr key={todo.id}>

                  <td>
                    {todo.title}
                  </td>
               </tr>
              );

            })

          )}

        </tbody>

      </table>

    </div>
  );
}

export default Pending;




