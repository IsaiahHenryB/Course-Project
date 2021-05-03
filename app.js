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
    response.render('pages/index', {
        books: book,
    });

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
    let params = request.params;
    console.log(params);
    if (params.id === '01'){
        response.render('pages/book',{
            thisbook: book[0]
        },)
    }
    else if (params.id === '02'){
        response.render('pages/book',{
            thisbook: book[1]
        },)
    }
    else if (params.id === '03'){
        response.render('pages/book',{
            thisbook: book[2]
        },)
    }
    else {
        response.send(`This product doesn't exist. Try searching again. `);        
    };
})

// Create Book array

let book = [
    {
        num: '01',
        name: 'Fun Home: A Family Tragicomic',
        author: 'by Alison Bechdel',
        rating: '5 Stars',
        img: 'img/fun-home.jpg',
    },
    {
        num: '02',
        name: 'Watchmen',
        author: 'by Alan Moore',
        rating: '5 Stars',
        img: 'img/Watchmen.jpg',
    },
    {
        num: '03',
        name: 'Hunter X Hunter Vol.1',
        author: 'by Yoshihiro Tagashi',
        rating: '5 Stars',
        img: 'img/hunter-x-hunter.jpg',
    },
]
// Adding app.listen
app.listen(PORT, ()=>{
    console.log(`You are currently running from port${PORT}`)
})