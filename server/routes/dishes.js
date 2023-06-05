var express = require('express');
var router = express.Router();
const dishes = require('../controllers/dishes');

router.get('/', dishes.getAll);
router.post('/', dishes.addNew);

module.exports = router;