const mysql = require("mysql");

let dbConn = null;
function handleDisconnect() {
  dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'testdb'
  });

  dbConn.connect(function (err) {
    if (err) {
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 2000);
    }
  });

  dbConn.on("error", function (err) {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect();
    } else {
      throw err;
    }
  });
}
handleDisconnect();
setInterval(function () {
  dbConn.query("SELECT 1");
}, 5000);

module.exports = dbConn;
