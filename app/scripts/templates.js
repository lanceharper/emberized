define(['handlebars'], function(Handlebars) {

this["Ember"] = this["Ember"] || {};
this["Ember"]["TEMPLATES"] = this["Ember"]["TEMPLATES"] || {};

this["Ember"]["TEMPLATES"]["application"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<header>\n  <h1>application</h1>\n</header>\n\n<div>\n  ";
  if (stack1 = helpers.outlet) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.outlet; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n</div>";
  return buffer;
  });

return this["Ember"]["TEMPLATES"];

});