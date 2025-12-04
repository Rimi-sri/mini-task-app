const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let tasks = [];

// Load tasks from file
try {
  tasks = JSON.parse(fs.readFileSync("tasks.json"));
} catch {
  tasks = [];
}

// Get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Add a task
app.post("/tasks", (req, res) => {
  const task = { id: Date.now(), ...req.body, completed: false };
  tasks.push(task);
  fs.writeFileSync("tasks.json", JSON.stringify(tasks));
  res.json(task);
});

// Update a task
app.put("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.map((t) => (t.id === id ? { ...t, ...req.body } : t));
  fs.writeFileSync("tasks.json", JSON.stringify(tasks));
  res.json({ success: true });
});

// Delete a task
app.delete("/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.filter((t) => t.id !== id);
  fs.writeFileSync("tasks.json", JSON.stringify(tasks));
  res.json({ success: true });
});

app.listen(5000, () => console.log("Server running on port 5000"));
