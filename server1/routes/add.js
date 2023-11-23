const express = require('express');
var router = express.Router();
// var admin = require('../models/adminModels');


router.get('/', (req, res) => {
  const newProduct = {
    name: 'Product 4',
    price: 20.99,
    description: 'This is product 4 from the server'
  };
  

  res.json(newProduct);
});


router.put('/:index', (req, res) => {
    const newProduct = {
      name: 'Updated Product',
      price: 30.99,
      description: 'Updated the product from the server'
    };
  
    res.json(newProduct);
  });


module.exports = router;