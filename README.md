# Appointment Booking System

A full-stack appointment booking application built with **HTML, CSS, JavaScript, Node.js, Express.js, and MySQL**.

Users can book an appointment through the frontend, view all registered appointments, and delete appointments. The application uses a structured backend with separate **controllers** and **routes**.

## Features

* Book an appointment
* Store user and appointment details in MySQL
* Display all appointments
* Delete appointments
* REST API using Express.js
* JSON request and response handling
* CORS support
* Separate controller and route structure
* Responsive frontend design

## Technologies

* HTML5
* CSS3
* JavaScript
* Node.js
* Express.js
* MySQL
* mysql2
* CORS

## Project Structure

```text
appointment-booking-system
│
├── controllers
│   └── userController.js
│
├── routes
│   └── userRoutes.js
│
├── public
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── index.js
├── package.json
└── package-lock.json
```

## Database

The application uses a MySQL database named `testDB`.

Table:

```text
User
```

Columns:

```text
id
name
email
phone
appointmentDate
appointmentTime
```

## API Endpoints

| Method | Endpoint     | Description                   |
| ------ | ------------ | ----------------------------- |
| POST   | `/users`     | Create a new user/appointment |
| GET    | `/users`     | Get all users/appointments    |
| DELETE | `/users/:id` | Delete an appointment         |

## Installation

Clone the repository:

```bash
git clone <your-github-repository-url>
```

Move into the project folder:

```bash
cd appointment-booking-system
```

Install dependencies:

```bash
npm install
```

## MySQL Setup

Create the database:

```sql
CREATE DATABASE testDB;
```

Select the database:

```sql
USE testDB;
```

Create the `User` table:

```sql
CREATE TABLE User (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(20),
    appointmentDate DATE,
    appointmentTime TIME
);
```

Update the MySQL password in:

```text
index.js
controllers/userController.js
```

## Run the Application

Start the server:

```bash
node index.js
```

The application will run on:

```text
http://localhost:3000
```

Open the URL in your browser to use the appointment booking system.

## Future Improvements

* Edit appointment functionality
* Appointment validation
* Authentication and authorization
* Admin dashboard
* Appointment status management
* Improved error handling

## Author

**Shaharukh Khan**
