-- Setup database
CREATE DATABASE evenly;
CREATE USER evenly_user WITH PASSWORD 'evenly_password';
GRANT ALL PRIVILEGES ON DATABASE evenly TO evenly_user;

\c evenly;

GRANT USAGE, CREATE ON SCHEMA public TO evenly_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public
    GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO evenly_user;