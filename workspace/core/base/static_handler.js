var config = require('../config/static_file_route_config.json');

module.exports = function(route, context){
    var truthPath = config.path;
    var node;
    var router = config;
    try{
        while((node = route.shift()) != undefined){
                router = router.route[node];
                truthPath = truthPath +'/' + router.path;
        };
        if(router.node_type != 'namespace'){
            context.Response.writeHead(200, {'Content-Type': router.content_type});
            var fs = require('fs');
            context.Response.end(fs.readFileSync(truthPath));
        }else {
            context.Response.writeHead(403, { 'Content-Type': 'text/html'});
            context.Response.write('<h1 style="text-align:center">Forbidden</h1>')
            context.Response.end();
        }
    }
    catch(e){
        var not_found = require('../page.js');
        not_found.transfer('not_found', context);
    }
};
