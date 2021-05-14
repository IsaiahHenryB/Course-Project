const express = require('express');
const router = express.Router();

const bookRouter = require('./book-routes.js');
const adminRouter = require('./admin-routes.js');
const siteRouter = require('./site-routes.js');

router.use('/', siteRouter);
router.use('/books', bookRouter);
router.use('/admin-console', adminRouter);

module.exports = router;