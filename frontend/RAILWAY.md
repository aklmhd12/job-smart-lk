# JobSmart.lk Frontend on Railway

This folder is a Vite + React frontend and is intended to be deployed as a separate Railway service from the same repository.

## Railway settings

- Root Directory: `/frontend`
- Build Command: `npm run build` (Railway can also detect the package script automatically)
- Start Command: `npm start`
- Generate a public domain under Networking.
- Add `VITE_API_URL` with the public URL of the backend service.

Example:

`VITE_API_URL=https://your-backend.up.railway.app`

The backend service should use root directory `/backend` and set `ALLOWED_ORIGINS` to the frontend's public domain.
