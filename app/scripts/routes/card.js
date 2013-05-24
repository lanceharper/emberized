define([
	'ember',
	'../models/card'
], function(Ember, Card) {

	var exports;

	exports = Ember.Route.extend({
		model: function(params) {
			var stack = this.controllerFor('stack').get('model');

			return Card.find(params.card_id, stack.id);
		},

		setupController: function(controller, model) {
		}
	});

	return exports;
});