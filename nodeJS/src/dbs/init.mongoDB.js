"use strict";
const mongoose = require("mongoose");
const {
  db: { host, name, port },
} = require("../configs/config.mongodb");
const { countConnect } = require("../helper/check.connect");
const connectStr = `mongodb://${host}:${port}/${name}`;
console.log("connectStr", connectStr);
class Database {
  constructor() {
    this.connect();
  }
  // connect
  connect(type = "mongodb") {
    if (1 === 1) {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }
    mongoose
      .connect(connectStr)
      .then((_) => console.log("connect mongoDB success", countConnect()))
      .catch((err) => console.log("error connect", err));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}
const instanceMongoDB = Database.getInstance();

module.exports = instanceMongoDB;
