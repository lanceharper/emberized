var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var folderMount = function folderMount(connect, point) {
	return connect.static(path.resolve(point));
};

module.exports = function(grunt) {

	grunt.initConfig({
		connect: {
			livereload: {
				options: {
					port: 9001,
					hostname: undefined,
					middleware: function (connect, options) {
						return [lrSnippet, folderMount(connect, '.')];
					}
				}
			}
		},

		regarde: {
			markup: {
				files: 'app/**/**/*.html',
				tasks: ['livereload']
			},
			js: {
				files: 'app/**/**/**/**/*.js',
				tasks: ['livereload']
			},
			hbs: {
				files: 'app/templates/**/*.hbs',
				tasks: ['ember_handlebars']
			}
		},

		ember_handlebars: {
			compile: {
				options: {
					processName: function(name) {
						return name.replace('app/templates/', '')
							.replace('.hbs', '')
							.replace(/\//g, '_');
					}
				},
				files: {
					'app/scripts/templates.js': ['app/templates/**/*.hbs']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-regarde');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-livereload');
	grunt.loadNpmTasks('grunt-ember-handlebars');


	grunt.registerTask('default', ['ember_handlebars', 'livereload-start', 'connect:livereload', 'regarde']);
};