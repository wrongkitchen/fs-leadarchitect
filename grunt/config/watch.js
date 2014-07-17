/**
 * Configuration for watch task(s)
 */
'use strict';

module.exports = function(grunt) {

    grunt.config.set('watch', {
        options: {
            spawn: true,
            livereload: false
        },html: {
            files: [
                '<%= yeogurt.dev %>/views/**/*.html'
            ],
            tasks: [
                'newer:copy:server',
                
                'clean:temp'
            ]
        },
        
        sass: {
            files: ['<%= yeogurt.dev %>/styles/**/*.scss'],
            tasks: [
                'sass:server',
            ]
        },
        js: {
            files: [
                '<%= yeogurt.dev %>/scripts/**/*.js',
                '<%= yeogurt.dev %>/bower_components/**/*.js'
            ],
            tasks: [
                'newer:copy:server'
            ]
        },
        images: {
            files: ['<%= yeogurt.dev %>/images/**/*.{png,jpg,gif}'],
            tasks: ['newer:copy:server']
        },
        root: {
            files: [
                '<%= yeogurt.dev %>/*.{ico,png,txt,html}',
                '<%= yeogurt.dev %>/images/**/*.webp',
                '<%= yeogurt.dev %>/styles/fonts/**/*.*'
            ],
            tasks: ['newer:copy:server']
        },
        livereload: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            files: [
                '<%= yeogurt.dev %>/*.{ico,png,txt,html}',
                '<%= yeogurt.server %>/styles/fonts/**/*.*',
                '<%= yeogurt.server %>/**/*.html',
                '<%= yeogurt.dev %>/styles/**/*.scss',
                '<%= yeogurt.server %>/scripts/**/*.js',
                '<%= yeogurt.server %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
            ]
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-watch');
};