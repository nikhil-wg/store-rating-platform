const Store = require('../models/Store');

exports.getStores = async (req, res) => {
  try {
    const stores = await Store.findAll();
    res.json(stores);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
