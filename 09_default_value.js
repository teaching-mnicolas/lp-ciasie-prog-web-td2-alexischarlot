describe ("Default value", function() {

  it ("does not have default value", function() {
    let o = {
      prop: 1
    };
    let a = o.prop1;
    expect(a).toBeUndefined();   // check that o.prop1 is undefined
  });

  it ("does have a default value", function() {
    let o = {
      prop: 1
    };
    let a = o.prop1 || "a_value";
    expect(a).not.toBeUndefined();
    expect(a).toEqual("a_value");
  });

  it ("does have a value", function() {
    let o = {
      prop: 1
    };
    let a = o.prop || "a_value";
    expect(a).not.toBeUndefined();
    expect(a).toEqual(1);
  });

});
