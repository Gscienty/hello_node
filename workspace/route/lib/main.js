exports.exec = function (path, context) {
    var route = path.substring(1, path.length).split('/');

    //default page
    if(route.length === 1 && route[0] === ''){
        var page_class;
        page_class = require('../../app/html');
        var page = new page_class(context, 'app/html');

        page.load();
        return;
    }
    else{
      if(route[0] === 'html'){
        var page_class;
        page_class = require('../../app/html');
        var page = new page_class(context, 'app/html');
        page.page_index = route[1];
        page.load();
      }
      else if(route[0] === 'json'){
        var page_class;
        page_class = require('../../app/json');
        route.shift();
        var json = new page_class(context, route);
        json.load();
      }
      else if(route[0] === 'js' || route[0] === 'css'){
          var page_class;
          page_class = require('../../app/static');
          var type = route.shift();
          var javascript = new page_class(context, 'app/static');
          var spath = route[0];
          for(var i = 1; i < route.length; i++){
              spath = spath +'/'+ route[i];
          }
          javascript.load(spath, type);
      }
    }
}
