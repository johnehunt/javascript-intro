const calc = require('../js/myscript.js');

describe("Tesing the functions in myscript", function() {

    describe("Testing divideBy(x, y) function", function() {
      it("should return the result (2) of dividing 4 by 2", function() {
        expect(calc.divideBy(4, 2)).toBe(2);
      });
  
      it("should return the result (1.33333) of dividing 4 by 3", function() {
        expect(calc.divideBy(4, 3)).toBe(1.3333333333333333);
      });
  
      it("should return the result (POSITIVE_INFINITY) of dividing 4 by 0", function() {
        expect(calc.divideBy(4, 0)).toBe(Number.POSITIVE_INFINITY);
      });
    });
  
    describe("testing the isNumeric(num) function", function() {
      it('should return true for "4"', function() {
        expect(calc.isNumeric("4")).toBe(true);
      });
      it('should return false for "A"', function() {
        expect(calc.isNumeric("A")).toBe(false);
      });
    });
  
});
  