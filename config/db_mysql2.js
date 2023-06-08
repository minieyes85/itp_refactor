const mysql = require('mysql2/promise'); 

module.exports = function () {
    return {
      init: async function () {
        return await mysql.createConnection({
          host: process.env.DB_URL,
          port: process.env.DB_PORT,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE
        })
      },
      
      db_open: async function (con) {
        con.connect(function (err) {
          if (err) {
            console.error('mysql connection error :' + err);
          } else {
            console.info('mysql is connected successfully.');
          }
        })
      },

      db_close: async function(con){
        con.end(function(err){
          if(err){
            console.error('mysql connection close error : ' + err);
          } else {
            console.info('mysql connection is closed successfully.');
          }
        })
      }
    }
  };