const { test, expect } = require("@jest/globals")
const Engineer = require("../lib/Engineer")

test("engineer should receive all Employee properties plus its own", () => {

    const engineer1 = new Engineer("Engineer", 20, "Alan", "engineer@gmail.com", "Engi2020");

    expect(engineer1).toEqual({
        role: "Engineer",
        id: 20,
        name: "Alan",
        email: "engineer@gmail.com",
        github: "Engi2020"
    });
});