const Comic = require('../models/comic-model')
module.exports = {
    books: (request, response) => {
        const comicId = request.params.id
        Comic.findOne({_id: comicId},(error, foundComic) => {
            if(error){
                return error
            } else {
                response.render('pages/book', { thisBook: foundComic, user: request.user})
            }
            console.log(foundComic.synopsis)
        });
;
    },
    booksCreate: (request, response) =>{
        const title = request.body.title;
        if (request.isAuthenticated()) {
            const newComic = new Comic({
                title : request.body.title,
                author : request.body.author,
                publisher : request.body.publisher,
                genre : request.body.genre,
                pages : request.body.pages,
                rating : request.body.rating,
                synopsis : request.body.synopsis,
                image : request.body.image,
            });
            newComic.save();
            response.redirect("/admin-console"); 
        } else {
            response.redirect('/')
        }
    },
    booksUpdate: (request, response) =>{
        const id = request.params.id;
        Comic.findByIdAndUpdate({_id: id}, {$set: {
            title : request.body.title,
            author : request.body.author,
            publisher : request.body.publisher,
            genre : request.body.genre,
            pages : request.body.pages,
            rating : request.body.rating,
            synopsis : request.body.synopsis,
            image : request.body.image,
        }}, {new: true}, (error) => {
            if(error){
                return error;
            } else {
                response.redirect('/admin-console');
            }
        }) 
    },
    booksDelete: (request, response) =>  {
        const { id } = request.params;

        Comic.deleteOne({_id: id}, (error) =>{
            if(error){
                return error;
            } else {
                response.redirect('/admin-console');
            }
        })
    }
}