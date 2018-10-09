describe ("Apply Call", function() {

  it ("apply can change this", function() {
    let f = function(a, b) {
      this.pa = a;
      this.pb = b;
    }
    let o = {};
    f.__;       // call apply on f, passing o as this, and [1, 2] as args
    expect(o.pa).toBe__();
    expect(o.pa).toEqual(__);
    expect(o.pb).toBe__();
    expect(o.pb).toEqual(__);
  });

  it ("call can change this", function() {
    let f = function(a, b) {
      this.pa = a;
      this.pb = b;
    }
    let o = {};
    f.__;  // call 'call' on f, passing o as this and 1 and 2 as args
    expect(o.pa).toBe__();
    expect(o.pa).toEqual(__);
    expect(o.pb).toBe__();
    expect(o.pb).toEqual(__);
  });

});
