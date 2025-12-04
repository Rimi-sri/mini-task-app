# 🚀 StudyFlow - Complete Deployment Guide

## Live App URLs

### ✅ Frontend (Already Live!)
**GitHub Pages:** https://rimi-sri.github.io/mini-task-app

The frontend is now live and can be accessed from anywhere!

---

## Backend Deployment (Manual Setup Required)

Your backend needs to be deployed for the app to work fully. Choose one of these free options:

### Option 1: Deploy to Render.com (Recommended ⭐)

1. **Go to Render.com**
   - Visit: https://render.com
   - Sign up with GitHub account

2. **Create New Web Service**
   - Click "New Web Service"
   - Select your `mini-task-app` GitHub repository
   - Click "Connect"

3. **Configure Service**
   - **Name:** `studyflow-backend`
   - **Root Directory:** `backend`
   - **Runtime:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Plan:** Free

4. **Environment Variables**
   - No environment variables needed (uses local JSON storage)
   - Click "Create Web Service"

5. **Wait for Deployment**
   - Render will deploy automatically
   - You'll get a URL like: `https://studyflow-backend.onrender.com`
   - Copy this URL!

6. **Update Frontend**
   ```bash
   # Update .env.production
   REACT_APP_API_URL=https://studyflow-backend.onrender.com
   ```

---

### Option 2: Deploy to Railway.app

1. **Go to Railway.app**
   - Visit: https://railway.app
   - Sign up with GitHub

2. **Create New Project**
   - Click "Create New Project"
   - Select "GitHub Repository"
   - Choose `mini-task-app`

3. **Configure**
   - Add service: Node.js
   - Root directory: `backend`
   - Build command: `npm install`
   - Start command: `node server.js`

4. **Get URL**
   - Railway provides a public URL
   - Update frontend .env.production with this URL

---

### Option 3: Deploy to Heroku

1. **Install Heroku CLI**
   ```bash
   choco install heroku-cli
   ```

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create App**
   ```bash
   heroku create studyflow-backend
   ```

4. **Deploy**
   ```bash
   git push heroku main
   ```

5. **Get URL**
   - Heroku provides your app URL
   - Usually: `https://studyflow-backend.herokuapp.com`

---

## Final Steps (After Backend Deployment)

1. **Update Frontend Environment**
   ```bash
   # Edit frontend/.env.production
   REACT_APP_API_URL=YOUR_BACKEND_URL
   ```

2. **Rebuild & Deploy**
   ```bash
   cd frontend
   npm run deploy
   ```

3. **Test Live App**
   - Open: https://rimi-sri.github.io/mini-task-app
   - Try adding a task
   - It should now work with your live backend!

---

## Local Development (After Deployment)

To test locally with production backend:

```bash
# Terminal 1: Backend
cd backend
node server.js
# Runs on http://localhost:5000

# Terminal 2: Frontend (uses .env.local)
cd frontend
npm start
# Runs on http://localhost:3001
# Uses localhost:5000 API (from .env.local)
```

---

## Environment Files

```
frontend/
├── .env              # Default (development)
├── .env.local        # Local development (localhost)
├── .env.production   # Production (render.com)
```

---

## Troubleshooting

### Frontend loads but can't add tasks
- Backend might not be deployed
- Check browser console for API errors
- Make sure REACT_APP_API_URL is correct

### Backend CORS errors
- Already configured in server.js
- Should work with any frontend URL

### Tasks not persisting
- Check backend logs
- Make sure backend is running
- Try refreshing page

---

## 🎯 Quick Checklist

- [ ] Frontend deployed to GitHub Pages ✅ (Done!)
- [ ] Backend deployed to Render/Railway/Heroku
- [ ] Update .env.production with backend URL
- [ ] Run `npm run deploy` in frontend folder
- [ ] Test live app: https://rimi-sri.github.io/mini-task-app
- [ ] Add a task and verify it works

---

## Important Notes

- **Frontend:** Already live on GitHub Pages
- **Backend:** Choose one hosting provider above
- **Data Storage:** Uses JSON file (no database needed)
- **Cold Start:** Free tier services might have 30-second startup delay

---

## Support

If you need help:
1. Check browser developer console (F12) for errors
2. Check backend logs on Render/Railway/Heroku
3. Verify API URL is correct in .env.production
4. Make sure backend service is running

Congratulations! Your StudyFlow app is ready for production! 🎉
