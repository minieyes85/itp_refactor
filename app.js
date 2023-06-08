const express = require('express');
const app = express();
require('dotenv').config();

// 필요한 미들웨어 및 설정 설정
app.set('view engine', 'ejs');
app.use(express.static('public'));

// 라우터 설정
const indexRouter = require('./routes/MAIN/index');
app.use('/', indexRouter);

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});