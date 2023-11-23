var express = require('express');
var router = express.Router();
const multer = require('multer');
var signController = require('../controller/signcontroller');
var logController = require('../controller/logcontroller');
var p1Controller = require('../controller/p1controller');
var p2Controller = require('../controller/p2controller');
var p3Controller = require('../controller/p3controller');

router.post('/registered', signController.userCreate);
router.post('/login', logController.userLogin);
router.post('/page1', p1Controller.userPage1);
router.get('/page2', p2Controller.userPage2);
router.post('/page3/:id', p3Controller.updateProduct);
router.delete('/page2/:id', p3Controller.deleteProduct);

module.exports = router;
