# Environment Variables Setup

## Backend (.env file)

Create a `.env` file in the `backend/` folder:

```
PORT=5000
NODE_ENV=development
```

## Frontend (.env file)

Create a `.env` file in the `frontend/` folder:

```
REACT_APP_API_URL=http://localhost:5000
```

### For Deployed Backend:

Once your backend is deployed, update the frontend `.env`:

```
REACT_APP_API_URL=https://your-deployed-backend-url
```

Replace `your-deployed-backend-url` with actual deployed URL from:
- Railway.app
- Heroku
- Render.com
- Or any other hosting

## Important Notes

1. Never commit `.env` files to GitHub (use `.gitignore`)
2. Create `.env` files locally on your machine
3. On deployment platforms, set environment variables in dashboard
4. Never expose sensitive information

## Do NOT commit these files!

The `.gitignore` already excludes `.env` files, so they won't be pushed to GitHub.
