import React, { useState } from "react";
import { api } from "../utils/api";

export default function TaskForm({ loadTasks }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addTask = async (e) => {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return;

    try {
      await api.addTask(trimmed, desc.trim());
      setTitle("");
      setDesc("");
      loadTasks();
    } catch (err) {
      console.error("Add failed:", err);
    }
  };

  return (
    <form onSubmit={addTask} className="task-form">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input"
        placeholder="Task title (required)"
      />
      <input
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="input"
        placeholder="Short description (optional)"
      />
      <button className="btn" type="submit">Add</button>
    </form>
  );
}
