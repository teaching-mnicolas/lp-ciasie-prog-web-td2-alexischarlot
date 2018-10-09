describe ("Bind", function() {

  it ("set this", function() {
    let f = function() {
      this.prop = this.prop + 1 || 1;
    };
    let o1 = {};
    let binded = f.bind(o1);    // create a new method by calling 'bind' on f, setting this to o1

    binded()

    expect(o1.prop).toBeDefined();
    expect(o1.prop).toEqual(1);

    let o2 = {};
    o2.m = binded;
    o2.m();

    expect(o2.prop).toBeUndefined();
    expect(o1.prop).toEqual(2);
  });

  it ("set parameters", function() {
    let f = function(val) {
      this.prop = val;
    };
    let o1 = {};
    let binded = f.bind(o1,2); // create a new method by calling 'bind' on f, setting this to o1 and 2 as first arg

    let o2 = {};
    o2.m = binded;
    o2.m(1);

    expect(o2.prop).toBeUndefined();
    expect(o1.prop).toBeDefined();
    expect(o1.prop).toEqual(2);
  });

});
