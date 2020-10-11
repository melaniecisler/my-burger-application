# Eat-Da-Burger App

Project Title: Eat-Da-Burger App

Description: This project creates a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM.. The MVC design pattern is used in addition to Node and MySQL to query and route data in the app, and Handlebars to generate the HTML.

    departments:
        id - INT PRIMARY KEY
        name - VARCHAR(30) to hold department name

    roles:
        id - INT PRIMARY KEY
        title -  VARCHAR(30) to hold role title
        salary -  DECIMAL to hold role salary
        department_id -  INT to hold reference to department role belongs to

    employees:
        id - INT PRIMARY KEY
        first_name - VARCHAR(30) to hold employee first name
        last_name - VARCHAR(30) to hold employee last name
        role_id - INT to hold reference to role employee has
        manager_id - INT to hold reference to another employee that manager of the current employee. This field may be null if the employee has no manager

     It uses a CLI application that allows users to:
        Add departments, roles, employees
        View departments, roles, employees
        Update employee roles

Installation: Be sure to use npm init, install, mysql, express, inquirer. Change the appropriate user and password in employee_tracker.js file. Load employee_DB.sql into MySQL. 

To Run: node employee_tracker.js 

Authored By: Melanie Cisler

Demo Video: https://drive.google.com/file/d/1o02vmPeuVxMV7eKOJ03a18VB2PIrtZiJ/view  

Images: demo screen shots in "images" folder