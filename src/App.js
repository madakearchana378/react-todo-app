import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AllTasks from "./components/All Tasks";
import Completed from "./components/Completed";
import Pending from "./components/Pending";
import Settings from "./components/Settings";
import Layout from "./components/Layout";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
      <Route path="alltasks" element={<Layout><AllTasks /></Layout>} />
      <Route path="/completed" element={<Layout><Completed /></Layout>} />
      <Route path="/pending" element={<Layout><Pending /></Layout>} />
      <Route path="/settings" element={<Layout><Settings /></Layout>} />
    </Routes>
  );
}

export default App;