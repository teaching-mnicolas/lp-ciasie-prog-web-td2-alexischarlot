describe ("Immutables", function() {

  describe ("Numbers", function() {
    it ("are immutables", function() {
      let a = 1;
      expect(typeof(a)).toEqual("number");
      a.test = 24;
      expect(a.test).toBeFalsy();
      expect(a.test).not.toEqual(24);          // this line fail, add a not
    });

    it ("are still objects", function() {
      expect((1).toString()).toEqual("1");            // call the method toString() on (1)
    });
  });

  describe ("Strings", function() {
    it ("are immutables", function() {
      let a = "coucou";
      expect(typeof(a)).toEqual("string");
      a.test = 24;
      expect(a.test).toBeFalsy();
      expect(a.test).not.toEqual(24);          // this line fail, add a not
    });

    it ("are still objects", function() {
      expect("coucou".toUpperCase()).toEqual("COUCOU");  // call the method toUpperCase() on "coucou"
    });
  });

  describe ("Booleans", function() {
    it ("are immutables", function() {
      let a = true;
      expect(typeof(a)).toEqual("boolean");
      a.test = 24;
      expect(a.test).toBeFalsy();
      expect(a.test).not.toEqual(24);          // this line fail, add a not
    });

    it ("are still objects", function() {
      expect(true.toString()).toEqual("true");        // call the method toString() on true
    });
  });

});
