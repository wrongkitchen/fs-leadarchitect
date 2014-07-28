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
                    'bower_components/**/*.{js,map,css}',
                    'bower_components/**/*.{woff,otf,ttf,eot,svg}',
                    'images/**',
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
                    'bower_components/requirejs/require.js',
                    'bower_components/modernizr/modernizr.js',
                    'bower_components/**/*.{woff,otf,ttf,eot,svg}',
                    'bower_components/jquery/jquery.min.*',
                    '*.html',
                    'scripts/modules/inline-*.*',
                    '!*.js',
                    '*.{ico,png,txt,html}',
                    '.htaccess',
                    'images/**/*.{webp}',
                    'styles/fonts/**/*.{woff,otf,ttf,eot,svg}'
                ]
            }]
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-copy');
};