import React from "react";
import { useTodos } from "../context/TodoContext";

function AllTasks() {
  const {
    todos,
    completeTodo,
    pendingTodo,
    deleteTodo
  } = useTodos();

  return (
    <div
      className="tasks-page"
      style={{
        height: "100vh",
        overflow: "hidden",
        boxSizing: "border-box",
        padding: "25px"
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>
        All Tasks
      </h1>

      <div
        style={{
          height: "calc(100vh - 140px)",
          overflowY: "auto",
          overflowX: "auto",
          background: "white",
          borderRadius: "8px",
          border: "1px solid #ddd"
        }}
      >
        <table
          className="todo-table"
          style={{
            width: "100%",
            minWidth: "750px",
            borderCollapse: "collapse"
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  position: "sticky",
                  top: "0",
                  zIndex: 5,
                  background: "#f5f5f5",
                  padding: "14px",
                  textAlign: "left"
                }}
              >
                Task Name
              </th>

              <th
                style={{
                  position: "sticky",
                  top: "0",
                  zIndex: 5,
                  background: "#f5f5f5",
                  padding: "14px",
                  textAlign: "left"
                }}
              >
                Date
              </th>

              <th
                style={{
                  position: "sticky",
                  top: "0",
                  zIndex: 5,
                  background: "#f5f5f5",
                  padding: "14px",
                  textAlign: "left"
                }}
              >
                Status
              </th>

              <th
                style={{
                  position: "sticky",
                  top: "0",
                  zIndex: 5,
                  background: "#f5f5f5",
                  padding: "14px",
                  textAlign: "left"
                }}
              >
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {todos.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  style={{
                    textAlign: "center",
                    padding: "30px"
                  }}
                >
                  No Todos Available
                </td>
              </tr>
            ) : (
              todos.map(function (todo) {
             
                const title = todo.title || "";
                const date = todo.date || "-";
                const status = todo.status || "Pending";

                const statusClass = String(status).toLowerCase();

                return (
                  <tr key={todo.id}>
                  
                    <td
                      className={
                        status === "Completed"
                          ? "completed-task"
                          : ""
                      }
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #ddd"
                      }}
                    >
                      {title}
                    </td>

                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #ddd"
                      }}
                    >
                      {date}
                    </td>

                 
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #ddd"
                      }}
                    >
                      <span
                        className={"status " + statusClass}
                      >
                        {status}
                      </span>
                    </td>

                
                    <td
                      style={{
                        padding: "14px",
                        borderBottom: "1px solid #ddd",
                        whiteSpace: "nowrap"
                      }}
                    >
                      {status !== "Deleted" && (
                        <>
                          {status === "Pending" ? (
                            <button
                              className="complete-btn"
                              onClick={function () {
                                completeTodo(todo.id);
                              }}
                            >
                              Complete
                            </button>
                          ) : (
                            <button
                              className="pending-btn"
                              onClick={function () {
                                pendingTodo(todo.id);
                              }}
                            >
                              Undo
                            </button>
                          )}

                          <button
                            className="delete-btn"
                            onClick={function () {
                              deleteTodo(todo.id);
                            }}
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllTasks;