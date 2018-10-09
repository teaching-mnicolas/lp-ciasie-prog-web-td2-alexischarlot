describe ("Mutables", function() {

  it ("RegExp are mutables", function() {
    let a = /abc/;
    expect(typeof(a)).toEqual("object");
    a.test = 24;
    expect(a.test).toBeTruthy();
    expect(a.test).toEqual(24);
  });

  it ("Arrays are mutables", function() {
    let a = [1, 2, 3];
    expect(typeof(a)).toEqual("object");
    a.test = 24;
    expect(a.test).toBeTruthy();
    expect(a.test).toEqual(24);
  });

  it ("Functions are mutables", function() {
    let a = function() {return 2;};
    expect(typeof(a)).toEqual("function");
    a.test = 24;
    expect(a.test).toBeTruthy();
    expect(a.test).toEqual(24);
  });

  it ("Objects are mutables", function() {
    let a = {};
    expect(typeof(a)).toEqual("object");
    a.test = 24;
    expect(a.test).toBeTruthy();
    expect(a.test).toEqual(24);
  });

});
