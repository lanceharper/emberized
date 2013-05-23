define(['ember'], function(Ember) {

	var exports;

	exports = Ember.View.extend({
		tagName: 'li',
		classNames: ['card']
	});

	return exports;
});