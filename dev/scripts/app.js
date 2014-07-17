/**
*   App Description
*/

define(function (require) {
    'use strict';
    var someModule = require('./modules/module');
    var app = {
        init: function(msg) {
            someModule.init('Module loaded from app.js');
            console.log(msg);
            return 'app initialized';
        }
    };
    return app;

});
