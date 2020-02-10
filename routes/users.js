var express = require('express');
var router = express.Router();
const allUsers = require("../config/db");
router.get('/all', async function(req, res, next) {

    res.send("hello")
  
});

module.exports = router;
