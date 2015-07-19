module.exports.route = function(route, context){
    this.route_table = {
        "default" : {
            "type": "dynamic",
            "path": "webApp/default",
            "name": "default.js"
        }
    };
    var config = this.route_table.default;
    if(route.length >= 1 && route[0] != ''){
        config = this.route_table[route.shift()];
    };

    require('../../core/route/router.js')(route, config, context);
};
