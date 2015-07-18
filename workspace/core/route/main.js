var config = require('../config/route_config.json');
var static_handler = require('../base/static_handler');

exports.exec = function (path, context) {
    var route = path.substring(1, path.length).split('/');

    //默认页
    if(route.length === 1 && route[0] === ''){
        var page_class = require('../../'+config.default.class_path+'/'+config.default.class_name);
        var page = new page_class(context);
        page.handler_process();
    };

    //静态页
    if(route.length >= 1 && route[0] === config.static_namespace){
        route.shift();
        static_handler(route, context.Response);
    }
}
