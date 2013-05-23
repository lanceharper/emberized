define([], function() {
	return function() {
		this.resource('stack', {path: '/stack/:stack_id'});
	};
});