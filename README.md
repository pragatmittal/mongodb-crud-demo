# MongoDB CRUD Operations Demo

A simple Node.js application demonstrating CRUD operations using MongoDB and Express.js.

## Setup
1. Clone the repository
```bash
git clone https://github.com/pragatmittal/mongodb-crud-demo.git
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file and add your MongoDB connection string:
```bash
MONGODB_URI=your_mongodb_connection_string
```

4. Run the application
```bash
npm start
```

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