const user = require('../models/p1Models');
const asyncHandler = require('express-async-handler');

exports.userPage2 = asyncHandler(async (req, res) => {
  try {
    const elements = await user.find({}); 
    res.json(elements);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});
