var mysql = require('mysql');
var connection = mysql.createPool({


    host: 'localhost',
    user: 'root',
    password: '#Ngorui98',
    database: 'poppinpass'
})
module.exports = connection;