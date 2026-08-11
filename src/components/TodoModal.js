import React, { useState, useEffect } from "react";

function TodoModal({
  isOpen,
  onClose,
  onSave,
  editTodo
}) {

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  useEffect(function () {

    if (editTodo) {

      setTitle(editTodo.title);
      setPriority(editTodo.priority);
      setDueDate(editTodo.dueDate);

    } else {

      setTitle("");
      setPriority("Medium");
      setDueDate("");

    }

  }, [editTodo]);

  function handleSubmit(e) {

    e.preventDefault();

    if (title.trim() === "") {
      alert("Please enter a task");
      return;
    }

    onSave({
      title,
      priority,
      dueDate
    });

    onClose();

  }

  if (!isOpen) {
    return null;
  }

  return (

    <div className="modal-overlay">

      <div className="modal">

        <h2>
          {editTodo ? "Edit Todo" : "Add Todo"}
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Task Name"
            value={title}
            onChange={function (e) {
              setTitle(e.target.value);
            }}
          />

          <select
            value={priority}
            onChange={function (e) {
              setPriority(e.target.value);
            }}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <input
            type="date"
            value={dueDate}
            onChange={function (e) {
              setDueDate(e.target.value);
            }}
          />

          <div className="modal-buttons">

            <button type="submit">
              Save
            </button>

            <button
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>

  );

}

export default TodoModal;