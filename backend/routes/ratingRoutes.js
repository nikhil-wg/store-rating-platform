const router = require('express').Router();
const { addRating } = require('../controllers/ratingController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, addRating);

module.exports = router;
