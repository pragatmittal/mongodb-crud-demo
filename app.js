const express = require('express');
const app = express();
require('dotenv').config();
const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.send("HEY")
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});