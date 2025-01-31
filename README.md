# User Management System

A simple and elegant User Management System built with Node.js, Express, MongoDB, and EJS templating engine. This application demonstrates basic CRUD (Create, Read, Update, Delete) operations with a clean and modern UI using Tailwind CSS.

## Features

- 📝 Create new users with name, email, and profile image
- 👥 View all users in a responsive grid layout
- ✏️ Update existing user information
- 🗑️ Delete users from the database
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- ⚡ Fast and lightweight
- 🔄 Real-time updates

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/user-management-system.git
cd user-management-system
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
```env
MONGODB_URI=your_mongodb_connection_string
```

4. Start the application:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

## API Endpoints

- GET `/` - Welcome message
- GET `/create` - Create a new user
- GET `/read` - Get all users
- GET `/update` - Update user by username
- GET `/delete` - Delete user by username

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose 