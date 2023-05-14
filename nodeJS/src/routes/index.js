"use strict";

const express = require("express");
const router = express.Router();

//init route
// router.get("", (req, res, next) => {
//   return res.status(200).json({
//     message: "hi",
//   });
// });

router.use("/v1/api", require("./access"));

module.exports = router;
