# Quick Start Guide 🚀

## Local Development

### 1. Start Backend Server

```powershell
cd backend
npm install
npm start
```

Server will run on `http://localhost:5000`

### 2. Start Frontend (in another terminal)

```powershell
cd frontend
npm install
npm start
```

App will open on `http://localhost:3000`

## Features

### Timer Functionality ⏱️

1. **Start Timer** - Click "Start" button to begin tracking time
2. **Stop Timer** - Click "Stop" to pause the timer
3. **Save Time** - Click "Save" to persist time to database
4. **Reset Timer** - Click "Reset" to clear the timer

The timer will:
- Show time in format: `Xh Ym Zs`
- Only work on incomplete tasks
- Automatically save to the backend when "Save" is clicked

### Search Tasks 🔍

- Type in the search box to filter tasks
- Search works on task titles

### Mark Complete ✅

- Check the checkbox to mark task as complete
- Completed tasks appear greyed out
- Timer is disabled for completed tasks

### Delete Tasks 🗑️

- Click "Delete" button to remove a task
- Confirmation dialog will appear

## Project Structure

```
mini-task-app/
├── backend/
│   ├── server.js          # Express server
│   ├── tasks.json         # Data storage
│   └── package.json       # Backend dependencies
│
├── frontend/
│   ├── src/
│   │   ├── App.js         # Main app component
│   │   ├── index.js       # React entry point
│   │   ├── index.css      # Styling
│   │   └── components/    # Reusable components
│   │       ├── TaskForm.jsx
│   │       ├── TaskItem.jsx (with timer)
│   │       ├── TaskList.jsx
│   │       └── SearchBar.jsx
│   └── package.json       # Frontend dependencies
│
├── README.md              # Project documentation
├── DEPLOYMENT_GUIDE.md    # How to deploy to GitHub & public
└── ENV_SETUP.md          # Environment variables guide
```

## Available Scripts

### Backend
```powershell
npm start          # Start development server (port 5000)
```

### Frontend
```powershell
npm start          # Start dev server (port 3000)
npm run build      # Create production build
npm run deploy     # Deploy to GitHub Pages (after setup)
```

## API Endpoints

### Get All Tasks
```
GET http://localhost:5000/tasks
```

### Create Task
```
POST http://localhost:5000/tasks
Body: {
  "title": "My Task",
  "description": "Task description",
  "timeSpent": 0
}
```

### Update Task (toggle completion or save time)
```
PUT http://localhost:5000/tasks/:id
Body: {
  "completed": true,
  "timeSpent": 3661  // 1 hour, 1 minute, 1 second
}
```

### Delete Task
```
DELETE http://localhost:5000/tasks/:id
```

## Deployment

For step-by-step deployment instructions, see `DEPLOYMENT_GUIDE.md`

### Quick Links:
- **Make Public**: Push to GitHub
- **Host Frontend**: GitHub Pages (free)
- **Host Backend**: Railway, Heroku, or Render (free tier available)

## Troubleshooting

### Backend not connecting
- Ensure backend is running on port 5000
- Check CORS settings in `backend/server.js`
- Check browser console for errors

### Timer not saving
- Click "Save" button after stopping timer
- Check network tab in DevTools
- Verify backend is receiving PUT request

### Port already in use
```powershell
# Kill process on port 5000 (backend)
Get-Process -Id (Get-NetTCPConnection -LocalPort 5000).OwningProcess | Stop-Process

# Kill process on port 3000 (frontend)
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process
```

## Next Steps

1. ✅ Get the app running locally
2. 📤 Push to GitHub (see DEPLOYMENT_GUIDE.md)
3. 🌐 Deploy to public hosting
4. 🎉 Share with friends!

## Need Help?

- Check `DEPLOYMENT_GUIDE.md` for deployment issues
- Check `README.md` for feature documentation
- Check browser console for error messages
- Review `ENV_SETUP.md` for environment variable issues

---

Happy coding! 💻✨
