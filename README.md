# Fullstack Note App

This is a full-stack note-taking application built with the (SQLite, Express, React, Node.js). It allows users to create, view, and manage their notes.

## Features

- Create, view, and delete notes
- User authentication
- Responsive design for use on different devices

## Technologies Used

### Frontend

- React
- Vite
- Tailwind CSS
- DaisyUI

### Backend

- Node.js
- Express
- SQLite

## Setup and Installation

To get the project running locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/fullstack-note-app.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd fullstack-note-app
   ```
3. **Install server dependencies:**
   ```bash
   cd server
   npm install
   ```
4. **Install client dependencies:**
   ```bash
   cd ../client
   npm install
   ```
5. **Start the backend server:**
   ```bash
   cd ../server
   npm start
   ```
6. **Start the frontend development server:**
   ```bash
   cd ../client
   npm run dev
   ```

## API Endpoints

The following API endpoints are available:

- `GET /api/notes`: Get all notes
- `POST /post`: Add a new note
