define(['ember'], function(Ember) {

	var exports;

	exports = Ember.Controller.extend({
		init: function() {
			this.set('name', localStorage.name);
		},

		saveName: function(value) {
			localStorage.name = value;
		}
	});

	return exports;
});