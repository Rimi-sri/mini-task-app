const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// File path for tasks storage
const tasksFile = path.join(__dirname, "tasks.json");

// Initialize tasks file if it doesn't exist
if (!fs.existsSync(tasksFile)) {
  fs.writeFileSync(tasksFile, JSON.stringify([]));
}

// Helper function to read tasks
const readTasks = () => {
  try {
    const data = fs.readFileSync(tasksFile, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

// Helper function to write tasks
const writeTasks = (tasks) => {
  fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2));
};

// Get all tasks
app.get("/tasks", (req, res) => {
  try {
    const tasks = readTasks();
    res.json(tasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a task
app.post("/tasks", (req, res) => {
  try {
    const tasks = readTasks();
    const newTask = {
      id: Date.now().toString(),
      title: req.body.title,
      description: req.body.description || "",
      completed: false,
      timeSpent: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    tasks.push(newTask);
    writeTasks(tasks);
    res.json(newTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a task
app.put("/tasks/:id", (req, res) => {
  try {
    const tasks = readTasks();
    const index = tasks.findIndex((t) => t.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: "Task not found" });
    }
    tasks[index] = { ...tasks[index], ...req.body, updatedAt: new Date().toISOString() };
    writeTasks(tasks);
    res.json({ success: true, task: tasks[index] });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a task
app.delete("/tasks/:id", (req, res) => {
  try {
    let tasks = readTasks();
    tasks = tasks.filter((t) => t.id !== req.params.id);
    writeTasks(tasks);
    res.json({ success: true });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
