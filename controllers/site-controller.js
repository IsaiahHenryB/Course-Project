const Comic = require('../models/comic-model')
module.exports = {

home: (request, response) =>{
    Comic.find({},(error, allComics) => {
        if(error){
            return error
        } else {
            response.render('pages/index',{ books: allComics })
        }
    });
},
about:(request, response) =>{
    response.render('pages/about');
},
login: (request, response) =>{
    response.render('pages/login');
}
}