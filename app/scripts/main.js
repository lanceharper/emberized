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
		},
		'templates': {
			deps: ['ember'],
			exports: 'Ember.TEMPLATES'
		}
	},

	paths: {
		'jquery': '../../components/jquery/jquery',
		'ember': '../../components/ember/ember',
		'handlebars': '../../components/handlebars/handlebars.runtime',
		'templates': './templates'
	}
});

require([
	'./app'
], function(App) {

	App.Router.map(function() {
	});

});