/** test warmup4
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
**/

var Class = require('./');  
 var A = Class({
    a: function() {
      return 1;
    }
  });

  var B = Class({
    b: function() {
      return 2;
    }
  },A);

  var b = new B();
console.log(b.constructor);
