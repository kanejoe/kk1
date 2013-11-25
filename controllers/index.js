'use strict';


module.exports = function (server) {

    server.get('/', function (req, res) {
        var model = { name: 'kk1' };
        
        res.render('index', model);
        
    });

};
