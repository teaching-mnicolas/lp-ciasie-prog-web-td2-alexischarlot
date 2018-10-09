describe ("Strangeness", function() {

  it ("Infinity can be modified?", function() {
    Infinity = 1;      // set Infinity to 1
    expect(Infinity).not.toEqual(1);
  });

  it ("NaN can be modified?", function() {
    NaN = 1;           // set NaN to 1
    expect(NaN).not.toEqual(1);
    expect(NaN).toEqual(NaN);
  });

  it ("undefined can be modified?", function() {
    undefined = 1;   // set undefined to 1
    expect(undefined).not.toEqual(1);
  });

  /*it ("null cannot be modified", function() {
    let fn = function() {
      null = 1;      // set null to 1 - this throw an exception
    };
    expect(fn).toThrow();
  });*/

});
