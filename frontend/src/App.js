import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";
import StreakCalendar from "./components/StreakCalendar";
import ProgressCharacter from "./components/ProgressCharacter";
import { getRandomQuote } from "./utils/quotes";

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [quote, setQuote] = useState("");

  // Load tasks from backend
  const loadTasks = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";
      const res = await fetch(`${apiUrl}/tasks`);
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
    // Refresh quote every minute
    const quoteInterval = setInterval(() => setQuote(getRandomQuote()), 60000);
    return () => clearInterval(quoteInterval);
  }, []);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <div className="card">
        {/* Header */}
        <div className="app-header">
          <h1 className="title">🎯 StudyFlow</h1>
          <div className="quote-container">
            <p className="quote">✨ {quote}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="content-wrapper">
          {/* Main Section */}
          <div className="main-section">
            <TaskForm loadTasks={loadTasks} />
            <SearchBar search={search} setSearch={setSearch} />
            <TaskList tasks={filteredTasks} search={search} loadTasks={loadTasks} />
          </div>

          {/* Sidebar Section */}
          <div className="sidebar-section">
            <ProgressCharacter tasks={tasks} />
            <StreakCalendar tasks={tasks} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
