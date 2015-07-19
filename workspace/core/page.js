var global_config = require('./config/route_config.json');

function page(config, context){};

page.extend({
    //转移
    transfer: function(name, context){
        try{
            this.load(global_config[name], context);
        }
        catch(e){
            this.load([], global_config.not_found, context);
        }
    },
    //加载
    load: function(route, config, context){
        try{
            //当为绝对路径时
            if(typeof config === 'string'){
                var router = require('./route');
                router.exec(config, context);
            }
            else{
                require('./route/router.js')(route, config, context);
            }
        }
        catch(e){
            console.log(e);
            this.load([], global_config.not_found, context);
        }
    }
});

module.exports = page;
