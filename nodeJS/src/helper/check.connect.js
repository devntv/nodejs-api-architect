"use trict";
const mongoose = require("mongoose");
const os = require("os");
const process = require("process");
const _SECONDS = 5000;

const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`number of connection:: ${numConnection}`);
};

// check overload
const checkOverLoad = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    // example maximum number of connections based on number osf cores
    console.log(`Active connection::${numConnection}`);
    console.log(`memory usage:: ${memoryUsage / 1024 / 1024}MB`);
    const maxConnection = numCores * 5;
    if (numConnection > maxConnection) {
      console.log(`Connection overload dêtected!`);
    }
  }, _SECONDS); // monitor every 5 seconds
};
module.exports = {
  countConnect,
  checkOverLoad,
};
