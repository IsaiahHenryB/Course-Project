const Comic = require('../models/comic-model')
module.exports = {
    admin: (request, response) =>{
        Comic.find({},(error, allComics) => {
            if(request.isAuthenticated()){
                response.render('pages/admin',{ books: allComics, user: request.user })
            } else {
                response.redirect('/login')
            }
        });
    },
    createBook: (request, response) =>{
        Comic.find({},(error, allComics) => {
            if(request.isAuthenticated()){
                response.render('pages/create',{ books: allComics, user: request.user })
            } else {
                response.redirect('/login')
            }
        });
    },
    updateBook: (request, response) =>{
        const { id } = request.params;
        Comic.findOne({_id: id},(error, foundComic) => {
            if(request.isAuthenticated()){
                response.render('pages/update',{ thisBook: foundComic, user: request.user })
            } else {
                response.redirect('/login')
            }
        });
    },
}