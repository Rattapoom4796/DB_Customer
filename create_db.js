var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    
});

con.connect(function(err) {

    if (err) throw err;
    console.log("Connected!");

    var sql = "Create Database If not exists mydb";

    con.query("CREATE DATABASE IF NOT EXISTS mydb", function
(err, result) {
         if (err) throw err;
        console.log("Database created");
    });

});

