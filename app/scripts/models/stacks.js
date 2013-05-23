define([
	'ember',
	'../mocks/stacks'
], function(Ember, mocks) {

	var exports;

	exports = Ember.ArrayProxy.extend().reopenClass({
		find: function() {
			return mocks;
		}
	});

	return exports;
});