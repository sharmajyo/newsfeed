create user newsfeeds with password 'newsfeeds';
create database feeds_db;
grant all privileges on database feeds_db to newsfeeds;

\c feeds_db;
CREATE TABLE "feeds" (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  url VARCHAR,
  craetedAt timestamp without time zone
);
