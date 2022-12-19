const express = require('express');
const pagesController = require('../src/controller/Pages.handle');

const router = express.Router();

router.get('/search/:slug', pagesController.search);
router.get('/top/:page', pagesController.comicTop);
router.get('/category/:page', pagesController.category);
router.get('/:page', pagesController.page);

module.exports = router;
