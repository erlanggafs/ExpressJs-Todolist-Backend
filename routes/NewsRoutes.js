const express = require('express');
const router = express.Router();
const NewsController = require('../controllers/NewsController.js');

router.get('/news', NewsController.getAllNews);
router.get('/news/:id', NewsController.getNewsById);
router.post('/news', NewsController.createNews);
router.put('/news/:id', NewsController.updateNews);
router.delete('/news/:id', NewsController.deleteNews);

module.exports = router;
