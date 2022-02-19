CREATE DATABASE BANK;

CREATE TABLE workers(
    worker_id bigserial PRIMARY KEY,
    worker_name text not null,
    worker_profession varchar(64) not null,
    worker_date timestamptz  default current_timestamp
);