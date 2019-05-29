const port = 8000;
const server = require('./server');

server.listen(port, () => {
  console.log(`Server listening on Port: ${port}`);
});
