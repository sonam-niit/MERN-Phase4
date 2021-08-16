describe('The application router', function() {
  
    var router;
    afterEach(function() {
        
    Backbone.history.stop();
      
    });
    
      
    var routerSetup = function() {
        
    router = new app.Routers.RecipeRouter();
        
    Backbone.history.start();
      
    };
    
      
    
    it('should let us navigate to a recipe by id', function() {
        
    var routerSpy = spyOn(app.Routers.RecipeRouter.prototype, 'openRecipe');
    
        
    routerSetup();
    
        
    router.navigate('recipes/3', { trigger: true });
        
        
    expect(routerSpy).toHaveBeenCalled();
        
    expect(routerSpy).toHaveBeenCalledWith('3', null);
      
    });
    
      
    
    var spyAndSetup = function(spyConfig) {
        
    for(var method in spyConfig) {
          
    spyOn(spyConfig[method], method);
        
    }
    
        
    routerSetup();
      
    };
    
      
    
    it('should let us create a variation based on another recipe', function() {
        
    spyAndSetup({
          
    'createVariation': app.Routers.RecipeRouter.prototype
        
    });
    
        
    
    router.navigate('recipe/3/variation', {trigger: true});
    
        
    expect(router.createVariation).toHaveBeenCalled();
        
    expect(router.createVariation).toHaveBeenCalledWith('3', null);
      
    });
    
    });
    
    