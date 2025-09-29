const router = require('express').Router();
const { getStores } = require('../controllers/storeController');

router.get('/', getStores);

module.exports = router;
