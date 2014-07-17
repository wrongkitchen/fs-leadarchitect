/**
*   Main Description
*/

'use strict';
require.config({
    paths: {app: 'app'
    }
});

require(['app'], function (app) {
    app.init('Welcome to Yeogurt!');
    console.log('Running jQuery %s', $().jquery);
});

