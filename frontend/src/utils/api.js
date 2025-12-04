const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const api = {
  getTasks: () => fetch(`${API_URL}/tasks`).then(r => r.json()),
  
  addTask: (title, description) =>
    fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    }).then(r => r.json()),
  
  updateTask: (id, data) =>
    fetch(`${API_URL}/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(r => r.json()),
  
  deleteTask: (id) =>
    fetch(`${API_URL}/tasks/${id}`, {
      method: "DELETE",
    }).then(r => r.json()),
};
