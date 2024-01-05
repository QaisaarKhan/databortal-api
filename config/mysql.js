import mysql2 from "mysql2";

const dbPool = mysql2.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "pce_schema",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

dbPool.getConnection((err, conn) => {
  console.log(`Connection Established`);
  dbPool.releaseConnection(conn);
});

module.exports = dbPool;
