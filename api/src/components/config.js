require("dotenv").config();

const config = {
  port: process.env.PORT,
  db_user: process.env.DB_USER || "",
  db_password: process.env.DB_PASSWORD || "",
  db_host: process.env.DB_HOST || "",
  db_port: process.env.DB_PORT || "",
  db_database: process.env.DB_DATABASE || "",

  read_db_user: process.env.READ_DB_USER || "",
  read_db_password: process.env.READ_DB_PASSWORD || "",
  read_db_host: process.env.READ_DB_HOST || "",
  read_db_port: process.env.READ_DB_PORT || "",
  read_db_database: process.env.READ_DB_DATABASE || "",

  cache_url: process.env.CACHE_URL | "",
};

module.exports = config;
