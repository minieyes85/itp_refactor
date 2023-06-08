// index.js

let Index = require('../../models/MAIN/index');

// 예시 컨트롤러 함수
const indexController = (req, res) => {

  let newIndex = new Index("Test Value");

  let data = {
      title : "Test Title"
    , message : newIndex.getValue()}


  res.render('MAIN/index', data);
};

module.exports = {
  indexController,
};
  