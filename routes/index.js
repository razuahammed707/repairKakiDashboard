var express = require('express');
var router = express.Router();
var appRoot = require('app-root-path');
/* GET home page. */
router.get('/ssds', function(req, res, next) {

  // res.sendFile(appRoot+'/client/build/index.html');

});

module.exports = router;
