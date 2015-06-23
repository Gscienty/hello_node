var base_page = require('../../../base/base_page');


function default_main(Context, path){
    //继承
    this.extend(new base_page(Context, path));
    //默认值
    this.page_index = 'index';

    this.load = function() {
        this.view(this.page_index);
    }
};

module.exports = default_main;
