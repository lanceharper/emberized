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
				tasks: ['handlebars']
			}
		},

		handlebars: {
			compile: {
				options: {
					namespace: 'Ember.TEMPLATES',
					amd: true,
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
	grunt.loadNpmTasks('grunt-contrib-handlebars');


	grunt.registerTask('default', ['handlebars', 'livereload-start', 'connect:livereload', 'regarde']);
};