// var app = window.app || {};
// app.Collections = app.Collections || {};
// app.Collections.Recipes = Backbone.Collection.extend({
//     model: app.Models.Recipe,
//     comparator: 'dateAdded',
//     getRecipesNames: function () {
//         return _.uniq(this.pluck("name"));
//     },

//     getNewestForName:function(recipeName){
//         var variations=this.where({
//             name:recipeName
//         })
//         return_.last(variations)
//     }
// });  

var app = window.app || {};
app.Collections = app.Collections || {};
app.Collections.Recipes = Backbone.Collection.extend({
    model: app.Models.Recipe,
    comparator: 'dateAdded',
    url="/recipes",
    getRecipesNames: function () {
        return _.uniq(this.pluck("name"));
    },

    getNewestForName: function (recipeName) {
        var variations = this.where({
            name: recipeName
        });
        return _.last(variations);
    }
});


