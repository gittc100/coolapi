// module.exports = {
//     greet,
//     secret: 'shhhh',
// };
// function greet() {
//     console.log('\nserver.js\n')
// }
// Private Stuff

const express = require("express");

const configureMiddleware = require('../config/middleware');
const doubler = require('../common/doublerMiddleware');
const productRouter = require('../products/productRouter');
const clientRouter = require('../clients/clientRouter');
const server = express();

// middleware
configureMiddleware(server);

// routes/middleware // localhost:5000?number=4 in postman or browser
// server.get("/", (req, res) => {
//   res.send(`sanity check success`);
// });

server.use('/products', productRouter);

// server.get("/productss", (req, res) => {
//   res.send(`GET /products endpoints`);
// });

server.use('/clients', clientRouter);

// server.get("/clients", (req, res) => {
//   res.send(`GET /clients endpoints`);
// });

server.get("/orders", (req, res) => {
  res.send(`GET /orders endpoints`);
});

// localhost:5000/double?number=4
server.get("/double", doubler, (req, res) => {
  // doubler local middleware
  res.send(`the value is ${req.query.number} and the double is ${req.double}`);
});

module.exports = server;
