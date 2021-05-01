// Adding dependencies
const express = require('express');
const morgan = require('morgan');

// Create app
const app = express();

// Create PORT
const PORT = 3000;

// Morgan Middleware
app.use(express.static('/public'));
app.use(morgan('combined'))

// Adding app.get
app.get("/", (request, response) =>{
    response.sendFile(__dirname + "/views/pages/index.html");
})
app.get("/about", (request, response) =>{
    response.sendFile(__dirname + "/views/pages/about.html");
})
app.get("/login", (request, response) =>{
    response.sendFile(__dirname + "/views/pages/login.html");
})
app.get("/admin-console", (request, response) =>{
    response.sendFile(__dirname + "/views/pages/admin.html");
})
app.get("/admin-console/create-book", (request, response) =>{
    response.sendFile(__dirname + "/views/pages/update.html");
})


// Adding app.listen
app.listen(PORT, ()=>{
    console.log(`You are currently running from port${PORT}`)
})