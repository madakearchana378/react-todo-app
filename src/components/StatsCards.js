import React from "react";

function StatsCards({ todos }) {

  const total = todos.length;

  const completed = todos.filter(function(todo){
    return todo.completed;
  }).length;

  const pending = total - completed;

  return (

    <div className="cards">

      <div className="card">
        <h3>Total</h3>
        <h1>{total}</h1>
      </div>

      <div className="card">
        <h3>Completed</h3>
        <h1>{completed}</h1>
      </div>

      <div className="card">
        <h3>Pending</h3>
        <h1>{pending}</h1>
      </div>

    </div>

  );

}

export default StatsCards;