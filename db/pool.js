const { Pool } = require("pg");
require("dotenv").config();

// module.exports = new Pool(process.env.top_pool);

module.exports = new Pool({
  connectionString: process.env.connectionString,
});
