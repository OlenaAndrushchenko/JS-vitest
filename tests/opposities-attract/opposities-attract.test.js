import { describe, expect, it } from "vitest";
import { isLove } from "../../src/opposites-attract/opposites-attract";

describe('Opposites Attract', () => {

    it('should return true if Timmy has 1 petal and Sarah has 4', () => {
        expect(isLove(1, 4)).toBe(true);
    });

    it('should return false if Timmy has 2 petals and Sarah has 2', () => {
        expect(isLove(2, 2)).toBe(false);
    });

    it('should return true if Timmy has 0 petals and Sarah has 1', () => {
        expect(isLove(1, 4)).toBe(true);
    });

    it('should return false if Timmy has 0 petals and Sarah has 2', () => {
        expect(isLove(0, 0)).toBe(false);
    });
});