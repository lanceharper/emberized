define([], function() {
	return function() {
		this.resource('stacks');
		this.resource('stack', {path: '/stack/:stack_id'});
	};
});