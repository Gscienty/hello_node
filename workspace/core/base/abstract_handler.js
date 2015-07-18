function abstract_handler(context){
    this.Context = context;
    this.Request = context.Requset;
    this.Response = context.Response;
};

module.exports = abstract_handler;
