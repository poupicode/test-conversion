const express = require('express');
const router = express.Router();
const { handleTVA, handleRemise } = require('../controllers/financeController');

router.get('/tva', handleTVA);
router.get('/remise', handleRemise);

module.exports = router;