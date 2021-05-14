const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin-controller');

router.route('/admin-console')
.get(adminController.admin)
router.route('/admin-console/create-book')
.get(adminController.createBook)
router.route('/admin-console/create-book/:id')
.get(adminController.createdBook)

module.exports = router
