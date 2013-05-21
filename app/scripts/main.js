requirejs.config({
	shim: {
		'jquery': {
			exports: '$'
		},
		'handlebars': {
			exports: 'Handlebars'
		},
		'ember': {
			deps: ['jquery', 'handlebars'],
			exports: 'Em'
		}
	},

	paths: {
		'jquery': '../../components/jquery/jquery',
		'ember': '../../components/ember/ember',
		'handlebars': '../../components/handlebars/handlebars.runtime'
	}
});

require(['./app'], function(app) {
	window.App = app;
});