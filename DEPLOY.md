# Deploy Mini Task Manager 🚀

Make your task manager public in 3 simple steps!

## Step 1: Deploy Backend (5-10 mins)

Choose ONE option:

### Option A: Railway.app (Easiest ⭐)
```
1. Visit https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select "Rimi-sri/mini-task-app"
5. Railway auto-deploys!
6. Copy the deployed URL (e.g., https://mini-task-app-prod.up.railway.app)
```

### Option B: Render.com
```
1. Visit https://render.com
2. Create "Web Service"
3. Connect your GitHub repo
4. Set start command: node backend/server.js
5. Deploy and copy URL
```

### Option C: Heroku
```
1. Visit https://www.heroku.com
2. Create new app
3. Connect GitHub repo
4. Deploy main branch
5. Copy app URL
```

## Step 2: Deploy Frontend (5 mins)

```bash
cd frontend

npm install --save-dev gh-pages

npm run deploy
```

Your app is now live at: `https://Rimi-sri.github.io/mini-task-app/`

## Step 3: Connect Backend & Frontend (5 mins)

### Update Frontend Environment Variable

Create `frontend/.env`:
```
REACT_APP_API_URL=https://your-deployed-backend-url
```

Replace `your-deployed-backend-url` with the URL from Step 1.

### Update API Calls

Edit `frontend/src/App.js`:
```javascript
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
```

Update fetch calls in components:
- `frontend/src/components/TaskForm.jsx`
- `frontend/src/components/TaskItem.jsx`

### Redeploy Frontend

```bash
cd frontend
npm run deploy
```

---

## Testing ✅

1. Open: `https://Rimi-sri.github.io/mini-task-app/`
2. Add a task
3. Click "Start" button
4. Wait 10 seconds
5. Click "Stop"
6. Click "Save"
7. Refresh page - time should persist!

---

## Your Live App 🌟

- **GitHub Repo**: https://github.com/Rimi-sri/mini-task-app
- **Live App**: https://Rimi-sri.github.io/mini-task-app/
- **API Server**: Your chosen hosting URL

---

**Total Time**: ~20 minutes from start to fully deployed! ⚡
