describe ("This", function() {

  it ("is window if called like a function", function() {
    let f = function() {
      return this;
    }
    expect(f()).toEqual(window);           // call f as a function
  });

  it ("is the object if called like a method", function() {
    let f = function() {
      return this;
    }
    let o = {}
    o.m = f;                             // define f to be method m on o
    expect(o.m()).toEqual(o);            // check that we get the o object here
  });

  it ("is a new object if called like a constructor", function() {
    let f = function() {
      return this;
    }
    let o = new f();                       // call f as constructor, with the new operator
    expect(o.toString()).not.toEqual("[object Window]");
    expect(typeof(o)).toEqual("object");        // check that we get an object here
  });

});
