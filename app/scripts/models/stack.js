define([
	'ember',
	'../mocks/stacks'
], function(Ember, mocks) {

	var exports;

	exports = Ember.Object.extend().reopenClass({
		find: function(id) {
			return mocks.byId[id];
		}
	});

	return exports;
});