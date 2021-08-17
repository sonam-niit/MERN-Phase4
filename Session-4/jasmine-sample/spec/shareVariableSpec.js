describe("variable share",function(){
    var variable1;
    beforeEach(function(){
        variable1=10;
    })
    afterEach(function(){
        variable1=0;
    })
    it ("access value",function(){
        console.log(variable1++);
        console.log(variable1);
    })
})