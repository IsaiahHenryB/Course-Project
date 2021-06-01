const mongoose = require('mongoose');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');

const {Schema} = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
    minlength:[10, "You need at least 10 characters in your password"]
  },
  googleId: {
    type: String
  }
});
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(err, user)
});
passport.deserializeUser(function(id, done){
  User.findById(id, function(err, user) {
    done(err, user)
  })
});

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret:process.env.CLIENT_SECRET,
  callbackURL: "https://codesquad-has-comics.herokuapp.com/auth/google/comics"
},
function(accessToken, refreshToken, email, cb) {
  User.findOrCreate({ googleId: email.id , username: email.displayName}, function (err, user) {
    return cb(err, user);
  });
}
));

module.exports = User;