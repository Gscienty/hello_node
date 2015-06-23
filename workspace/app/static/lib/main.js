var base_page = require('../../../base/base_page');


function default_main(Context, path){
    //继承
    this.extend(new base_page(Context, path));

    this.load = function(n,t) {
        var content_type;
        if(t === 'js'){
            content_type = 'application/javascript';
        }
        else if(t === 'css'){
            content_type = 'text/css';
        }
        
        this.result(n, t, content_type);
    }
};

module.exports = default_main;
