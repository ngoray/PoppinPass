var mysql = require('mysql');
var connection = mysql.createPool({


    host: 'localhost',
    user: 'root',
    password: '#Ngorui98',
    database: 'poppinpass'
})
module.exports = connection;

// class Dbconnection {
//     constructor(mysql){
//         this.mysql = mysql; 
//     }
//         mysql = require('mysql');
//         connection = mysql.createPool({
    
//         host: 'localhost',
//         user: 'root',
//         password: '#Ngorui98',
//         database: 'poppinpass'
//     })
// }

// module.exports = Dbconnection.connection;