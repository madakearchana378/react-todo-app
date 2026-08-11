import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

 import { FaHome,
    FaTasks,
    FaCheckCircle,
    FaClock,
    FaCog, FaSignOutAlt } from "react-icons/fa";



function Sidebar() {
 function handleLogout() {
        localStorage.removeItem("isLoggedIn");
        window.location.href = "/";
 }

 const navigate = useNavigate();
 function handleClick(path) {
    navigate(path);
  }

  return (
    <div className="sidebar">

      <h2>Todo App</h2>

      <ul>

        <li onClick={()=>handleClick("/dashboard")}><FaHome /><span>Dashboard</span></li>

        <li onClick={()=>handleClick("/alltasks")}> <FaTasks /><span>AllTasks</span></li>

        
        <li onClick={()=>handleClick("/completed")}><FaCheckCircle /><span>Completed</span></li>

        <li onClick={()=>handleClick("/pending")}>    <FaClock /><span>Pending</span></li>

        <li onClick={()=>handleClick("/settings")}><FaCog /><span>Settings</span></li>

      </ul>

      <hr />
      

            <button className="logout-btn" style={{
        position: "absolute",
        bottom: "0",
        left: "0",
        width: "100%"
    }} onClick={handleLogout}>
                <FaSignOutAlt />
                <span>Logout</span>
            </button>

    </div>
  );
}

export default Sidebar;