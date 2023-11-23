const User = require('../models/signModels');
const asyncHandler = require('express-async-handler');

exports.userLogin = asyncHandler(async (req, res) => {
  const { userId, password } = req.body;

  const user = await User.findOne({ userId1: userId });

  if (user && user.Mobile1 === password) {
    res.send('Login successful');
  } else {
    res.status(401).json({error: "Invalid login credentials"});
  }
});
