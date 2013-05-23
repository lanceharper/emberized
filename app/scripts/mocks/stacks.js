define(['faker'], function(Faker) {

	var exports;

	var numCards = 10;
	var numStacks = 5;

	var mintStack = function(index) {
		var stack = {
			id: index+10,
			title: Faker.Company.companyName(),
			cards: times(numCards, mintCard)
		};

		stack.cardsById = {};

		stack.cards.forEach(function(card) {
			stack.cardsById[card.id] = card;
		});

		return stack;
	};

	var mintCard = function(index) {
		return {
			id: index+10,
			question: Faker.Company.catchPhrase(),
			answer: Faker.Company.bs()
		};
	};

	var times = function(n, fn) {
		var result = Array(n);
		for (var i = 0; i < n; i++) {
			result[i] = fn.call(null, i);
		}
		return result;
	};

	exports = times(numStacks, mintStack);

	exports.byId = {};

	exports.forEach(function(stack) {
		exports.byId[stack.id] = stack;
	});

	return exports;

});