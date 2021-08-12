describe("getNthElement", function () {
    it("should be defined", function () {
        expect(window.getNthElement).toBeDefined();
    });
    it("should return the Nth element", function () {
        var result = getNthElement([1, 2, 3], 0);
        expect(result).toEqual(1);
    });
});
