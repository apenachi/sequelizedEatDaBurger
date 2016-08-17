CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
Id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
burger_name varchar(255) NOT NULL,
devoured boolean NOT NULL DEFAULT false,
date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
