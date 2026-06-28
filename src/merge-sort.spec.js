import { mergeSort } from "./merge-sort.js";

test("single number stays the same", () => {
    expect(mergeSort([5])).toBe([5]);
    expect(mergeSort([34])).toBe([34]);
});