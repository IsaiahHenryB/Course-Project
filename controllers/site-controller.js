
const passport = require('passport');
const Comic = require('../models/comic-model');
const User = require('../models/userSchema');
const { request, response } = require('express');

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
google_get: 
      passport.authenticate('google', {scope: ['openid', 'profile', 'email']}),



google_redirect_get: [
      passport.authenticate('google', {failureRedirect: '/login'}),
      function(request, response) {
        response.redirect('/');
    }],

logout: (request, response) => {
  request.logout();
  response.redirect('/')
},

 
}