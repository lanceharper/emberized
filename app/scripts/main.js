requirejs.config({
	shim: {
		'jquery': {
			exports: '$'
		}
	},

	paths: {
		'jquery': '../../components/jquery/jquery',
		'ember': '../../components/ember/ember'
	}
});

require([], function() {
	console.log('hello, world');
});