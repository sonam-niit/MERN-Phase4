describe("First Suite",function(){

    // beforeEach(function(){
    //     this.addMatchers({
    //         toMax:function(){
    //             this.message=function(){
    //                 return "Expected "+this.actual+ " to Be Max";
    //             };
    //             return this.actual>100;
    //         }
    //     })
    // })




    it("check ToBE",function(){
        expect(8>3).toBe(true);
        expect(8<3).not.toBe(true);
    })

    it("check ToEqual",function(){
        var x=1;
        expect(x++).toEqual(1);
        expect(++x).not.toBe(1);
    })
    it("Check to Match",function(){

        expect("Hello bar Hello").toMatch(/bar/);
        expect("Hello World Hello").not.toMatch(/bar/);
        //regex testing
        var regex="^[a-zA-Z]at";
        expect("cat").toMatch(regex);//success
        //expect("cet").toMatch(regex);//fail
        expect("Cat").toMatch(regex);//fail
      
    })
    it("check ToBeGreaterThan",function(){
        expect(89).toBeGreaterThan(78);
        expect(8).toBeLessThan(57);
    })
    it("to Throw",function(){
        var error= function(){
            throw new Error();
        }
        expect(error).toThrow();
    })

    // it("custom Matcher",function(){
    //     expect(200).toMax();
    // })

})