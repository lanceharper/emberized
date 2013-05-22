define(['ember', 'templates'], function(Em, templates) {
	// ember overwrites this value with a new obj, so we need to set it
	// after ember is required.
	Ember.TEMPLATES = templates;

	// return the singleton app instance
	return Em.Application.create({
		LOG_TRANSITIONS: true
	});
});