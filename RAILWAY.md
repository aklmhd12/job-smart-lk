# JobSmart.lk — Railway-ready backend

The backend has been configured for Railway:
- Uses Railway's `PORT`
- Binds to `0.0.0.0`
- Uses `DATABASE_URL`
- PostgreSQL SSL enabled by default
- Health check at `/api/health`
- Graceful shutdown
- `railway.toml` included

Set the Railway service root directory to `backend`.
