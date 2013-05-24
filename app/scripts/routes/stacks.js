define([
	'ember',
	'../models/stacks'
], function(Ember, Stacks) {

	var exports;

	exports = Ember.Route.extend({
		model: function(params) {
			return Stacks.find();
		},

		setupController: function(controller, model) {
		}
	});

	return exports;
});