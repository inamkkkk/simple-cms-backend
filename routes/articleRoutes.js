const express = require('express');
const articleController = require('../controllers/articleController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', articleController.getAllArticles);
router.get('/:id', articleController.getArticleById);
router.post('/', authenticate, articleController.createArticle);
router.put('/:id', authenticate, articleController.updateArticle);
router.delete('/:id', authenticate, articleController.deleteArticle);

module.exports = router;