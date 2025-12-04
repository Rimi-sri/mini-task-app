# How to Deploy Mini Task Manager to GitHub & Public

This guide will help you make your Mini Task Manager application public on GitHub and deploy it for free hosting.

## Step 1: Create a GitHub Account (if you don't have one)

1. Go to [https://github.com](https://github.com)
2. Click "Sign up"
3. Fill in your details and create an account
4. Verify your email

## Step 2: Create a New Repository on GitHub

1. Log in to GitHub
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. **Repository name**: `mini-task-app` (or any name you prefer)
5. **Description**: "A beautiful task manager app with timer feature"
6. Choose "Public" (to make it public)
7. DO NOT initialize with README (you already have one)
8. Click "Create repository"

## Step 3: Push Your Code to GitHub

### Using Git Command Line:

1. Open PowerShell/Terminal in your project folder
2. Run these commands:

```powershell
# Add your GitHub remote repository
git remote add origin https://github.com/YOUR_USERNAME/mini-task-app.git

# Rename branch to main if needed
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username**

### Example:
```powershell
git remote add origin https://github.com/john123/mini-task-app.git
git branch -M main
git push -u origin main
```

You'll be prompted to authenticate. You can:
- Use GitHub CLI: `gh auth login`
- Or use a Personal Access Token (see below)

## Step 4: Create Personal Access Token (if needed for authentication)

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Name it "git-push"
4. Select scopes: `repo`, `workflow`
5. Click "Generate token"
6. Copy the token and save it somewhere safe
7. Use it as your password when pushing to GitHub

## Step 5: Deploy Frontend to GitHub Pages (Free Hosting)

### Option A: Using GitHub Pages (Easiest)

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set "Build and deployment" to:
   - Source: "GitHub Actions"
4. Create a workflow file for deployment

### Option B: Using `gh-pages` Package

1. In the `frontend` folder:

```powershell
cd frontend

# Install gh-pages
npm install --save-dev gh-pages

# Update package.json homepage
```

2. Edit `frontend/package.json` and add:
```json
"homepage": "https://YOUR_USERNAME.github.io/mini-task-app/",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  ...
}
```

3. Deploy:
```powershell
npm run deploy
```

4. Go to repository Settings → Pages → Select `gh-pages` branch

## Step 6: Deploy Backend (Choose One Option)

### Option 1: Free Tier - Railway.app (Recommended)

1. Go to [https://railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your `mini-task-app` repository
5. Railway will auto-detect Node.js
6. Add environment variables:
   - `NODE_ENV`: `production`
   - `PORT`: `5000`
7. Deploy!
8. Copy the deployed URL from Railway dashboard

### Option 2: Heroku (May have paid plans now)

1. Go to [https://www.heroku.com](https://www.heroku.com)
2. Sign up and create an app
3. Connect to your GitHub repo
4. Deploy main branch
5. Copy the app URL

### Option 3: Render (Free with limits)

1. Go to [https://render.com](https://render.com)
2. Sign up
3. Create "Web Service"
4. Connect GitHub account
5. Select `mini-task-app` repo
6. Set:
   - Start command: `node backend/server.js`
   - Environment: `Node`
7. Deploy!

## Step 7: Update Frontend to Use Deployed Backend

After getting your backend URL (e.g., `https://your-app.railway.app`):

1. Create `.env` file in `frontend/` folder:
```
REACT_APP_API_URL=https://your-deployed-backend-url
```

2. Update `frontend/src/App.js` to use environment variable:
```javascript
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const loadTasks = async () => {
  try {
    const res = await fetch(`${API_URL}/tasks`);
    const data = await res.json();
    setTasks(data);
  } catch (err) {
    console.error("Failed to load tasks:", err);
    setTasks([]);
  }
};
```

3. Update all fetch calls in components to use `API_URL`

4. Redeploy frontend:
```powershell
cd frontend
npm run deploy
```

## Step 8: Update Backend CORS for Deployed Frontend

Edit `backend/server.js`:

```javascript
const cors = require("cors");

const allowedOrigins = [
  "http://localhost:3000",
  "https://YOUR_USERNAME.github.io",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed"));
      }
    },
  })
);
```

Redeploy backend with updated code.

## Step 9: Make Your Repository More Public

### Add Important Files:

Create `LICENSE` file (MIT License):
```
MIT License

Copyright (c) 2025 [Your Name]

Permission is hereby granted, free of charge...
```

Create `.github/workflows/deploy.yml` for CI/CD (optional)

### Update GitHub Profile:

1. Go to your GitHub profile
2. Click "Edit profile"
3. Add bio, links, etc.
4. Pin your `mini-task-app` repository

## Step 10: Share Your Application

You can now share:
- **GitHub Link**: `https://github.com/YOUR_USERNAME/mini-task-app`
- **Live App**: `https://YOUR_USERNAME.github.io/mini-task-app/`
- **Backend API**: `https://your-deployed-backend.com`

## Verify Everything Works

1. Open your live app URL in browser
2. Test adding a task
3. Test timer functionality
4. Check console for any errors

## Troubleshooting

### CORS Errors
- Update backend CORS configuration
- Ensure frontend URL is in allowed origins
- Redeploy backend

### Tasks Not Loading
- Check Network tab in DevTools
- Verify backend is running
- Check backend URL in .env file

### Build Errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check for TypeScript errors

## Future Improvements

1. Add authentication (Firebase, Auth0)
2. Add database (MongoDB, PostgreSQL)
3. Add user profiles
4. Add task categories
5. Add notifications
6. Mobile app (React Native)

---

**Congratulations!** Your app is now public and accessible to everyone! 🎉
