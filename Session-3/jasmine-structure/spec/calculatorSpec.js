class calculator{

    
    add(a,b)
    {
        return a+b;
    }
    minus(a,b)
    {
        return a-b;
    }
}
describe("calculator test",function(){
    var calc=new calculator();
    it('should be able to add two numbers',function(){
        console.log(calc.add(2,6));
        expect(calc.add(2,6)).toBe(8);
    });

    it('should be able to subtract two numbers',function(){
        console.log(calc.minus(10,4));
        expect(calc.minus(12,6)).toBe(6);
    })

    it('more clarity',function(){
        expect(calc.minus(12,6)).not.toBe(8);
        expect(calc.minus(12,6)).toEqual(6);
        expect(calc.minus(12,6)).toBeLessThan(19);
        expect(calc.minus(12,6)).toBeGreaterThan(3);
    })
    it('should create calculator class',function(){
        expect(calc).toBeDefined();
        expect(calc).not.toBeUndefined();
        expect(calc).not.toBeNull();
    })
    
});