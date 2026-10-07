const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "exam2user",
  password: "exam2pass",
  database: "exam2Practice",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
