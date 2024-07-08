import { describe, expect, it } from "vitest";
import { arrSum } from "../../src/array-plus-array/array-plus-array";

describe('Array plus array', () => {

    it('should return 21 if Array 1: [1, 2, 3] / Array 2: [4, 5, 6]', () => {
        expect(arrSum([1, 2, 3], [4, 5, 6])).toBe(21)
    });

    it('should return -21 if Array 1: [-1, -2, -3] / Array 2: [-4, -5, -6]', () => {
        expect(arrSum([-1, -2, -3], [-4, -5, -6])).toBe(-21)
    });

    it('should return 15 if Array 1: [0, 0, 0] / Array 2: [4, 5, 6]', () => {
        expect(arrSum([0, 0, 0], [4, 5, 6])).toBe(15)
    });

    it('should return 2100 if Array 1: [100, 200, 300] / Array 2: [400, 500, 600]', () => {
        expect(arrSum([100, 200, 300], [400, 500, 600])).toBe(2100)
    });
});