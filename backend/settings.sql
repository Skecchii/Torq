DROP DATABASE IF EXISTS torq;
DROP USER IF EXISTS torquser;

CREATE DATABASE torq;
CREATE USER torquser WITH PASSWORD 'D@ilyDriver';
GRANT ALL PRIVILEGES ON DATABASE torq TO torquser;

