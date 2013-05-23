define([
	'ember',
	'./controllers/stacks',
	'./models/stack',
	'./routes/base',
	'./routes/stacks',
	/// return void
	'templates'
], function(
	Ember,
	StacksController,
	StackModel,
	baseRoutes,
	StacksRoute) {

	var App = Ember.Application.create({
		LOG_TRANSITIONS: true
	});


	App.Router.map(baseRoutes);

	App.Stack = StackModel;
	App.IndexRoute = StacksRoute;

	return App;
});