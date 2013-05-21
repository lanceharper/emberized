define(['ember', './templates'], function(Em, templates) {
	Ember.TEMPLATES = templates;
	return Em.Application.create();
});