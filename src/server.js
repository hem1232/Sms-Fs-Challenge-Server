const express = require("express");
const app = express();

const http = require("http");
const server = http.Server(app);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`started on port: ${port}`);
});

