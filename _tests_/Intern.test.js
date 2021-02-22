const Intern = require("../lib/Intern")

test("engineer should receive all Employee properties plus its own", () => {

    const intern1 = new Intern("Intern", 30, "Mike", "intern@gmail.com", "Georgia Tech");

    expect(intern1).toEqual({
        role: "Intern",
        id: 30,
        name: "Mike",
        email: "intern@gmail.com",
        school: "Georgia Tech"
    });
});