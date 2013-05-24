define([
	'ember',
	'./controllers/stacks',
	'./controllers/card',
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
	CardController,
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

	App.StacksController = StacksController;
	App.CardController = CardController;

	App.CardView = CardView;

	return App;
});