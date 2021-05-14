module.exports = {
    admin: (request, response) =>{
        response.render('pages/admin');
    },
    createBook: (request, response) =>{
        response.render('pages/update');
    },
    createdBook: (request, response) =>{
        response.render('pages/update');
    }
}