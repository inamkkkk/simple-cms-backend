const express = require('express');
const pageController = require('../controllers/pageController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', pageController.getAllPages);
router.get('/:id', pageController.getPageById);
router.post('/', authenticate, pageController.createPage);
router.put('/:id', authenticate, pageController.updatePage);
router.delete('/:id', authenticate, pageController.deletePage);

module.exports = router;