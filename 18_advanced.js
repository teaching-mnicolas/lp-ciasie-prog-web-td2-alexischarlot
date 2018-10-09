describe ("Advanced", function() {

  it ("'for (var i = 0;...)' declares only one 'i' for all iterations", function() {
    let a = [];
    for (var i = 0; i < 3; i++) {
      let f = function() {
        return i;
      };
      a[i] = f;
    };
    expect(a[0]()).toEqual(__);
    expect(a[1]()).toEqual(__);
    expect(a[2]()).toEqual(__);
  });

  it ("'for (let i = 0;...)' declares a new 'i' for each iteration", function() {
      let a = [];
      for (let i = 0; i < 3; i++) {
        let f = function() {
          return i;
        };
        a[i] = f;
      };
      expect(a[0]()).toEqual(__);
      expect(a[1]()).toEqual(__);
      expect(a[2]()).toEqual(__);
  });
});
