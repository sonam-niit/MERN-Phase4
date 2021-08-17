describe("Spy Demo",function(){
    var x,y=null;

    beforeEach(function(){
        x={
            setY:function(value){
                y=value;
            }
        }
    spyOn(x,'setY');
    x.setY(34);
    x.setY(89,'another value passing')
});

    it ("check Spy was called",function(){
        expect(x.setY).toHaveBeenCalled();
    })
    it ("check Spy was called with values",function(){
        expect(x.setY).toHaveBeenCalledWith(34);
        expect(x.setY).toHaveBeenCalledWith(89,'another value passing');
    })
    // it ("check null",function(){
    //     expect(x).toBeNull();//fail
    // })
})