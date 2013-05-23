define([
	'ember',
	'templates'
], function(Em) {
	// return the singleton app instance
	var App = Em.Application.create({
		LOG_TRANSITIONS: true
	});

	App.Router.map(function() {
	});


	return App;
});