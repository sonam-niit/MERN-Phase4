describe("A page with Backbone", function () {
    it("should have access to underscore", function () {
        expect(window._).toBeDefined();
        expect(window._.VERSION).toBeDefined();
    });
    it("should have access to Backbone", function () {
        expect(window.Backbone).toBeDefined();
        expect(window.Backbone.Model).toBeDefined();
        expect(window.Backbone.Collection).toBeDefined();
        expect(window.Backbone.View).toBeDefined();
    });
});
