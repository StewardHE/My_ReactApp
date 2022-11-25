import timesTwo from "./functions";

// this is a test function
test("Multiplies by two", () => {
    expect(timesTwo(4)).toBe(8);
});