var express = require('express');
var router = express.Router();
const categories = require('../controllers/categories');

router.get('/', categories.getAll);

module.exports = router;