var app = window.app || {};
app.Routers = app.Routers || {};
app.Routers.RecipeRouter = Backbone.Router.extend({  
routes: {   
'recipes/:id': 'openRecipe',   
'recipe/:id/variation': 'createVariation'  
},
  
openRecipe: function() {
},
  
createVariation: function () { 
}
});
