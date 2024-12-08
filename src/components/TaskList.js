import React, { useState } from "react";

const TaskList = ({ tasks, removeTask }) => {
  const [completedTasks, setCompletedTasks] = useState([]);

  const toggleDone = (index) => {
    setCompletedTasks(
      (prev) =>
        prev.includes(index)
          ? prev.filter((taskIndex) => taskIndex !== index) // Remove index (mark undone)
          : [...prev, index] // Add index (mark done)
    );
  };

  return (
    <section id="task-list">
      <h2>Your Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              backgroundColor: completedTasks.includes(index)
                ? "lightgreen"
                : "white",
            }}
          >
            <span>
              {task.task} - <strong>{task.category}</strong> (Due:{" "}
              {task.deadline})
            </span>
            <div>
              <button onClick={() => toggleDone(index)}>
                {completedTasks.includes(index) ? "Done" : "Done"}
              </button>
              <button onClick={() => removeTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TaskList;
