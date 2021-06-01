const Comic = require('../models/comic-model');
const bcrypt = require('bcrypt');
const User = require('../models/userSchema');
const passport = require('passport');
const { request, response } = require('express');
const saltRounds =10;
module.exports = {

home: (request, response) =>{
    Comic.find({},(error, allComics) => {
        if(error){
            return error
        } else {
            response.render('pages/index',{ books: allComics, user: request.user })
        }
    });
},
about:(request, response) =>{
    response.render('pages/about', {user: request.user});
},
login: (request, response) =>{
    response.render('pages/login', {user : request.user});
},
login_post: (request, response) => {
    const user = new User({
      username: request.body.username,
      password: request.body.password
    });

    request.login(user, (error) => {
      if (error) {
        return error;
      } else {
        passport.authenticate('local')(request, response, () => {
          response.redirect('/admin-console');
        });
      }
    });
  },
logout: (request, response) => {
  request.logout();
  response.redirect('/')
},
register_get: (request, response) =>{
    response.render('pages/register', {user : request.user});
},
register_post:(request, response) => {
    User.register({username: request.body.username} , request.body.password, (error,user)=>{
      if (error){
        console.log(error);
        response.redirect('/register');
      } else {
        passport.authenticate('local')(request, response, ()=>{
          response.redirect('/login')
        });
      }
    });
  },
  google_get:
    passport.authenticate('google', {scope: ['openid', 'profile', 'email'] }),

  google_redirect_get: [
    passport.authenticate('google', { failureRedirect: '/login'}),
    function(request, response) {
      response.redirect('/')
    }
  ]
}