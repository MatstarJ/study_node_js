
const http = require('http');
const routes = require('./routes')

const server = http.createServer(routes.requesHandler);

server.listen(4000);






