const user = require('../models/p1Models');
const asyncHandler = require('express-async-handler');

exports.userPage1 = asyncHandler(async (req, res) => {
  const { name1, price1, description1, image1 } = req.body;

  // Assuming you're using Base64 encoded image string on the client-side
 // const base64Data = image1.replace(/^data:image\/(png|jpeg|jpg);base64,/, '');
  //const buffer = Buffer.from(base64Data, 'base64');

  const asyncform = await user.create({
    name: name1,
    price: price1,
    description: description1,
    image: image1,
  });

  if (asyncform) {
    res.send('Successfully collected data');
  } else {
    res.send('Failed to collect data');
  }

  console.log('Product added Successfully');
});
