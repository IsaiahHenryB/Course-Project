const Comic = require('../models/comic-model')
module.exports = {
    admin: (request, response) =>{
        Comic.find({},(error, allComics) => {
            if(error){
                return error
            } else {
                response.render('pages/admin',{ books: allComics, user: request.user })
            }
        });
    },
    createBook: (request, response) =>{
        Comic.find({},(error, allComics) => {
            if(error){
                return error
            } else {
                response.render('pages/create',{ books: allComics, user: request.user })
            }
        });
    },
    updateBook: (request, response) =>{
        const { id } = request.params;
        Comic.findOne({_id: id},(error, foundComic) => {
            if(error){
                return error
            } else {
                response.render('pages/update',{ thisBook: foundComic, user: request.user })
            }
        });
    },
}