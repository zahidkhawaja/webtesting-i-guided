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

        it("should return 0 when called with no arguments", () => {
            expect(add()).toBe(0);
        });

        it("should return the number when called with a single number", () => {
            expect(add(3)).toBe(3);
        })

        it("should sum a list of numbers separated by a comma", () => {
            expect(add(1, 2, -5)).toBe(-2);
            expect(add(0, 2, 3)).toBe(5);
            expect(add(20, 30, 10, 20)).toBe(80);
        })

        it("should support an array of numbers", () => {
            expect(add([0, 2, 3])).toBe(5);
        })
    })
});
