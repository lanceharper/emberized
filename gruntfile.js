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
			}
		}
	});

	grunt.loadNpmTasks('grunt-regarde');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-livereload');

	grunt.registerTask('default', ['livereload-start', 'connect:livereload', 'regarde']);
};