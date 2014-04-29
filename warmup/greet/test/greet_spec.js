var greet = require("../");
describe('greet', function(){
  it("should greet a person by name", function(){
    expect(greet("DoubleShit")).to.eql("hello,DoubleShit");
  });

  it( "should greet a person flirtatiously if drunk",function(){
	expect(greet("DoubleShit",true)).to.eql("helloDoubleShit,you look sexy today");
   } );
});
