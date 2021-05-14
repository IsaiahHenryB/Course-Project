const { v4:uuid } = require('uuid');
const data = require('../data.js');

module.exports = {
    books: (request, response) =>{
        const id = request.params.id;
        const foundBook = data.find(book => book._id === String(id));
        response.render('pages/book',{ thisBook: foundBook});
    },
}