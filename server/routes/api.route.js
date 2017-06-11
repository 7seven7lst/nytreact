const express = require('express');
const controller = require('../controllers/api.controller.js');

const router = new express.Router();

router
.post('/fetcharticles', controller.fetchArticles)
.post('/favarticles', controller.postFavArticle)
.get('/favarticles', controller.getFavArticles)
.get('/favarticle/:id', controller.getFavArticle)
.delete('/favarticle/:id', controller.deleteFavArticle)

module.exports = router;
