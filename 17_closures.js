describe ("Closure", function() {

  it ("save call context", function() {
    let f = function() {
      return b;
    };
    expect(b).toBe__();
    expect(f()).toBe__();
    var b = 1;
    expect(f()).toBe__();
    expect(f()).toEqual(__);
  });

  it ("save definition context", function() {
    let c = function() {
      let a = 1;
      let f = function() {
        return a;
      };
      a = 3;
      return f;
    };

    let d = c();
    expect(d()).toEqual(__);
  });

  it ("save reference to context", function() {
    let a = [];
    let i;
    for (i = 0; i < 3; i++) {
      let f = function() {
        return i;
      };
      a[i] = f;
    };
    expect(a[0]()).toEqual(__);
    expect(a[1]()).toEqual(__);
    expect(a[2]()).toEqual(__);
  });

  it ("needs a wrapper in loop", function() {
    let a = [];
    for (let i = 0; i < 3; i++) {
      (function(e) {
        let f = function() {
          return e;
        };
        a[e] = f;
      })(i);
    };
    expect(a[0]()).toEqual(__);
    expect(a[1]()).toEqual(__);
    expect(a[2]()).toEqual(__);
  });

});
