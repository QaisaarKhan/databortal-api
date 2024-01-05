import mysql from "mysql2/promise";
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

pool.on("connection", (err) => {
  console.log("Connection Established.");
});

pool.on("error", (error) => {
  console.error(error);
});

export { pool };
