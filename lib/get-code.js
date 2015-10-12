var index = require('./index.js');
var ligle = index.ligle;
var verifyCode = require('./verify-code.js');
var getCode = verifyCode.getCode;

var express = require('express');

var router = express.Router();
// 获取图片验证码
router
  .route(index.cfg.route.getCode)
  .get(getCode);

module.exports = router;
