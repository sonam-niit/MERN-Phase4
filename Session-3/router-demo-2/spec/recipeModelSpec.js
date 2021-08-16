describe('A recipe', function () {

    it('should exist', function () {

        expect(app.Models.Recipe).toBeDefined();

    });

    it('should have certain defaults', function () {

        var recipe = new app.Models.Recipe();
        expect(recipe.get('name')).toEqual('Unnamed');

        expect(recipe.get('rating')).toEqual(0);

        expect(recipe.get('ingredients').length).toEqual(0);

        expect(recipe.get('instructions').length).toEqual(0);

        expect(recipe.get('dateAdded')).toBeDefined();

    });



    it('should identify if it has nuts', function () {

        var noRestrictionsRecipe = new app.Models.Recipe(FIXTURES.recipes.noRestrictions);
        var withNutsRecipe = new app.Models.Recipe(FIXTURES.recipes.withNuts);
        expect(noRestrictionsRecipe.containsNuts()).toBeFalsy();
        expect(withNutsRecipe.containsNuts()).toBeTruthy();

    });
    it('should identify if it has eggs', function () {
        var noRestrictionsRecipe = new app.Models.Recipe(FIXTURES.recipes.noRestrictions);
        var withEggsRecipe = new app.Models.Recipe(FIXTURES.recipes.withEggs);


        expect(noRestrictionsRecipe.containsEggs()).toBeFalsy();

        expect(withEggsRecipe.containsEggs()).toBeTruthy();

    });



    it('should identify if it is vegetarian', function () {

        var noRestrictionsRecipe = new app.Models.Recipe(FIXTURES.recipes.noRestrictions);


        var withMeat = new app.Models.Recipe(FIXTURES.recipes.withMeat);


        expect(noRestrictionsRecipe.isVegetarian()).toBeTruthy();

        expect(withMeat.isVegetarian()).toBeFalsy();

    });


    it('should delegate to checkForIngredientType', function () {

        var withEggsRecipe = new app.Models.Recipe(FIXTURES.recipes.withEggs);


        var mySpy = spyOn(withEggsRecipe, 'checkForIngredientType').and.callThrough();


        var hasEggs = withEggsRecipe.containsEggs();


        expect(mySpy).toHaveBeenCalled();

        expect(mySpy).toHaveBeenCalledWith('isEggs');

        expect(hasEggs).toBeTruthy();

        expect(mySpy.calls.count()).toBe(1);


    });

});
