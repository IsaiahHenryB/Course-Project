const { v4:uuid } = require('uuid');
const data = require('../data.js');
module.exports = {
    admin: (request, response) =>{
        response.render('pages/admin',{books:data});
    },
    createBook: (request, response) =>{
        response.render('pages/create',{books: data});
    },
    createdBook: (request, response) =>{
        const id = request.params.id;
        const foundBook = data.find(book => book._id === String(id));
        response.render('pages/update',{ thisBook: foundBook});
    }
}