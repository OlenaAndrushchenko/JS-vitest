import { describe, it, expect } from "vitest";
import { findThirdAngle } from "../../src/third-angle-triangle/third-angle-triangle";

describe('Third angle of the triangle', () => {

    it('should return 90, when angle1 = 30 and angle2 = 60', () => {
        const result = findThirdAngle(30, 60);
        expect(result).toBe(90);
        expect(Number.isInteger(result)).toBe(true);
    });

    it('should return 60, when angle1 = 60 and angle2 = 60', () => {
        const result = findThirdAngle(60, 60);
        expect(result).toBe(60);
        expect(Number.isInteger(result)).toBe(true);
    });

    it('should return 59, when angle1 = 43 and angle2 = 78', () => {
        const result = findThirdAngle(43, 78);
        expect(result).toBe(59);
        expect(Number.isInteger(result)).toBe(true);
    });

    it('should return 150, when angle1 = 10 and angle2 = 20', () => {
        const result = findThirdAngle(10, 20);
        expect(result).toBe(150);
        expect(Number.isInteger(result)).toBe(true);
    });

});