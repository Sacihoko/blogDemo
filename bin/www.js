const http = require('http');
const handleRouter = require("../app.js");

const PORT = 8080;

const server = http.createServer(handleRouter);
server.listen(PORT)