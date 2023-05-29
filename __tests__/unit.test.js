// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test("isPhoneNumber", () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});
test("isPhoneNumber", () => {
    expect(functions.isPhoneNumber("(123) 456-7890")).toBe(true);
});

test("isPhoneNumber", () => {
    expect(functions.isPhoneNumber("1234567890")).toBe(false);
});

test("isPhoneNumber", () => {
    expect(functions.isPhoneNumber("123-456-789")).toBe(false);
});


test("isEmail", () => {
    expect(functions.isEmail("example@example.com")).toBe(true);
});
test("isEmail", () => {
    expect(functions.isEmail("ex@ig.net")).toBe(true);
});
test("isEmail", () => {
    expect(functions.isEmail("example@example")).toBe(false);
});

test("isEmail", () => {
    expect(functions.isEmail("example.com")).toBe(false);
});


test("isStrongPassword", () => {
    expect(functions.isStrongPassword("example123_")).toBe(true);
});
test("isStrongPassword", () => {
    expect(functions.isStrongPassword("example")).toBe(true);
});
test("isStrongPassword", () => {
    expect(functions.isStrongPassword("ex")).toBe(false);
});
test("isStrongPassword", () => {
    expect(functions.isStrongPassword("example123_123456789")).toBe(false);
});


test("isDate", () => {
    expect(functions.isDate("01/01/2020")).toBe(true);
});
test("isDate", () => {
    expect(functions.isDate("1/1/2020")).toBe(true);
});
test("isDate", () => {
    expect(functions.isDate("01/01/20")).toBe(false);
});
test("isDate", () => {
    expect(functions.isDate("01/01/20200")).toBe(false);
});



test("isHexColor", () => {
    expect(functions.isHexColor("#FFFFFF")).toBe(true);
});
test("isHexColor", () => {
    expect(functions.isHexColor("#FFF")).toBe(true);
});
test("isHexColor", () => {
    expect(functions.isHexColor("#FFFFFFF")).toBe(false);
});
test("isHexColor", () => {
    expect(functions.isHexColor("#FFFF")).toBe(false);
});