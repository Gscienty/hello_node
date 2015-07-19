var config = require('./core/config/global_config');

var http = require('http');
var url = require('url');
var util = require('util');

config.init();
var route = require(config.routerPath);
var server = new http.Server();

server.on('request', function(request, response){
    route.exec(url.parse(request.url,true).path,{Request:request, Response:response});
});

server.listen(config.listenPort);
