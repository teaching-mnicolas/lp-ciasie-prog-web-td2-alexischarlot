describe ("Method borrowing", function() {

  it ("borrow one method for arguments", function() {
    let f = function() {
      arguments.__ = [].__;     // define a pop property on arguments equal to the pop method of the array
      let a = arguments.pop();
      expect(a).toEqual(2);
    };
    f(1, 2);
  });

  it ("create an array from arguments", function() {
    let f = function() {
      let ar = Array.prototype.slice.__(__);    // apply the slice method on arguments, with the 'call' method
      let a = ar.pop();
      expect(a).toEqual(2);
    };
    f(1, 2);
  });

});
