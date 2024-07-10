const Phone = require('../models/phone');

exports.getPhones = async (req, res) => {
  try {
    const phones = await Phone.find();
    res.json(phones);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
