const Rating = require('../models/Rating');

exports.addRating = async (req, res) => {
  try {
    const { storeId, rating } = req.body;
    const userId = req.user.id;

    // if user already rated, update instead of create
    const existing = await Rating.findOne({ where: { userId, StoreId: storeId } });
    if (existing) {
      existing.rating = rating;
      await existing.save();
      return res.json({ message: 'Rating updated', existing });
    }

    const newRating = await Rating.create({ rating, UserId: userId, StoreId: storeId });
    res.json({ message: 'Rating added', newRating });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
