const express = require('express');
const router = express.Router();
const { handleConversion } = require('../controllers/conversionController');

router.get('/', handleConversion);

module.exports = router;