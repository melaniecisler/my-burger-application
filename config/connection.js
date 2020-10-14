const mysql = require("mysql");

let connection =  mysql.createConnection({
        host: "localhost",
        port: 3306,
        database: "burger_db",
        user: "root",
        password: "TitoBurrito1!"
    });

module.exports = connection;
