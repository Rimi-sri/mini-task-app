# 🗄️ Database Setup Guide

Your Mini Task Manager now uses **MongoDB** instead of JSON files. This guide will help you set it up.

## Option 1: MongoDB Local (Easy for Development) 💻

### Step 1: Install MongoDB

**Windows:**
1. Download from: https://www.mongodb.com/try/download/community
2. Run the installer
3. Select "Install MongoDB as a Service"
4. Complete installation

**Mac:**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux:**
```bash
sudo apt-get install mongodb
sudo systemctl start mongodb
```

### Step 2: Verify Installation

Open Command Prompt/Terminal and run:
```bash
mongo --version
```

Should show version number.

### Step 3: Create `.env` File

In `backend/` folder, create `.env`:

```
MONGO_URI=mongodb://localhost:27017/mini-task-app
PORT=5000
NODE_ENV=development
```

### Step 4: Install Dependencies

```bash
cd backend
npm install
```

This installs:
- `mongoose` - MongoDB ODM
- `dotenv` - Environment variables

### Step 5: Start Backend

```bash
npm start
```

Should show:
```
✅ MongoDB connected
✅ Server running on port 5000
```

---

## Option 2: MongoDB Atlas (Cloud - Recommended) ☁️

### Step 1: Create Free Account

1. Visit: https://www.mongodb.com/cloud/atlas
2. Click "Try Free"
3. Sign up with email or Google

### Step 2: Create a Cluster

1. Click "Create a Deployment"
2. Select "Free" (M0 - Always Free)
3. Choose your region (closest to you)
4. Click "Create"
5. Wait 3-5 minutes for cluster to be ready

### Step 3: Create Database User

1. Go to "Database Access"
2. Click "Add New Database User"
3. Create username and password
4. Click "Create User"
5. **Save these credentials!**

### Step 4: Whitelist IP Address

1. Go to "Network Access"
2. Click "Add IP Address"
3. Select "Allow Access from Anywhere"
4. Click "Confirm"

### Step 5: Get Connection String

1. Go to "Databases"
2. Click "Connect"
3. Select "Drivers"
4. Copy the connection string
5. Replace `<password>` with your password

**Example:**
```
mongodb+srv://username:password@cluster0.mongodb.net/mini-task-app?retryWrites=true&w=majority
```

### Step 6: Create `.env` File

In `backend/` folder, create `.env`:

```
MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/mini-task-app?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
```

### Step 7: Install Dependencies & Start

```bash
cd backend
npm install
npm start
```

Should show:
```
✅ MongoDB connected
✅ Server running on port 5000
```

---

## Testing Your Database 🧪

### Test 1: Add a Task

```bash
curl -X POST http://localhost:5000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"My Task","description":"Test task"}'
```

Should return task with `_id` (MongoDB ID).

### Test 2: Get All Tasks

```bash
curl http://localhost:5000/tasks
```

Should return array of tasks.

### Test 3: View in MongoDB

**For Local MongoDB:**
```bash
mongo
use mini-task-app
db.tasks.find()
```

**For MongoDB Atlas:**
Use MongoDB Compass (free GUI tool):
1. Download: https://www.mongodb.com/products/compass
2. Paste connection string
3. Browse your data visually

---

## Frontend Setup

No changes needed! The frontend already works with the new database.

Just make sure:
1. Backend is running (`npm start` in `/backend`)
2. Frontend connects to `http://localhost:5000`

```bash
cd frontend
npm start
```

---

## Database Operations 📊

### Your App Now Supports:

```
POST   /tasks              → Create task (stores in MongoDB)
GET    /tasks              → Get all tasks (from MongoDB)
PUT    /tasks/:id          → Update task (in MongoDB)
DELETE /tasks/:id          → Delete task (from MongoDB)
```

### Task Data Structure:

```json
{
  "_id": "507f1f77bcf86cd799439011",     // MongoDB ID
  "title": "My Task",
  "description": "Task description",
  "completed": false,
  "timeSpent": 3661,
  "createdAt": "2025-12-04T10:30:00Z",
  "updatedAt": "2025-12-04T10:30:00Z"
}
```

---

## Troubleshooting 🔧

### Error: "MONGO_URI not found"

**Solution:** Create `.env` file in `backend/` folder

### Error: "MongoDB connection failed"

**Local MongoDB:**
- Check if MongoDB service is running
- Windows: Services app → look for "MongoDB"
- Mac: `brew services list`

**MongoDB Atlas:**
- Check connection string
- Verify username/password
- Check IP whitelist
- Verify cluster is created

### Error: "Tasks not saving"

**Solution:**
1. Check MongoDB is running
2. Verify `.env` MONGO_URI
3. Check browser console for errors
4. Check backend logs

---

## Switching Between JSON and MongoDB 🔄

If you want to keep JSON file storage:

**Keep using old server:**
```bash
git checkout HEAD~1 -- backend/server.js
```

**Go back to MongoDB:**
```bash
git checkout HEAD -- backend/server.js
```

---

## Performance Comparison 📈

| Aspect | JSON File | MongoDB |
|--------|-----------|---------|
| Speed | Slow (reads whole file) | Fast (indexed) |
| Scalability | Limited (single file) | Unlimited |
| Queries | None (filter in code) | Powerful queries |
| Multi-user | No (lock issues) | Yes |
| Cloud Ready | No | Yes |

---

## Next Steps 🚀

1. ✅ Choose MongoDB Option (Local or Atlas)
2. ✅ Set up `.env` file
3. ✅ Run `npm install` in `/backend`
4. ✅ Start backend: `npm start`
5. ✅ Test with your frontend
6. ✅ Deploy to cloud (uses MongoDB Atlas)

---

## Questions? 💡

- **MongoDB Docs**: https://docs.mongodb.com
- **Mongoose Docs**: https://mongoosejs.com
- **MongoDB Compass**: https://www.mongodb.com/products/compass
- **Troubleshooting**: Check backend console logs

---

**Your app now has professional database storage!** 🎉

Next: Deploy to the cloud and use MongoDB Atlas for your live app.
