const express = require('express');
const helmet = require('helmet');

const postRouter = require('./posts/postRouter');

const server = express();

// Global Middleware
server.use(express.json());
server.use(helmet());
server.use(logger);

server.use('/posts/', postRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Hello world from Eternal Screaming!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(`A ${req.method} request for '${req.url}'`)
}

module.exports = server;
