import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList({ tasks, search, loadTasks }) {
  const filtered = tasks.filter((t) =>
    (t.title || "").toLowerCase().includes((search || "").toLowerCase())
  );

  if (!tasks.length) {
    return <div className="empty">No tasks yet. Add your first task above.</div>;
  }

  return (
    <div className="task-list">
      {filtered.map((task) => (
        <TaskItem key={task.id} task={task} loadTasks={loadTasks} />
      ))}
    </div>
  );
}
