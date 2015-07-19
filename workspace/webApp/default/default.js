var abstract_page = require('../../core/base/dynamic_handler');

function default_main(context){
    this.extend(new abstract_page(context));
    //设置配置
    this.set_config({
        
    });
    //加载页面
    this.page_load(function(request, response){
        response.write('a');
    });
};

module.exports = default_main;
