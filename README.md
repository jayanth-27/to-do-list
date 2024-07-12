# todolist
A simple note-making web application built with Node.js, Express, and PostgreSQL. The app allows users to add, edit, and delete notes, with changes reflected dynamically on the web interface.

Features
Add new notes to the list.
Edit existing notes.
Delete notes from the list.
Notes are stored in a PostgreSQL database.
Technologies Used
Backend: Node.js, Express
Database: PostgreSQL
Frontend: EJS templating, HTML, CSS

Setup Instructions

Clone the repository:


git clone https://github.com/your-username/note-making-app.git
cd note-making-app


Install dependencies:

npm install
Set up the PostgreSQL database:


CREATE DATABASE notemaking;
CREATE TABLE items (id SERIAL PRIMARY KEY, title VARCHAR(255) NOT NULL);

Configure the database connection in index.js:
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "notemaking",
  password: "your-password",
  port: 5432,
});


Run the application:
npm start


Access the application:
Open your browser and navigate to http://localhost:3000.
