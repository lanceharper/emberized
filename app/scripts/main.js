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
		'faker': {
			exports: 'Faker'
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
		'faker': '../../node_modules/Faker/Faker',
		'templates': './templates',
		'text': '../../components/requirejs-text/text'
	}
});

require([
	'./flashcards-app'
], function(App) {

	// by requiring an app, we've initialized the Ember app for this page
	// main.js could be an extension/customization point w/r/t default app behavior
	window.App = App;
});