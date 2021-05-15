const { v4:uuid } = require('uuid');
const data = require('../data.js');

module.exports = {

home: (request, response) =>{
    response.render('pages/index',{ books: data });
},
about:(request, response) =>{
    response.render('pages/about');
},
login: (request, response) =>{
    response.render('pages/login');
}
}