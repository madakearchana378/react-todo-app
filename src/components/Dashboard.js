import React, { useState } from "react";
import { useTodos } from "../context/TodoContext";
import "../Dashboard.css";

function Dashboard() {
  const {
    todos,
    addTodo,
    updateTodo,
    deleteTodo
  } = useTodos();

  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const [selectedTodo, setSelectedTodo] = useState(null);

  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");


  const activeTodos = todos.filter(function (todo) {
    return todo.status !== "Deleted";
  });

 
  const pending = todos.filter(function (todo) {
    return todo.status === "Pending";
  }).length;

  
  const completed = todos.filter(function (todo) {
    return todo.status === "Completed";
  }).length;

 
  const deleted = todos.filter(function (todo) {
    return todo.status === "Deleted";
  }).length;


 
  function clearForm() {
    setTaskName("");
    setDescription("");
    setDate("");
  }



  function handleAdd() {
    if (taskName.trim() === "") {
      alert("Please enter task name");
      return;
    }

    if (description.trim() === "") {
      alert("Please enter description");
      return;
    }

    if (date === "") {
      alert("Please select date");
      return;
    }

    const alreadyExists = todos.some(function (todo) {
      return (
        todo.status !== "Deleted" &&
        todo.title.toLowerCase() ===
          taskName.trim().toLowerCase() &&
        todo.date === date
      );
    });

    if (alreadyExists) {
      alert("Task already exists for this date");
      return;
    }

    addTodo(
      taskName.trim(),
      date,
      description.trim(),
      "Medium"
    );

    clearForm();
    setShowAddForm(false);
  }


 
  function handleEdit(todo) {
    setSelectedTodo(todo);

    setTaskName(todo.title || "");
    setDescription(todo.description || "");
    setDate(todo.date || "");

    setShowEditForm(true);
  }



  function handleSave() {
    if (taskName.trim() === "") {
      alert("Please enter task name");
      return;
    }

    if (description.trim() === "") {
      alert("Please enter description");
      return;
    }

    if (date === "") {
      alert("Please select date");
      return;
    }

    if (!selectedTodo) {
      return;
    }

    updateTodo({
      id: selectedTodo.id,
      title: taskName.trim(),
      description: description.trim(),
      date: date,
      priority: selectedTodo.priority || "Medium"
    });

    clearForm();
    setShowEditForm(false);
    setSelectedTodo(null);
  }


  
  function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmDelete) {
      deleteTodo(id);
    }
  }


  function handleCancel() {
    clearForm();

    setShowAddForm(false);
    setShowEditForm(false);
    setSelectedTodo(null);
  }


  return (
    <div
      className="dashboard-content"
      style={{
        height: "100vh",
        overflow: "hidden",
        boxSizing: "border-box"
      }}
    >

     

      <div className="dashboard-header">

        <h1>Dashboard</h1>

        <button
          type="button"
          className="add-btn"
          onClick={function () {
            clearForm();
            setShowAddForm(true);
          }}
        >
          + Add
        </button>

      </div>
    <div className="stats-container">

        <div className="stat-card">
          <h3>Total Tasks</h3>
          <h2>{activeTodos.length}</h2>
        </div>

        <div className="stat-card">
          <h3>Pending</h3>
          <h2>{pending}</h2>
        </div>

        <div className="stat-card">
          <h3>Completed</h3>
          <h2>{completed}</h2>
        </div>

        <div className="stat-card">
          <h3>Deleted</h3>
          <h2>{deleted}</h2>
        </div>

      </div>



      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.08)"
        }}
      >

        <h2
          style={{
            marginTop: "0",
            marginBottom: "15px"
          }}
        >
          My Tasks
        </h2>




        <div
          style={{
            height: "300px",
            overflowY: "auto",
            overflowX: "auto",
            border: "1px solid #ddd",
            borderRadius: "6px"
          }}
        >

          <table
            className="task-table"
            style={{
              width: "100%",
              minWidth: "800px",
              borderCollapse: "collapse"
            }}
          >


            <thead>

              <tr>

                <th
                  style={{
                    position: "sticky",
                    top: "0",
                    background: "#f5f5f5",
                    zIndex: 5,
                    padding: "12px"
                  }}
                >
                  No
                </th>

                <th
                  style={{
                    position: "sticky",
                    top: "0",
                    background: "#f5f5f5",
                    zIndex: 5,
                    padding: "12px"
                  }}
                >
                  Task Name
                </th>

                <th
                  style={{
                    position: "sticky",
                    top: "0",
                    background: "#f5f5f5",
                    zIndex: 5,
                    padding: "12px"
                  }}
                >
                  Description
                </th>

                <th
                  style={{
                    position: "sticky",
                    top: "0",
                    background: "#f5f5f5",
                    zIndex: 5,
                    padding: "12px"
                  }}
                >
                  Date
                </th>

                <th
                  style={{
                    position: "sticky",
                    top: "0",
                    background: "#f5f5f5",
                    zIndex: 5,
                    padding: "12px"
                  }}
                >
                  Status
                </th>

                <th
                  style={{
                    position: "sticky",
                    top: "0",
                    background: "#f5f5f5",
                    zIndex: 5,
                    padding: "12px"
                  }}
                >
                  Edit
                </th>

                <th
                  style={{
                    position: "sticky",
                    top: "0",
                    background: "#f5f5f5",
                    zIndex: 5,
                    padding: "12px"
                  }}
                >
                  Delete
                </th>

              </tr>

            </thead>


         

            <tbody>

              {activeTodos.length === 0 ? (

                <tr>

                  <td
                    colSpan="7"
                    style={{
                      textAlign: "center",
                      padding: "30px",
                      color: "#777"
                    }}
                  >
                    No tasks available
                  </td>

                </tr>

              ) : (

                activeTodos.map(function (todo, index) {

                  return (

                    <tr key={todo.id}>

                    

                      <td
                        style={{
                          padding: "12px",
                          borderBottom: "1px solid #ddd"
                        }}
                      >
                        {index + 1}
                      </td>


                    

                      <td
                        style={{
                          padding: "12px",
                          borderBottom: "1px solid #ddd"
                        }}
                      >
                        {todo.title}
                      </td>


                

                      <td
                        style={{
                          padding: "12px",
                          borderBottom: "1px solid #ddd"
                        }}
                      >
                        {todo.description || "-"}
                      </td>


                   

                      <td
                        style={{
                          padding: "12px",
                          borderBottom: "1px solid #ddd"
                        }}
                      >
                        {todo.date}
                      </td>


                     

                      <td
                        style={{
                          padding: "12px",
                          borderBottom: "1px solid #ddd"
                        }}
                      >

                        <span
                          className={
                            todo.status === "Completed"
                              ? "status-completed"
                              : "status-pending"
                          }
                        >
                          {todo.status}
                        </span>

                      </td>


                  

                      <td
                        style={{
                          padding: "12px",
                          textAlign: "center",
                          borderBottom: "1px solid #ddd"
                        }}
                      >

                        <button
                          type="button"
                          className="edit-icon-btn"
                          onClick={function () {
                            handleEdit(todo);
                          }}
                          title="Edit"
                        >
                          ✏️
                        </button>

                      </td>


                    

                      <td
                        style={{
                          padding: "12px",
                          textAlign: "center",
                          borderBottom: "1px solid #ddd"
                        }}
                      >

                        <button
                          type="button"
                          className="delete-icon-btn"
                          onClick={function () {
                            handleDelete(todo.id);
                          }}
                          title="Delete"
                        >
                          🗑️
                        </button>

                      </td>

                    </tr>

                  );

                })

              )}

            </tbody>

          </table>

        </div>

      </div>



      {showAddForm && (

        <div className="edit-overlay">

          <div className="edit-form">

            <h2>Add New Task</h2>


            <label>
              Task Name
            </label>

            <input
              type="text"
              value={taskName}
              onChange={function (e) {
                setTaskName(e.target.value);
              }}
              placeholder="Enter task name"
            />


            <label>
              Description
            </label>

            <textarea
              value={description}
              onChange={function (e) {
                setDescription(e.target.value);
              }}
              placeholder="Enter description"
            />


            <label>
              Date
            </label>

            <input
              type="date"
              value={date}
              onChange={function (e) {
                setDate(e.target.value);
              }}
            />


            <div className="edit-form-buttons">

              <button
                type="button"
                className="cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>

              <button
                type="button"
                className="save-btn"
                onClick={handleAdd}
              >
                Add
              </button>

            </div>

          </div>

        </div>

      )}


  

      {showEditForm && (

        <div className="edit-overlay">

          <div className="edit-form">

            <h2>Edit Task</h2>


            <label>
              Task Name
            </label>

            <input
              type="text"
              value={taskName}
              onChange={function (e) {
                setTaskName(e.target.value);
              }}
              placeholder="Enter task name"
            />


            <label>
              Description
            </label>

            <textarea
              value={description}
              onChange={function (e) {
                setDescription(e.target.value);
              }}
              placeholder="Enter description"
            />


            <label>
              Date
            </label>

            <input
              type="date"
              value={date}
              onChange={function (e) {
                setDate(e.target.value);
              }}
            />


            <div className="edit-form-buttons">

              <button
                type="button"
                className="cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>

              <button
                type="button"
                className="save-btn"
                onClick={handleSave}
              >
                Save
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Dashboard;













