# Railway Deployment

## Backend API

1. Push this repository to GitHub.
2. In Railway, create a new project and deploy the repository.
3. Set the service **Root Directory** to `/backend`.
4. Add a Railway PostgreSQL database and connect it to the backend service.
5. Railway will provide `DATABASE_URL` to the backend.
6. Set `JWT_SECRET` to a long random value.
7. Deploy. Railway should use `npm start` and the `/api/health` health check.
8. After deployment, open:
   - `/`
   - `/api/health`
   - `/api/status`

### Important

The server listens on `0.0.0.0` and uses Railway's dynamic `PORT`, so it is compatible with Railway's web-service networking.

For a local PostgreSQL setup, use `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, and `DB_NAME`.
Set `DB_SSL=false` locally if your PostgreSQL server does not use SSL.

## Database

Run `database/schema.sql` against the Railway PostgreSQL database using Railway's PostgreSQL connection details or a PostgreSQL client.

## Frontend

The supplied frontend is only an MVP React component and does not currently contain a complete React/Vite project configuration. It should be deployed as a separate frontend service after adding its React build files, and its API base URL should point to the Railway backend URL.
