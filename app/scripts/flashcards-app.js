define([
	'ember',
	'./controllers/stacks',
	'./models/stack',
	'./routes/base',
	/// return void
	'templates'
], function(
	Ember,
	StacksController,
	StackModel,
	baseRoutes) {

	var App = Ember.Application.create({
		LOG_TRANSITIONS: true
	});

	App.Router.map(baseRoutes);

	App.ApplicationController = StacksController;

	App.Stack = StackModel;

	return App;
});