import React, { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAuth } from "../context/AuthContext";
import "../Dashboard.css";

function Layout({ children }) {
  const [showInfo, setShowInfo] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-right">

        <div className="top-bar">

          {/* <h2>Todo App</h2> */}

          <div
            className="layout-logout-container"
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
          >

         
            {showInfo && (
              <div className="layout-login-info">
                <h4>Login Information</h4>

                <p>
                  <strong>Email:</strong>
                  <br />
                  {user.email || "No email"}
                </p>

                <p>
                  <strong>Password:</strong>
                  <br/>
                  {user.password || "......."}
                </p>
              </div>
            )}

            <button
              className="layout-logout-btn"
              onClick={handleLogout}
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </button>

          </div>

        </div>

      
        <div className="dashboard-content">
          {children}
        </div>

      </div>

    </div>
  );
}

export default Layout;




