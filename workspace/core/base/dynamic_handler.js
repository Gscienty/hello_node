function abstract_handler(context){
    this.Context = context;
    this.Request = context.Requset;
    this.Response = context.Response;
};

abstract_handler.prototype.extend({
    page_load: function(func){
        func(this.Request, this.Response);
        this.Response.end();
    },
    set_config: function(config){
        this.config = config;
    }
});

module.exports = abstract_handler;
