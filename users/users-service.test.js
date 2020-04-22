const { validate } = require("./users-service");

describe("users-service.js", () => {
    describe(".validate()", () => {
        it("should return false if the user is missing a username or password", () => {
            expect(validate({})).toBe(false);
        });

        it("should return true when the user has a username/password", () => {
            expect(validate({ username: "foo", password: "pass"})).toBe(true);
        })

        it.todo("a username should have an 'isAdmin' property that should be either true/false");

        it.todo("the username should be at least 2 characters long.");
    })
});