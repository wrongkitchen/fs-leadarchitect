/**
*   App Spec Test
*/

'use strict';

define(function(require) {
    var app = require('app');

    describe('just checking', function() {

        it('works for app', function() {
            var msg = 'Welcome to yeogurt!';

            var message = app.init(msg);
            
            expect(message).toMatch(/initialized/);
        });

    });

});