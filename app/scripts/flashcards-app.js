define([
	'ember',
	'./controllers/stacks',
	'./models/stack',
	'./routes/base',
	'./routes/stacks',
	'./views/card',
	/// return void
	'templates'
], function(
	Ember,
	StacksController,
	StackModel,
	baseRoutes,
	StacksRoute,
	CardView) {

	var App = Ember.Application.create({
		LOG_TRANSITIONS: true
	});


	App.Router.map(baseRoutes);

	App.Stack = StackModel;
	App.IndexRoute = StacksRoute;
	App.CardView = CardView;

	return App;
});