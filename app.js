const http = require('http');
const port = 8080;
const host = '0.0.0.0';

const server = http.createServer((req,res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  res.end('Nodejs Example');
});

server.listen(port,host);
console.log('Server listning');



