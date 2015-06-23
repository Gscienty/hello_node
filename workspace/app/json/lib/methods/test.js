var base_func = require('../../../../base/base_func');

module.exports = function(){
    this.extend(this, new base_func());

    this.exec = function(params){
        return '{"code":"200","desp":"normal method"}';
    }
};
