const path = require("path");
require("dotenv").config();

// const {
//   DEVELOPMENT_DATABASE_URL,
//   PRODUCTION_DATABASE_URL,
// } = process.env;
const URL = {
 if (NODE_ENV === "production") {
  PRODUCTION_DATABASE_URL
 } else {
 DEVELOPMENT_DATABASE_URL;
 }
}
module.exports = {
 production: {
    client: "postgresql",
    connection: URL,
    pool: { min: 1, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  development: {
    client: "postgresql",
    connection: URL,
    pool: { min: 1, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    useNullAsDefault: false,
  },
};
