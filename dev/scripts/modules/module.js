/**
*   Example Module Description
*/

define(function (require) {

    'use strict';

    var module = {
        init: function(msg) {
            var $ele = $('<p></p>');

            $ele.append('Module loaded! - Message: ' + msg);
            console.log($ele.text());
            return $ele.text();
        }
    };

    return module;

});
