/**
 * Builds out an optimised site through minification of CSS and HTML, as well as  uglification and optimisation of Javascript.
 */
'use strict';

module.exports = function(grunt) {
    grunt.registerTask('test', 'Peform tests on JavaScript', [
        'jshint:test',
        
        'connect:test',
        'karma:unit',
        'clean:temp'
    ]);
};