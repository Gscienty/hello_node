var config = require('../config/route_config.json');
var static_handler = require('../base/static_handler');

exports.exec = function (path, context) {
    var route = path.substring(1, path.length).split('/');
    //默认页
    if(route.length === 1 && route[0] === ''){
        var page = require('../page');
        route.shift();
        page.load([], config.default, context);
        return;
    };

    //路由页
    if(route.length >= 1 && route[0] != ''){
        var page = require('../page');
        var config_name = route.shift();
        page.load(route, config[config_name], context);
    };

    //静态页
    if(route.length >= 1 && route[0] === config.static_namespace){
        route.shift();
        static_handler(route, context);
        return;
    };

    //找不到该页
    var page = require('../page');
    page.load([], config.not_found, context);
}
