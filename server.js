const express = require('express');
const userRouter = require('./users/userRouter');
const postRouter = require('./posts/postRouter');

const server = express();

// Global Middleware
server.use(express.json());
server.use(logger);
server.use('/users/', userRouter);
server.use('/posts/', postRouter);


// Default GET
server.get('/', (req, res) => {
  res.send(`<h2>Hello World from Eternal Screaming!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(`A ${req.method} request for '${req.url}', reqested: ${new Date().toUTCString()}`);
  next();
}

module.exports = server;
