var express = require('express');
var router = express.Router();
var admin = require('../models/adminModels');

router.get('/', async (req, res) => {
  console.log('Testing');

   admin.insertMany([
      {
        name: 'Ayisha',
        email: 'Calicut',
        phone: 'Techoriz'
      },
      {
        name: 'Maleeh',
        email: 'Kuwait',
        phone: 'Insha'
      },
      {
        name: 'Nihala',
        email: 'Kuwait',
        phone: 'Hello'
      }
    ]);

    res.send('Successful');
   
});

module.exports = router;
