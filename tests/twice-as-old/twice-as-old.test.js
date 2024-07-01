import { describe, expect, it } from 'vitest';
import { twiceAsOld } from '../../src/twice-as-old/twice-as-old';

describe('twice as old', () => {
    
    it('should return 22 when fathers age is 36 and son is 7', () => {
        expect(twiceAsOld(36, 7)).toBe(22)
    });

    it('should return 5 when fathers age is 55 and son is 30', () => {
        expect(twiceAsOld(55, 30)).toBe(5)
    });

    it('should return 0 when fathers age is 42 and son is 21', () => {
        expect(twiceAsOld(42, 21)).toBe(0)
    });

    it('should return 20 when fathers age is 22 and son is 1', () => {
        expect(twiceAsOld(22, 1)).toBe(20)
    });

    it('should return 29 when fathers age is 29 and son is 0', () => {
        expect(twiceAsOld(29, 0)).toBe(29)
    });
});