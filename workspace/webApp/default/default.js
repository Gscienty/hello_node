var abstract_page = require('../../core/base/abstract_handler');

function default_main(context){
    this.extend(new abstract_page(context));
};

default_main.prototype.extend({
    page_load :function(){
        this.Response.end();
    }
});

default_main.prototype.handler_process = function(){
    this.page_load();
};

module.exports = default_main;
