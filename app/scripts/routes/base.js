define([], function() {
	return function() {
		this.resource('stack', {path: '/stack/:stack_id'}, function () {
			this.resource('card', {path: '/card/:card_id'});
		});
	};
});