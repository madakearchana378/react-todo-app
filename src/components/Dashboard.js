import React, { useState } from "react";
import Navbar from "./Navbar";
import StatsCards from "./StatsCards";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "../Dashboard.css";

function Dashboard() {

  const [todos, setTodos] = useState([]);

  function addTodo(text) {

    if (text.trim() === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: text,
      completed: false
    };

    setTodos([...todos, newTodo]);
  }

  function deleteTodo(id) {

    const updatedTodos = todos.filter( (todo)=> {
      return todo.id !== id;
    });

    setTodos(updatedTodos);
  }

  function toggleTodo(id) {

    const updatedTodos = todos.map( (todo)=> {

      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  return (
    <div className="main">

      <Navbar />

      <StatsCards todos={todos} />

      <TodoInput addTodo={addTodo} />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />

    </div>
  );
}

export default Dashboard;



