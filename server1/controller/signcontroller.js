const user = require('../models/signModels');
var asyncHandler = require('express-async-handler');
var url = require('url');

exports.userCreate = asyncHandler(async (req, res) => {
  if (req.body.userId === '' || req.body.Name === '' || req.body.Place === '' || req.body.Mobile === '' || req.body.Age === '' || req.body.Gender === '') {
    res.send('All values are required');
  } else {
    const existingUser = await user.findOne({ userId1: req.body.userId });

    if (existingUser) {
      console.log("User ID already exists");
      res.status(400).json({ error: "User ID already exists" });
    } else {
      var asyncform = await user.create({
        userId1: req.body.userId,
        Name1: req.body.Name,
        Place1: req.body.Place,
        Mobile1: req.body.Mobile,
        Age1: req.body.Age,
        Gender1: req.body.Gender,
      });

      if (asyncform) {
        res.send('Successfully collected data');
      } else {
        res.send('Failed to collect data');
      }

      console.log('User Registered Successfully');
    }
  }
});
