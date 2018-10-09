describe ("Bind", function() {

  it ("set this", function() {
    let f = function() {
      this.prop = this.prop + 1 || 1;
    };
    let o1 = {};
    let binded = f.__;    // create a new method by calling 'bind' on f, setting this to o1

    binded()

    expect(o1.prop).toBe__();
    expect(o1.prop).toEqual(__);

    let o2 = {};
    o2.m = binded;
    o2.m();

    expect(o2.prop).toBe__();
    expect(o1.prop).toEqual(__);
  });

  it ("set parameters", function() {
    let f = function(val) {
      this.prop = val;
    };
    let o1 = {};
    let binded = f.__; // create a new method by calling 'bind' on f, setting this to o1 and 2 as first arg

    let o2 = {};
    o2.m = binded;
    o2.m(1);

    expect(o2.prop).toBe__();
    expect(o1.prop).toBe__();
    expect(o1.prop).toEqual(__);
  });

});
