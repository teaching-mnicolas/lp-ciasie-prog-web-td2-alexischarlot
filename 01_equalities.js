describe ("Equalities", function() {

  describe ("==", function() {
    it ("converts string to number", function() {
      expect(0 == '0').toBeTruthy();
    });

    it ("converts string to boolean", function() {
      expect(false == '').toBeTruthy();
    });

    it ("converts number to boolean", function() {
      expect(false == 0).toBeTruthy();
    });

    it ("converts string AND number to boolean", function() {
      expect(0 == '').toBeTruthy();
    });

    it ("compare content of strings", function() {
      expect("test" == "test").toBeTruthy();
    });

    it ("DOES NOT compare content of objects", function() {
      let o_1 = {
        a: 1
      };
      let o_2 = {
        a: 1
      };
      expect(o_1 == o_2).toBeFalsy();
    });
  });

  describe ("===", function() {
    it ("DOES NOT converts string to number", function() {
      expect(0 === '0').toBeFalsy();
    });

    it ("DOES NOT converts string to boolean", function() {
      expect(false === '').toBeFalsy();
    });

    it ("DOES NOT converts number to boolean", function() {
      expect(false === 0).toBeFalsy();
    });

    it ("DOES NOT converts string AND number to boolean", function() {
      expect(0 === '').toBeFalsy();
    });

    it ("compare content of strings", function() {
      let o1 = "test";
      let o2 = 'test';
      expect(o1 === o2).toBeTruthy();
    });

    it ("DOES NOT compare content of objects", function() {
      let o_1 = {
        a: 1
      };
      let o_2 = {
        a: 1
      };
      expect(o_1 === o_2).toBeFalsy();
    });
  });

  describe("!!", function() {
    it ("convert object to boolean", function() {
      expect(typeof(!!{})).toEqual("boolean");       // typeof returns a string in all lowercase
    });

    it ("convert string to boolean", function() {
      expect(typeof(!!"test")).toEqual("boolean");   // typeof returns a string in all lowercase
    });
  });

});
