const { add } = require('./calculator.js');

describe("calculator.js", () => {
    // Test case
    it("should run tests without errors", () => {
        // Arrange 
        // Act 
        // Assert 
        expect(true).toBe(true);
    });

    describe(".add()", () => {
        it("should add two numbers", () => {
            expect(add(2, 2)).toBe(4);
            expect(add(11, 100)).toBe(111);
        });

        it.todo("should return 0 when called with no arguments");
    })
});
