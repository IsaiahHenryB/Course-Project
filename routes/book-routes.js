const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book-controller');

router.route('/')
.post(bookController.booksCreate)

router.route('/:id')
.get(bookController.books)
.put(bookController.booksUpdate)
.delete(bookController.booksDelete)

module.exports = router