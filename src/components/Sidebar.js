import React from "react";
import { useNavigate } from "react-router-dom";

import {
  FaHome,
  FaTasks,
  FaCheckCircle,
  FaClock,
  FaCog,
   FaTrash
} from "react-icons/fa";

function Sidebar() {

  const navigate = useNavigate();

  function handleClick(path) {
    navigate(path);
  }

  return (
    <div className="sidebar">

      <h2>Todo App</h2>

      <ul>

        <li onClick={() => handleClick("/dashboard")}>
          <FaHome />
          <span>Dashboard</span>
        </li>

        <li onClick={() => handleClick("/alltasks")}>
          <FaTasks />
          <span>AllTasks</span>
        </li>

        <li onClick={() => handleClick("/completed")}>
          <FaCheckCircle />
          <span>Completed</span>
        </li>

        <li onClick={() => handleClick("/pending")}>
          <FaClock />
          <span>Pending</span>
        </li>

        <li onClick={() => handleClick("/deleted")}>
         <FaTrash />
         <span>Deleted</span>
        </li>

        <li onClick={() => handleClick("/settings")}>
          <FaCog />
          <span>Settings</span>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;