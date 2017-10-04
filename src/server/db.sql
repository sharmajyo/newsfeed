create user newsfeeds with password 'newsfeeds';
create database feeds_db;
grant all privileges on database feeds_db to newsfeeds;

\c feeds_db;
DROP TABLE  IF EXISTS "feeds";
CREATE TABLE "feeds" (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  url VARCHAR,
  createdAt TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);
