var fs = require("fs");
var mysql = require("mysql");
var con = mysql.createConnection({
  host: "arqexperience-do-user-7252468-0.a.db.ondigitalocean.com",
  database: "arqexperience",
  port: 25060,
  user: "doadmin",
  password: "vzn3e80dt3hdcyq5",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE valores (valor INT)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
