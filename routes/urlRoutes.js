const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');

router.post('/', urlController.createShortUrl);
router.get('/:shortCode', urlController.getOriginalUrl);
router.put('/:shortCode', urlController.updateShortUrl);
router.delete('/:shortCode', urlController.deleteShortUrl);
router.get('/:shortCode/stats', urlController.getUrlStats);

module.exports = router;
