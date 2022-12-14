const express = require("express");

const app = express();
var port=3000
app.use(express.json());

app.use("/chatbot", require("./src/route"));

app.get("/", (req, res) => {
  res.send("<h1><b>Welcome to Chatbot</b></h1>");
});

app.listen(port, () => {
    console.log(`Example app listening on port 3000`)
  })