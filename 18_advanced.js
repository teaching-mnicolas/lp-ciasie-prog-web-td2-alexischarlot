describe ("Advanced", function() {

  it ("'for (var i = 0;...)' declares only one 'i' for all iterations", function() {
    let a = [];
    for (var i = 0; i < 3; i++) {
      let f = function() {
        return i;
      };
      a[i] = f;
    };
    expect(a[0]()).toEqual(3);
    expect(a[1]()).toEqual(3);
    expect(a[2]()).toEqual(3);
  });

  it ("'for (let i = 0;...)' declares a new 'i' for each iteration", function() {
      let a = [];
      for (let i = 0; i < 3; i++) {
        let f = function() {
          return i;
        };
        a[i] = f;
      };
      expect(a[0]()).toEqual(0);
      expect(a[1]()).toEqual(1);
      expect(a[2]()).toEqual(2);
  });
});
