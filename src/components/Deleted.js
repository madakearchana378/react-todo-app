import React from "react";
import { useTodos } from "../context/TodoContext";

function Deleted() {
  const { todos } = useTodos();

  const deletedTodos = todos.filter(function (todo) {
    return todo.status === "Deleted";
  });

  return (
    <div className="tasks-page">

      <h1>Deleted Tasks</h1>

      <table className="todo-table">

        <thead>
          <tr>
            <th>Task Name</th>
            
          </tr>
        </thead>

        <tbody>

          {deletedTodos.length === 0 ? (

            <tr>
              <td colSpan="3">
                No Deleted Tasks
              </td>
            </tr>

          ) : (

            deletedTodos.map(function (todo) {

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

export default Deleted;





