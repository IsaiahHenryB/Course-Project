// Adding dependencies
const express = require('express');
const morgan = require('morgan');

// Create app
const app = express();
// requiring path
const path = require('path')
// Create PORT
const PORT = 3000;
// Set view engine tp ejs
app.set('view engine', 'ejs');
// Securing proper file paths;
app.use(express.static(path.join(__dirname, 'public')));
// Morgan Middleware
app.use(morgan('combined'))

// Adding app.get
app.get('/', (request, response) =>{
    response.render('pages/index');
})
app.get('/about', (request, response) =>{
    response.render('pages/about');
})
app.get('/login', (request, response) =>{
    response.render('pages/login');
})
app.get('/admin-console', (request, response) =>{
    response.render('pages/admin');
})
app.get('/admin-console/create-book', (request, response) =>{
    response.render('pages/update');
})
app.get('/admin-console/create-book/:id', (request, response) =>{
    response.render('pages/update');
})
app.get('/book/:id', (request, response) =>{
    response.render('pages/book');
})


// Adding app.listen
app.listen(PORT, ()=>{
    console.log(`You are currently running from port${PORT}`)
})