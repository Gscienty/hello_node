module.exports ={
    init: function(){
        (function objectExtend(){
            Object.extend = function (des, source) {
                for(p in source){
                    des[p] = source[p];
                }
                return des;
            };
            Object.prototype.extend = function(object){
                return Object.extend.apply(this,[this,object]);
            };
        })();
    },

    listenPort: 8080,
    corePath: './core/route'
}
