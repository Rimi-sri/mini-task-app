# Mini Task Manager 🎯

A beautiful, modern task management application with timer functionality built with React and Node.js/Express.

## Features ✨

- ✅ **Create Tasks** - Add tasks with titles and optional descriptions
- ⏱️ **Task Timer** - Track time spent on each task with start/stop/reset controls
- 🔍 **Search** - Easily find tasks by searching their titles
- ✔️ **Mark Complete** - Check off completed tasks
- 🗑️ **Delete Tasks** - Remove tasks you no longer need
- 📊 **Time Tracking** - Keep track of total time spent on each task
- 🎨 **Beautiful UI** - Modern gradient design with smooth animations

## Tech Stack 🛠️

### Frontend
- **React** - UI library
- **CSS3** - Styling with gradients and animations
- **Fetch API** - Communication with backend

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **JSON** - Data persistence

## Project Structure 📁

```
mini-task-app/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskItem.jsx
│   │   │   ├── TaskList.jsx
│   │   │   └── SearchBar.jsx
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── backend/
│   ├── server.js
│   ├── tasks.json
│   └── package.json
└── README.md
```

## Installation 🚀

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## Usage 💡

1. **Open the application** at `http://localhost:3000`
2. **Add a task** by entering a title and optional description, then click "Add"
3. **Start tracking time** by clicking the "Start" button on any task
4. **Stop the timer** by clicking the "Stop" button
5. **Save the time** to persist it in the database
6. **Complete tasks** by checking the checkbox
7. **Search tasks** using the search bar
8. **Delete tasks** by clicking the "Delete" button

## API Endpoints 📡

### Tasks API

- `GET /tasks` - Get all tasks
- `POST /tasks` - Create a new task
- `PUT /tasks/:id` - Update a task (toggle completion, save time)
- `DELETE /tasks/:id` - Delete a task

### Task Object Structure

```json
{
  "id": "unique-id",
  "title": "Task title",
  "description": "Task description",
  "completed": false,
  "timeSpent": 0,
  "createdAt": "2025-12-04T10:00:00Z"
}
```

## How to Deploy 🌐

### Deploy Frontend to GitHub Pages

1. Update `package.json` in frontend folder:
```json
"homepage": "https://YOUR_USERNAME.github.io/mini-task-app"
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add deploy scripts to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d build",
  "predeploy": "npm run build"
}
```

4. Deploy:
```bash
npm run deploy
```

### Deploy Backend to Heroku

1. Create a `Procfile` in the backend directory:
```
web: node server.js
```

2. Create a `.env` file with:
```
PORT=5000
NODE_ENV=production
```

3. Push to Heroku:
```bash
heroku create your-app-name
git push heroku main
```

### Deploy Backend to Render/Railway

Follow their documentation and set the environment variable:
```
BACKEND_URL=your-deployed-backend-url
```

Then update `REACT_APP_API_URL` in frontend to point to deployed backend.

## Environment Variables 🔐

### Backend (.env)
```
PORT=5000
NODE_ENV=development
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000
```

## Contributing 🤝

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Future Enhancements 🚀

- [ ] User authentication and login
- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] Task priority levels
- [ ] Data export (CSV/PDF)
- [ ] Dark mode toggle
- [ ] Mobile app (React Native)
- [ ] Collaboration features
- [ ] Task dependencies
- [ ] Statistics dashboard

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.

## Author 👤

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

## Support 💬

If you have any questions or suggestions, please open an issue or contact me.

---

Made with ❤️ by [Your Name]
