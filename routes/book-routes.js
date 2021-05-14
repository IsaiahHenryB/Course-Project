const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book-controller');

router.route('/:id')
.get(bookController.books)

module.exports = router