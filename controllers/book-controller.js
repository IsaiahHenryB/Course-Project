const { v4:uuid } = require('uuid');
const data = require('../data.js');

module.exports = {
    books: (request, response) =>{
        const id = request.params.id;
        const foundBook = data.find(book => book._id === String(id));
        response.render('pages/book',{ thisBook: foundBook});
    },
    booksCreate: (request, response) =>{
        const title = request.body.title;
        console.log(title)
        if (title != "") {
            const {_id = uuid(), title, author, rating, publisher, pages, image, genre, synopsis} =  request.body;
            data.push({_id, title, author, rating, publisher, pages, image, genre, synopsis});
            response.redirect('/admin-console');
        } else {
            response.render('pages/create');
        }
        
    },
    booksUpdate: (request, response) =>{
        const id = request.params.id;

        page = request.body;

        const newTitle = page.title;
        const newAuthor = page.author;
        const newRating = page.rating;
        const newPublisher = page.publisher;
        const newPages = page.pages;
        const newImage = page.image;
        const newGenre = page.genre;
        const newSynopsis = page.synopsis;

        const foundBook = data.find(book => book._id === String(id));

        foundBook.title = newTitle;
        foundBook.author = newAuthor;
        foundBook.rating = newRating;
        foundBook.publisher = newPublisher;
        foundBook.pages = newPages;
        foundBook.image = newImage;
        foundBook.genre = newGenre;
        foundBook.synopsis = newSynopsis;
        response.redirect('/admin-console');
    },
    booksDelete: (request, response) => {
        const { id } = request.params;
        const foundBook = data.find(book => book._id === String(id));
        const index = data.indexOf(foundBook);
        data.splice(index, 1);
        response.redirect('/admin-console')
    },
}