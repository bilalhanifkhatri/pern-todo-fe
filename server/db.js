const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "admin123",
  port: "5432",
  database: "perntodo",
  host: "localhost",
});

module.exports = pool;
