const Comic = require('../models/comic-model')
module.exports = {
    admin: (request, response) =>{
        Comic.find({},(error, allComics) => {
            if(error){
                return error
            } else {
                response.render('pages/admin',{ books: allComics })
            }
        });
    },
    createBook: (request, response) =>{
        Comic.find({},(error, allComics) => {
            if(error){
                return error
            } else {
                response.render('pages/create',{ books: allComics })
            }
        });
    },
    updateBook: (request, response) =>{
        const { id } = request.params;
        Comic.findOne({_id: id},(error, foundComic) => {
            if(error){
                return error
            } else {
                response.render('pages/update',{ thisBook: foundComic })
            }
        });
    },
}