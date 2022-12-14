const express = require("express");
const router = express.Router();

const controller = require("./controller");


/////////// BASIC ////////////////
router.post(
  "/message",
  controller.chatbot
);

module.exports = router;
