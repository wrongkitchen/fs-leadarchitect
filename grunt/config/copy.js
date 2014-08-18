/**
 * Configuration for copy task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('copy', {
        server: {
            files: [{
                expand: true,
                cwd: '<%= yeogurt.dev %>/',
                dest: '<%= yeogurt.server %>/',
                src: [
                    'scripts/**/*.js',
                    'bower_components/**',
                    'images/**',
                    'json/**',
                    'styles/fonts/**/*.{woff,otf,ttf,eot,svg}',
                    '*.html'
                ]
            },]
        },
        dist: {
            files: [{
                expand: true,
                cwd: '<%= yeogurt.dev %>/',
                dest: '<%= yeogurt.dist %>/',
                src: [
                    'bower_components/**',
                    '*.html',
                    'scripts/modules/inline-*.*',
                    '!*.js',
                    '*.{ico,png,txt,html}',
                    '.htaccess',
                    'images/**/*.{webp}',
                    'json/**',
                    'styles/fonts/**/*.{woff,otf,ttf,eot,svg}'
                ]
            }]
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-copy');
};