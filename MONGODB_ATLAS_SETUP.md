# 🔗 MongoDB Atlas Connection Setup

Your MongoDB Atlas cluster is ready! Follow these steps to connect your app.

## Step 1: Get Your Database Password 🔐

1. Go to MongoDB Atlas: https://cloud.mongodb.com
2. Log in with your account
3. Go to **Database Access** (left sidebar)
4. Find user "Vaishnavi"
5. Click the **Edit** button (pencil icon)
6. Click **Edit Password**
7. Copy the new password (or reset if you forgot)
8. **Save it somewhere safe!**

## Step 2: Update `.env` File ⚙️

In `backend/.env`, replace `<YOUR_PASSWORD>` with your actual password:

**Current:**
```
MONGO_URI=mongodb+srv://Vaishnavi:<YOUR_PASSWORD>@cluster0.sp9w01t.mongodb.net/mini-task-app?retryWrites=true&w=majority
```

**After update:**
```
MONGO_URI=mongodb+srv://Vaishnavi:YourActualPassword123@cluster0.sp9w01t.mongodb.net/mini-task-app?retryWrites=true&w=majority
```

## Step 3: Check Network Access 🌐

Your IP might need to be whitelisted:

1. Go to MongoDB Atlas
2. Click **Network Access** (left sidebar)
3. Click **Add IP Address**
4. Click **Allow Access from Anywhere** (for development)
5. Click **Confirm**

> ⚠️ For production, use your specific IP address instead

## Step 4: Start Your Backend 🚀

```bash
cd backend
npm start
```

### Expected Output:
```
✅ MongoDB connected
✅ Server running on port 5000
```

If you see this, you're connected! 🎉

## Step 5: Test Your App 🧪

```bash
# Terminal 2: Start frontend
cd frontend
npm start
```

1. Open http://localhost:3000
2. Add a task
3. Refresh the page
4. Task should still be there! (saved in MongoDB)

---

## Troubleshooting 🔧

### Error: "Authentication failed"

**Solution:**
- Check password is correct in `.env`
- Make sure you copied the entire password
- Password might have special characters - check the brackets

### Error: "Unable to connect to server"

**Solution:**
1. Check IP whitelist in MongoDB Atlas
2. Click **Network Access** → verify your IP is there
3. If using "Allow Access from Anywhere", wait 5 minutes

### Error: "Database does not exist"

**Solution:** No action needed - MongoDB creates database automatically on first write

---

## Connection String Explanation 📝

```
mongodb+srv://
├─ Username: Vaishnavi
├─ Password: <YOUR_PASSWORD>
├─ Host: cluster0.sp9w01t.mongodb.net
├─ Database: mini-task-app
└─ Options: retryWrites=true&w=majority
```

---

## Security Tips 🔒

✅ **DO:**
- Keep password safe
- Don't share `.env` file
- Use environment variables in production

❌ **DON'T:**
- Commit `.env` to GitHub (already in .gitignore)
- Share your password
- Use weak passwords

---

## Next Steps 🎯

1. ✅ Add password to `.env`
2. ✅ Check network access
3. ✅ Start backend: `npm start`
4. ✅ Test your app
5. ➡️ Deploy to Railway/Render (see DEPLOY.md)

---

## View Your Data 👀

To see tasks in MongoDB Atlas:

1. Go to https://cloud.mongodb.com
2. Click **Databases**
3. Click **Browse Collections**
4. Expand `mini-task-app` → `tasks`
5. View your task data!

Or use **MongoDB Compass** (free GUI):
- Download: https://www.mongodb.com/products/compass
- Paste connection string
- Browse visually

---

## Production Deployment 🌐

When deploying to Railway/Render:

1. Add environment variable `MONGO_URI` to platform
2. Use this connection string
3. Backend automatically connects!

No code changes needed!

---

**Your app is now connected to MongoDB Atlas!** 🎊
