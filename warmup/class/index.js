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






