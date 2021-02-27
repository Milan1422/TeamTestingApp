const { test, expect } = require("@jest/globals")
const Manager = require("../lib/Manager")

test("manager should reciver all properties from Employee plus its own", () => {
    
    const manager1 = new Manager(10, "Luis", "aap@gmail.com", 1044);

    expect(manager1).toEqual({
        id: 10,
        name: "Luis",
        email: "aap@gmail.com",
        officeNumber: 1044
    });
});