import App from "./App.css";
import ToDo from "/ToDo.css"

function Todo() {
  return (
    <div className="container">
      <div className="todo-box">

        <h2>My Tasks</h2>
        <p className="count">3 of 5 remaining</p>

        <div className="add-task">
          <input
            type="text"
            placeholder="Add a new task..."
          />
          <button>+</button>
        </div>

        <div className="tabs">
          <button className="active">All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>

        <div className="task">
          <input type="checkbox" />
          <div className="task-text">
            <h4>Set up React project with Vite</h4>
            <p>Due tomorrow</p>
          </div>
          <span className="high">High</span>
          <button>✏️</button>
          <button>🗑️</button>
        </div>

        <div className="task">
          <input type="checkbox" />
          <div className="task-text">
            <h4>Build TodoInput and TodoList</h4>
          </div>
          <span className="medium">Medium</span>
          <button>✏️</button>
          <button>🗑️</button>
        </div>

        <div className="task">
          <input type="checkbox" />
          <div className="task-text">
            <h4>Add localStorage persistence</h4>
          </div>
          <span className="low">Low</span>
          <button>✏️</button>
          <button>🗑️</button>
        </div>

      </div>
    </div>
  );
}

export default Todo;