const express = require('express');
const helmet = require('helmet');
const userRouter = require('./users/userRouter');
const postRouter = require('./posts/postRouter');

const server = express();

// Global Middleware
server.use(express.json());
server.use(helmet);
server.use(logger);

// Default GET
server.get('/', (req, res) => {
  res.send(`<h2>Hello World from Eternal Screaming!</h2>`);
});

server.use('api/users', userRouter);
server.use('api/posts', postRouter);

//custom middleware

function logger(req, res, next) {
  console.log(
    `A ${req.method} request for '${
      req.url
    }', reqested: ${new Date().toUTCString()}`
  );
  next();
}

module.exports = server;
