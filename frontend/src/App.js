import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";
import { getRandomQuote } from "./utils/quotes";

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [quote, setQuote] = useState("");

  // Load tasks from backend
  const loadTasks = async () => {
    try {
     const res = await fetch("http://localhost:5000/tasks");

      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.error("Failed to load tasks:", err);
      setTasks([]);
    }
  };

  useEffect(() => {
    loadTasks();
    setQuote(getRandomQuote());
  }, []);

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">Mini Task Manager</h1>
        <div className="quote-container">
          <p className="quote">💡 {quote}</p>
        </div>

        <TaskForm loadTasks={loadTasks} />

        <SearchBar search={search} setSearch={setSearch} />

        <TaskList tasks={tasks} search={search} loadTasks={loadTasks} />
      </div>
    </div>
  );
}

export default App;
