function absolute_page(context, path){
    var Context;
    var Request;
    var Response;
    var absolute_path;

    this.initialize(context, path);
};

absolute_page.prototype.extend({
    //初始化
    initialize : function (context, path) {
        Context = context;
        Request = context.Request;
        Response = context.Response;

        absolute_path = path;
    },
    //视图
    view: function(n, e){
        if(n === undefined) n = 'index';
        if(e === undefined) e = 'html'
        var fs = require('fs');
        if(fs.exists(absolute_path +'/view/'+n+'.'+e, function (i) {
            if(i){
                fs.readFile(absolute_path +'/view/'+n+'.'+e,'utf-8',function(err,data){
                    if(err){
                        console.log(err);
                    }
                    else{
                        Response.writeHeader(200,{'content-type':'text/html'});
                        Response.end(data);
                    }
                });
            }
            else{
                fs.readFile(absolute_path +'/view/404.html','utf-8',function(err,data){
                    if(err){
                        console.log(err);
                    }
                    else{
                        Response.writeHeader(200,{'content-type':'text/html'});
                        Response.end(data);
                    }
                });
            }
        }));
    },
    
    result: function(n, e, type){
        if(n === undefined) n = 'index';
        if(e === undefined) e = 'html';
        if(type === undefined) type = 'text/html';
        var fs = require('fs');
        if(fs.exists(absolute_path +'/view/'+n+'.'+e, function (i) {
            
            if(i){
                fs.readFile(absolute_path +'/view/'+n+'.'+e,'utf-8',function(err,data){
                    if(err){
                        console.log(err);
                    }
                    else{
                        Response.writeHeader(200,{'content-type':type});
                        Response.end(data);
                    }
                });
            }
            else{
                Response.writeHeader(200,{'content-type':"application/json"});
                Response.end('{"code":404, "desp":"not found."}');
            }
        }));
    },
  
    load: function () {}


});


module.exports = absolute_page;
