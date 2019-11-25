describe("Tesing the functions in myscript", function() {
  describe("Testing divideBy(x, y) function", function() {
    it("should return the result (2) of dividing 4 by 2", function() {
      expect(divideBy(4, 2)).toBe(2);
    });

    it("should return the result (1.33333) of dividing 4 by 3", function() {
      expect(divideBy(4, 3)).toBe(1.3333333333333333);
    });

    it("should return the result (POSITIVE_INFINITY) of dividing 4 by 0", function() {
      expect(divideBy(4, 0)).toBe(Number.POSITIVE_INFINITY);
    });
  });

  describe("testing the isNumeric(num) function", function() {
    it('should return true for "4"', function() {
      expect(isNumeric("4")).toBe(true);
    });
    it('should return false for "A"', function() {
      expect(isNumeric("A")).toBe(false);
    });
  });

  describe("testing enter() function", function() {
    it("should access the x and y operands of the form and set result to 2", function() {
      var body = document.getElementsByTagName("body")[0];
      const myform = document.createElement("form");
      myform.name = "myform";
      body.appendChild(myform);
      const inputx = document.createElement("input");
      inputx.name = "xoperand";
      inputx.value = "4";
      myform.appendChild(inputx);
      const inputy = document.createElement("input");
      inputy.name = "yoperand";
      inputy.value = "2";
      myform.appendChild(inputy);
      const resultElement = document.createElement("div");
      resultElement.id = "result";
      body.appendChild(resultElement);
      enter();
      expect(document.getElementById("result").innerHTML).toBe('2');
    });
  });
});
