"use strict";

// const config = {
//   app: {
//     port: 3000,
//   },
//   db: {
//     host: "localhost",
//     port: 27017,
//     name: "db",
//   },
// };

const dev = {
  app: {
    port: process.env.DEV_APP_PORT || 3086,
  },
  db: {
    host: process.env.DEV_DB_HOST || "localhost",
    port: process.env.DEV_DB_PORT || 27017,
    name: process.env.DEV_DB_NAME || "shopDEV",
  },
};

const production = {
  app: {
    port: process.env.PRODUCTION_APP_PORT || 3000,
  },
  db: {
    host: process.env.PRODUCTION_DB_HOST || "localhost",
    port: process.env.PRODUCTION_DB_PORT || 27017,
    name: process.env.PRODUCTION_DB_NAME || "shopPRODUCTION",
  },
};

const config = { dev, production };
const env = process.env.NODE_EVN || "dev";
module.exports = config[env];
