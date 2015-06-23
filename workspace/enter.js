Object.extend = function (des, source) {
    for(p in source){
        des[p] = source[p];
    }
    return des;
};
Object.prototype.extend = function(object){
    return Object.extend.apply(this,[this,object]);
};

var http = require('http');
var url = require('url');
var util = require('util');

var route = require('./route');

var server = new http.Server();

server.on('request', function(request, response){
    route.exec(url.parse(request.url,true).path,{Request:request, Response:response});
});

server.listen(8080);
