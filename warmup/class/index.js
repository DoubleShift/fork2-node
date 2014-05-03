/**  warm 4
module.exports =  function Class(obj){
  var Foo = function(){};

  if(obj.initialize){
	Foo = obj.initialize;
  };

  for(var i in obj){
	if(i === 'initialize') continue;
	Foo.prototype[i] = obj[i];
  };

  return Foo;
};

**/

module.exports =  function Class(child,parent){
  var Foo = function(){};

   if(parent){
      for (var i in parent){
	Foo[i] = parent[i];
      }
   }


  for (var i in child){
	Foo[i] = child[i];
  };

  if(parent){
    Foo.prototype = parent.prototype;
  };
  Foo.__super__ = parent || Object;
  
  Foo.prototype.constructor = Foo;

  return Foo;
};










