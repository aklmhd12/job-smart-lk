const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

const PORT = Number(process.env.PORT) || 5000;

// Railway provides DATABASE_URL for PostgreSQL.
// SSL is enabled for hosted PostgreSQL and can be disabled locally with DB_SSL=false.
const pool = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.DB_SSL === 'false' ? false : { rejectUnauthorized: false }
    })
  : new Pool({
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'jobsmart'
    });

app.get('/', (req, res) => {
  res.json({ service: 'JobSmart.lk API', status: 'running' });
});

app.get('/api/status', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ status: 'running', database: 'connected', name: 'JobSmart.lk' });
  } catch (error) {
    console.error('Database health check failed:', error.message);
    res.status(503).json({ status: 'running', database: 'unavailable', name: 'JobSmart.lk' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`JobSmart.lk API listening on port ${PORT}`);
});

process.on('SIGTERM', async () => {
  server.close(async () => {
    await pool.end();
    process.exit(0);
  });
});
