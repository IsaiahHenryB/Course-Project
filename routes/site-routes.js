const express = require('express');
const router = express.Router();
const siteController = require('../controllers/site-controller');

router.route('/')
.get(siteController.home)

router.route('/about')
.get(siteController.about)

router.route('/register')
.get(siteController.register_get)
.post(siteController.register_post)

router.route('/logout')
.get(siteController.logout)

router.route('/login')
.get(siteController.login)
.post(siteController.login_post)

router.route('/auth/google')
.get(siteController.google_get)

router.route('/auth/google/comics')
.get(siteController.google_redirect_get)
module.exports = router