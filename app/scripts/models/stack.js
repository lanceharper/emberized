define([
	'ember'
], function(Ember) {

	var exports;

	exports = Ember.Object.extend().reopenClass({
		find: function(id) {
			return {id: id, foo: 'bar'};
		}
	});

	return exports;

});