let knex = require('knex');

module.exports = knex({
    client : 'mysql',
    debug : true,
 
    connection : {
        database: process.env.DB_DATABASE,
        host: process.env.DB_URL,
        port: process.env.DB_PORT,
        password: process.env.DB_PASSWORD,
        user: process.env.DB_USER,
        dateStrings: true
    }
});
