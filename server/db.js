const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "qweqwe",
  host: "localhost",
  port: 5432,
  database: "ecomerce",
});

module.exports = pool;
