describe ("Function", function() {

  it ("can have property", function() {
    let f = function() {
      return 1;
    };
    f.prop = 2;             // set a new property prop on f, with value 2
    expect(f()).toEqual(1);
    expect(f.prop).toEqual(2);
  });

  it ("can have method", function() {
    let f = function() {
      return 1;
    };
    f.m = function (){
      return 2;
    };           // set a new property m on f, with a value of a function that return the value 2
    expect(f()).toEqual(1);
    expect(f.m()).toEqual(2);
  });

  it ("can be passed as parameter", function() {
    let f = function(){
      return 1 ;
    };         // create a function that return the value 1
    let fu = function(a) {
      return a() + 1;
    };
    expect(fu(f)).toEqual(2);    // pass f as parameter
  });

  it ("can be returned by a function", function() {
    let f = function() {
      let fu = function(){
        return 3;
      };      // create a function that return the value 3
      return fu;        // return fu as return value
    };
    let ff = f();
    expect(ff()).toEqual(3);
  });

});
