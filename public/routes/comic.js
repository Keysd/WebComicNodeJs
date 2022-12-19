const express = require('express');
const comicsController = require('../src/controller/Comics.handle');

const router = express.Router();

router.get('/truyen/:slug', comicsController.readComic);
router.get('/:slug', comicsController.infoComic);

module.exports = router;
