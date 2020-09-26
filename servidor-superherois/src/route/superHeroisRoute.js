const express = require('express');
const router = express.Router();
const controller = require('../controller/superHeroisController.js')

router.get('/', controller.getAll);
router.get('superHerois', controller.getAll);
router.get('/:id', controller.getById);

module.exports = router;