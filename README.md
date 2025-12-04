# Mini Task Manager ⏱️

A beautiful, modern task management app with timer functionality and motivational quotes.

## Features ✨

- ✅ Create and manage tasks
- ⏱️ Track time spent on each task
- 💡 Daily motivational quotes for inspiration
- 🔍 Search tasks instantly
- ✔️ Mark tasks as complete
- 🗑️ Delete tasks easily
- 🎨 Beautiful gradient UI with smooth animations

## Quick Start 🚀

### Prerequisites
- Node.js (v14+)
- npm

### Installation

```bash
# Backend
cd backend
npm install
npm start

# Frontend (in new terminal)
cd frontend
npm install
npm start
```

The app will open at `http://localhost:3000`

## How to Use 💡

1. **Add Task**: Enter title and description, click "Add"
2. **Start Timer**: Click "Start" to track time on a task
3. **Stop Timer**: Click "Stop" to pause timing
4. **Save Time**: Click "Save" to persist the time
5. **Complete Task**: Check the checkbox to mark as done
6. **Search**: Use the search bar to find tasks
7. **Delete**: Click "Delete" to remove a task

## Tech Stack 🛠️

- **Frontend**: React, CSS3 (Gradients & Animations)
- **Backend**: Node.js, Express.js
- **Data**: JSON file storage
- **Hosting**: Ready for GitHub Pages + Railway/Render

## API Endpoints 📡

- `GET /tasks` - Get all tasks
- `POST /tasks` - Create task
- `PUT /tasks/:id` - Update task
- `DELETE /tasks/:id` - Delete task

## Deployment 🌐

### Deploy to GitHub Pages (Frontend)

```bash
cd frontend
npm install --save-dev gh-pages
npm run deploy
```

Update `package.json`:
```json
"homepage": "https://YOUR_USERNAME.github.io/mini-task-app/"
```

### Deploy Backend

Use Railway.app, Render.com, or Heroku (free tier available)

## License 📄

MIT License - Feel free to use this project for anything!

---

**Happy Task Managing!** 🚀
