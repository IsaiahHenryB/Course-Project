const Comic = require('../models/comic-model');
const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const saltRounds =10;
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
},
login_post: (request, response) => {
    const username = request.body.username;
    const password = request.body.password;
    User.findOne({username: username}, (error, foundUser) => {
      if (error) {
        console.log(`The error at login is: ${error}`);
      } else {
        if(foundUser) {
          console.log(`username was matched: ${foundUser.username}`);
          console.log(`their password is: ${foundUser.password}`);
          bcrypt.compare(password, foundUser.password, function(err, result) {
            if (result === true) {
            response.redirect('/admin-console');
            }
        });
        };
      };
   });
  },
register_get: (request, response) =>{
    response.render('pages/register');
},
register_post:(request, response) => {
    bcrypt.hash(request.body.password, saltRounds, function(err, hash) {
      const newUser = new User({
        username: request.body.username,
        password: hash
      });
    newUser.save();
    response.redirect('/login');
  });
  },
}