const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userModel = require('./usermodel');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('MongoDB CRUD Demo API');
})

app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: "Pragat",
        email: "mittalpragat@gmail.com",
        username: "mittalpragat"
    })
    res.send(createdUser);
})

app.get('/update', async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate({ username: "Pragat" }, { name: "pragat mittal" }, { new: true })
    res.send(updatedUser);
})

app.get('/read', async (req, res) => {
    let users = await userModel.find();
    res.send(users);
})

app.get('/delete', async (req, res) => {
    let users = await userModel.findOneAndDelete({ username: "Pragat" });
    res.send(users);
})

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});