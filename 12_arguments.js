describe ("Arguments", function() {

  it ("can take more arguments than declared", function() {
    let f = function(arg1) {
      expect(arguments.length).not.toBeLessThan(2);
      return arg1 + 1;
    };
    expect(f(1,2,3,4,5)).toEqual(2);   // call f with 5 arguments, first being value 1
  });

  it ("can take less arguments than declared", function() {
    let f = function(arg1, arg2) {
      expect(arguments.length).toBeLessThan(2);
      expect(arg2).toBeUndefined();
      return arg1 + 1;
    };
    expect(f(1)).toEqual(2);   // call f with only one argument, value 1
  });

  it ("has the number of parameters declared in property 'length'", function() {
    let f = function(arg1, arg2) {};
    expect(f.length).toEqual(2);      // check the property length of f
  });

  it ("has all args in 'arguments'", function() {
    let f = function(arg1, arg2) {
      expect(arguments).toBeDefined();      // check that arguments is defined
      expect(arguments.length).toEqual(3);         // check property length of arguments
      expect(arguments[0]).toEqual(1);         // check content of arguments[0]
      expect(arguments[1]).toEqual(2);         // check content of arguments[1]
      expect(arguments[2]).toEqual(3);         // check content of arguments[2]
      expect(arguments[3]).toBeUndefined();    // check that arguments[3] is undefined
    };
    f(1, 2, 3);
  });

  it ("arguments is NOT a real array!", function() {
    expect([1, 2].pop()).toEqual(2); // the method pop() modifies the array by removing and returning its last value.

    let wrapper = function() {
      let f = function() {
        arguments.pop();           // call method pop() on arguments - it will throw undefined
      };
      f(1, 2);
    };
    expect(wrapper).toThrow();
  });

});
