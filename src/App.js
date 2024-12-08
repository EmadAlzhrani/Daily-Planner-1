import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import QuoteSection from "./components/QuoteSection";
import StatisticsPage from "./components/StatisticsPage";
import AboutPage from "./components/AboutPage";
import "./styles.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks([...tasks, task]);
  const removeTask = (index) => setTasks(tasks.filter((_, i) => i !== index));

  const stats = {
    total: tasks.length,
    work: tasks.filter((t) => t.category === "work").length,
    personal: tasks.filter((t) => t.category === "personal").length,
    urgent: tasks.filter((t) => t.category === "urgent").length,
    deadlines: tasks.filter((t) => new Date(t.deadline) > new Date()).length,
  };

  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
              <QuoteSection />
              <TaskInput addTask={addTask} />
              <TaskList tasks={tasks} removeTask={removeTask} />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <QuoteSection />
              <TaskInput addTask={addTask} />
              <TaskList tasks={tasks} removeTask={removeTask} />
            </>
          }
        />
        {/* About Page Route */}
        <Route path="/about" element={<AboutPage />} />
        {/* Statistics Page Route */}
        <Route path="/stats" element={<StatisticsPage stats={stats} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
