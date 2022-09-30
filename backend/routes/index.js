var express = require('express');
var router = express.Router();
var { version } = require('../package.json');

router.get('/health', function (req, res, next) {
  res.json({ version });
});

module.exports = router;
