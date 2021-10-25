const validAnagram = require('./ValidAnagram');

describe("it works", () => {
    it("should work for actual anagrams", () => {
        expect(validAnagram("cat", "act")).toBe(true);
        expect(validAnagram("moto", "moot")).toBe(true);
        expect(validAnagram("dog", "god")).toBe(true);
        expect(validAnagram("care", "race")).toBe(true);
    });

    it("should return false for non-anagrams", () => {
        expect(validAnagram("stupid", "mang")).toBe(false);
        expect(validAnagram("bare", "mang")).toBe(false);
        expect(validAnagram("bilb", "mang")).toBe(false);
        expect(validAnagram("glib", "mang")).toBe(false);
    })
    
    it("should work with odd cases", () => {
        expect(validAnagram("", "")).toBe(true);
        expect(validAnagram("", "ab")).toBe(false);
        expect(validAnagram("", undefined)).toBe(false);
        expect(validAnagram(undefined, undefined)).toBe(false);
        expect(validAnagram("barriguite", "barriguite14hj2lvd1gb")).toBe(false);
    })
});