describe("Calculator()", function() {
	var calculator;
	
	beforeEach(function() {
		calculator = Calculator();
	});
	
	afterEach(function() {
		calculator = null;
	});
	
	describe("add()", function() {
		it("accepts two numbers and returns the sum", function() {
			var sum = calculator.add(1, 3);
			expect(sum).toEqual(4);
		});
	});
});