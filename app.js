const express = require('express');
const path = require('path');
const app = express();

// Define the port
const port = 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.render('index'); // Ensure hey.ejs exists in the views directory
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
