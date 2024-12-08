import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("work");
  const [deadline, setDeadline] = useState("");

  return (
    <section id="task-input">
      <h2>Add a Task</h2>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="urgent">Urgent</option>
      </select>
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button onClick={() => addTask({ task, category, deadline })}>
        Add Task
      </button>
    </section>
  );
};

export default TaskInput;
