describe ("Apply Call", function() {

  it ("apply can change this", function() {
    let f = function(a, b) {
      this.pa = a;
      this.pb = b;
    }
    let o = {};
    f.apply(o,[1,2]);       // call apply on f, passing o as this, and [1, 2] as args
    expect(o.pa).toBeDefined();   
    expect(o.pa).toEqual(1);
    expect(o.pb).toBeDefined();
    expect(o.pb).toEqual(2);
  });

  it ("call can change this", function() {
    let f = function(a, b) {
      this.pa = a;
      this.pb = b;
    }
    let o = {};
    f.call(o,1,2);  // call 'call' on f, passing o as this and 1 and 2 as args
    expect(o.pa).toBeDefined();
    expect(o.pa).toEqual(1);
    expect(o.pb).toBeDefined();
    expect(o.pb).toEqual(2);
  });

});
