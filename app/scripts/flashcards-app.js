define([
	'ember',
	'./controllers/stacks',
	'./models/stack',
	'./models/card',
	'./routes/base',
	'./routes/stacks',
	'./routes/card',
	'./views/card',
	/// return void
	'templates'
], function(
	Ember,
	StacksController,
	StackModel,
	CardModel,
	baseRoutes,
	StacksRoute,
	CardRoute,
	CardView) {

	var App = Ember.Application.create({
		LOG_TRANSITIONS: true
	});


	App.Router.map(baseRoutes);

	App.Stack = StackModel;
	App.Card = CardModel;
	App.IndexRoute = StacksRoute;
	App.CardRoute = CardRoute;
	App.CardView = CardView;

	return App;
});