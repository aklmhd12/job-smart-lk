CREATE TABLE users(
user_id SERIAL PRIMARY KEY,
name VARCHAR(100),
email VARCHAR(150) UNIQUE,
password_hash TEXT,
account_type VARCHAR(30),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE jobs(
job_id SERIAL PRIMARY KEY,
posted_by INT,
title VARCHAR(200),
description TEXT,
hourly_rate NUMERIC,
approval_status VARCHAR(30)
);

CREATE TABLE wallets(
wallet_id SERIAL PRIMARY KEY,
user_id INT,
balance NUMERIC DEFAULT 0
);

CREATE TABLE reviews(
review_id SERIAL PRIMARY KEY,
job_id INT,
reviewer_id INT,
rating INT,
comment TEXT
);
