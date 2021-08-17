describe("variable share",function(){
    //var variable1;
    beforeEach(function(){
        this.variable1=10;
    })
    afterEach(function(){
        this.variable1=0;
    })
    it ("access value",function(){
        console.log(this.variable1++);
        console.log(this.variable1);
    })
})