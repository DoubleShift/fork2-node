var Class = require('./');  
var Foo = Class({
    initialize: function(a,b) {
      this.a = a;
      this.b = b;
    },

    getA: function() {
      return this.a;
    },

    getB: function() {
      return this.b;
    }
  });

  var foo = new Foo(1,2);
 console.log(foo.getA());
