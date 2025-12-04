import React, { useState, useEffect } from "react";
import { api } from "../utils/api";

export default function TaskItem({ task, loadTasks }) {
  const [timeSpent, setTimeSpent] = useState(task.timeSpent || 0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && !task.completed) {
      interval = setInterval(() => {
        setTimeSpent((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, task.completed]);

  const toggleTimer = () => {
    if (task.completed) {
      alert("Cannot start timer on completed task");
      return;
    }
    setIsRunning(!isRunning);
  };

  const saveTime = async () => {
    try {
      await api.updateTask(task.id, { timeSpent });
      setIsRunning(false);
      loadTasks();
    } catch (err) {
      console.error("Save time failed:", err);
    }
  };

  const resetTimer = () => {
    setTimeSpent(0);
    setIsRunning(false);
  };

  const toggle = async () => {
    try {
      await api.updateTask(task.id, { completed: !task.completed });
      loadTasks();
    } catch (err) {
      console.error("Toggle failed:", err);
    }
  };

  const remove = async () => {
    if (!window.confirm("Delete this task?")) return;
    try {
      await api.deleteTask(task.id);
      loadTasks();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs}h ${mins}m ${secs}s`;
  };

  return (
    <div className={`task-item ${task.completed ? "done" : ""}`}>
      <div className="task-left">
        <input type="checkbox" checked={!!task.completed} onChange={toggle} />
        <div className="task-text">
          <div className="task-title">{task.title}</div>
          {task.description && <div className="task-desc">{task.description}</div>}
          <div className="task-timer">{formatTime(timeSpent)}</div>
        </div>
      </div>

      <div className="task-actions">
        <button onClick={toggleTimer} className={`btn small ${isRunning ? "red" : "green"}`}>
          {isRunning ? "⏹ Stop" : "▶ Start"}
        </button>
        <button onClick={saveTime} className="btn small blue">
          💾 Save
        </button>
        <button onClick={resetTimer} className="btn small">
          🔄 Reset
        </button>
        <button onClick={remove} className="btn small red">
          🗑 Delete
        </button>
      </div>
    </div>
  );
}
