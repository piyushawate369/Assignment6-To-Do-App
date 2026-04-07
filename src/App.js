import React, { useState } from "react";
import "./App.css";

function TodoApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    let updatedTasks = [...tasks, task];
    updatedTasks.sort();

    setTasks(updatedTasks);
    setTask("");
  };

  const deleteTask = (index) => {
    let updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <div className="todo-card">
        <h2>My Tasks</h2>

        <div className="input-section">
          <input
            type="text"
            placeholder="Add a new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
          <button onClick={addTask}>Add</button>
        </div>

        {tasks.length === 0 ? (
          <p className="empty">No tasks yet 🚀</p>
        ) : (
          <ul>
            {tasks.map((t, index) => (
              <li key={index}>
                <span>{t}</span>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TodoApp;