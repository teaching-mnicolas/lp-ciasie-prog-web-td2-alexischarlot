describe ("Function Name", function() {

  it ("can have a name", function() {
    function f() {
      return 1;
    };
    expect(f()).toEqual(1);      // call directly f()
  });

  it ("can have a property 'name'", function() {
    function f() {
      return 1;
    };
    expect(f.name).toEqual("f");    // check the name property of f
  });

  it ("have a property 'name' by default if assigned to a variable", function() {
    let f = function() {
      return 1;
    };
    expect(f.name).toEqual("f");     // check the name property of f
  });

  it ("is problematic to use var name in recursion", function() {
    let wrapper = function() {
      let a = 1;
      let g = function() {
        if (a === 10) {
          return 1;
        } else {
          a += 1;
          return g() + 1;       // hum hum...
        };
      };
      let h = g;
      g = 1;                // try to test without this line...
      expect(h()).toEqual(10);  // this line throw an exception, why ?
    };
    expect(wrapper).toThrow();  // explain why it doesn't work !!!
  });

  it ("is better to use function name in recursion", function() {
    let a = 1;
    let g = function f() {
      if (a === 10) {
        return 1;
      } else {
        a += 1;
        return f() + 1;       // look here
      };
    };
    let h = g;
    g = 1;
    expect(h()).toEqual(10);  // explain why it works now !
  });

  it ("is hoisted", function() {
    let a = f();               // call f() here, even if it's not yet defined
    function f() {
      return 1;
    };
    expect(a).toEqual(1);
  });

  it ("is not hoisted if put in a var!", function() {
    let wrapper = function() {
      let a = f();           // call f() here, even if it's not yet defined - it will throw an exception
      let g = function f() {
        return 1;
      };
    };
    expect(wrapper).toThrow();
  });

  it ("the name is not even accessible if put in a var!", function() {
    let wrapper = function() {
      let g = function f() {
        return 1;
      };
      let a = f();         // call f() here, even if it's defined - it will throw an exception
    };
    expect(wrapper).toThrow();
  });

});
