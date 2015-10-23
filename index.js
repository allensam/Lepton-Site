var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: '.',
  port: process.env.PORT || 9080,
  followSymlink: true
});

server.start(function () {
  console.log('Server listening to', server.port);
});