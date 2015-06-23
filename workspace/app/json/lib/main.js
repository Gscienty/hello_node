var base_page = require('../../../base/base_page');


function default_main(Context, rest){
    //继承
    this.extend(new base_page(Context));

    this.exec = function(n, p){
        try{
            var func_class = require('./methods/'+n);
            return (new func_class()).exec(p);
        }
        catch(ex){
            var func_class = require('./not_found');
            return (new func_class()).exec();
        }
    }

    this.load = function() {
        Response.writeHeader(200, {'Content-Type':'application/json'});
        var method_name = rest.shift();
        Response.end(this.exec(method_name, rest));
    }
};



module.exports = default_main;