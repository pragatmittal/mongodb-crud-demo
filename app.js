const express = require('express');
const path = require('path');
const app = express();
const userModel=require('./models/user');
const { all } = require('axios');
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

app.get('/read', async(req, res) => {
   let users= await userModel.find()
    res.render('read',{users}); // Ensure hey.ejs exists in the views directory
});

app.post('/create',async(req,res)=>{
    
    let {name,email,image}=req.body;

    let createdUser=await userModel.create({
        name ,
        email,
        image
    });
    res.send(createdUser)
})
// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
