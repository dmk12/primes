describe("checkPrime", function() {
    var g = f.checkPrime;
    
    it("returns true for prime number", function() {
        expect(g(7879)).toBeTruthy();
    });
    it("returns false for non prime number", function() {
        expect(g(788)).toBeFalsy();
    });
});

describe("getPrimes", function() {
    var g = null;
    beforeEach(function () {
	    g = f.getPrimes(1000);
	  });
    it("returns an array of length 1000", function() {
        expect(g.length).toEqual(1000);
    });
    it("has first element = 2", function() {
        expect(g[0]).toEqual(2);
    });
    it("has last element = 7919", function() {
        expect(g[g.length-1]).toEqual(7919);
    });
});

describe("convToStr", function() {
    var g = f.convToStr;
    it("converts a single digit prime", function() {
        expect(g(3)).toEqual("three");
    });
    it("converts a double digit prime", function() {
        expect(g(11)).toEqual("eleven");
    });
    it("converts a triple digit prime", function() {
        expect(g(211)).toEqual("two hundred and eleven");
    });
    it("converts a triple digit prime with 0 in middle", function() {
        expect(g(101)).toEqual("one hundred and one");
    });
    it("converts a quad digit prime", function() {
        expect(g(7879)).toEqual("seven thousand eight hundred and seventy nine");
    });
    it("converts a quad digit prime with 0 in middle", function() {
        expect(g(7079)).toEqual("seven thousand and seventy nine");
    });
    it("converts a quad digit prime with two zeros in middle", function() {
        expect(g(7009)).toEqual("seven thousand and nine");
    });
    it("returns nothing when number longer than 4 digits", function() {
        expect(g(10479)).toBeFalsy();
    });
});