var config = require('../config/static_file_route_config.json');

module.exports = function(route, response){
    var truthPath = config.path;
    var node;
    var router = config;
    while((node = route.shift()) != undefined){
        router = router.route[node];
        truthPath = truthPath +'/' + router.path;
    };
    if(router.node_type != 'namespace'){
        response.writeHead(200, {'Content-Type': router.content_type});
        var fs = require('fs');
        response.end(fs.readFileSync(truthPath));
    }else {
        response.writeHead(403, { 'Content-Type': 'text/html'});
        response.write('<h1 style="text-align:center">Forbidden</h1>')
        response.end();
    }
};
