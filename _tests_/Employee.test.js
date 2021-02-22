const { test, expect } = require("@jest/globals")
const Employee = require("../lib/Employee")

test("every employee name and email should be string, and id number", () => {
    
    const employee1 = new Employee(0, "", "@gmail.com");

    expect(employee1).toEqual({
        id: 0,
        name: "",
        email: "@gmail.com",
    });
});