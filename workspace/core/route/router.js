module.exports = function(route, config, context){
    if(config.type === 'dynamic'){
        console.log('../../'+(config.path === ''? '':(config.path+'/'))+config.name);
        require('../../'+(config.path === ''? '':(config.path+'/'))+config.name)(context);
    }
    else if(config.type === 'static'){
        require('../base/static_handler')(
            config.path.substring(1, config.path.length).split('/'), context
        );
    }
    else if(config.type === 'router'){
        require('../../'+(config.path === ''? '':(config.path+'/'))+config.name).route(route, context);
    }
};
