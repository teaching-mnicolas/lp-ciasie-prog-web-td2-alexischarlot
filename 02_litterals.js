describe ("Object Litteral", function() {

  it ("define property without quotes", function() {
    let o = {
      prop: 1           // define a property prop equal to 1
    };
    expect(o.prop).toEqual(1);
  });

  it ("define property with quotes", function() {
    let o = {
      'prop': 1           // define a property "prop" equal to 1
    };
    expect(o.prop).toEqual(1);
  });

  it ("quotes are optionals", function() {
    let o = {
      "prop": 1,
      prop: 2
    };
    expect(o.prop).toEqual(2);
  });

  it ("access property with dot or []", function() {
    let o = {
      prop: 1
    };
    expect(o.prop).toEqual(1);       // access prop through o.
    expect(o["prop"]).toEqual(1);       // access prop through o[]
  });

  it ("can use number to define property", function() {
    let o = {
      1: 42       // define a property named 1 (without "")
    };
    expect(o["1"]).toEqual(42);
    expect(o[1]).toEqual(42);
  });

  it ("can use number in quote to define property", function() {
    let o = {
      "1": 42      // define a property named "1" (with "")
    };
    expect(o["1"]).toEqual(42);
    expect(o[1]).toEqual(42);
  });

  it ("an array is really an object", function() {
    let a = [1, 2, 3];
    expect(a[1]).toEqual(2);      // access case with indice 1 (without "")
    expect(a["1"]).toEqual(2);      // access case with indice "1" (with "")
  });

  it ("can modify property", function() {
    let o = {
      prop: 1
    };
    o.prop = 2;                    // set o.prop to 2
    expect(o.prop).toEqual(2);
    o["prop"] = 3;                    // set o["prop"] to 3
    expect(o.prop).toEqual(3);
  });

  it ("undefined property are, well, undefined", function() {
    let o = {
      prop: 1
    };
    expect(o.prop_2).toBeUndefined();
  });

  it ("can add propery on the fly", function() {
    let o = {
      prop: 1
    };
    expect(o.prop_2).toBeUndefined();
    o.prop_2 = 2;                     // define a new property, prop_2, equal to 2, on o
    expect(o.prop_2).not.toBeUndefined();
    expect(o.prop_2).toEqual(2);
  });

});
