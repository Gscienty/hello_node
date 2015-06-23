var base_func = require('../../../base/base_func');

function not_found(){
    this.extend(this, new base_func());

    this.exec = function(params){
        return '{"code":"404","desp":"not found method"}';
    }
};

module.exports = not_found;
