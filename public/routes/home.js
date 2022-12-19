const express = require('express');
const homesController = require('../src/controller/Homes.handle');

const router = express.Router();

router.get('/', homesController.index);

module.exports = router;
