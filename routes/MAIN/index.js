// index.js

const express = require('express');
const router = express.Router();
const indexController = require('../../controllers/MAIN/index');

// 예시 라우트
router.get('/', indexController.indexController);

module.exports = router;