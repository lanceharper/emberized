define([
	'ember',
	'../mocks/stacks'
], function(Ember, mocks) {

	var exports;

	exports = Ember.Object.extend().reopenClass({
		find: function(cardId, stackId) {
			var stack = mocks.byId[stackId];

			if (stack) {
				return stack.cardsById[cardId];
			}

			return null;
		}
	});

	return exports;
});