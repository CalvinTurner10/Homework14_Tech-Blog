DROP DATABASE IF EXIST employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE department (
    id INT NOT NULL,
    department_name VARCHAR(30)
);

CREATE TABLE employee_role (
    id INT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
);

CREATE TABLE employee (
    id INT,
    employee_role_id INT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30)  OT NULL,
    manager_id INT,
);
