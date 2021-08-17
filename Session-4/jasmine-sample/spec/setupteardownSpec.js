describe("Set Up and Tear Down Check",function(){

    beforeEach(function(){
        console.log("Executing before each:")
    })
    afterEach(function(){
        console.log("Executing After each:")
    })

    beforeAll(function(){
        console.log("Before All:")
    })
    afterAll(function(){
        console.log("After All:")
    })

    it ("first Test Spec",function(){
        console.log("Test 1 Executed")
    })
    it ("second Test Spec",function(){
        console.log("Test 2 Executed")
    })
    it ("third Test Spec",function(){
        console.log("Test 3 Executed")
    })
    it ("fourth Test Spec",function(){
        console.log("Test 4 Executed")
    })
})