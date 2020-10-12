const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection =  mysql.createConnection({
        host: "localhost",
        //port: 3306,
        database: "burger_db",
        user: "root",
        password: ""
    });
};
connection.connect();
module.exports = connection;
