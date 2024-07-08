import { describe, expect, it } from "vitest";
import { countSheep } from "../../src/counting-sheeps/counting-sheeps";

describe('Counting Sheeps', () => {

    it('should return <There are 17 sheep in total> if  list = [ true, true, true, false, true, true, true, true , true, false, true, false, true, false, false, true , true, true, true, true , false, false, true, true ]', () => {
        const list = [ true, true, true, false, true, true, true, true , true, false, true, false, true, false, false, true , true, true, true, true , false, false, true, true ];
        expect(countSheep(list)).toBe('There are 17 sheeps in total');
    });

    it('should return <Oops!!! Wolves have eaten the sheep> if  list = [ false, false, false ]', () => {
        const list = [ false, false, false ];
        expect(countSheep(list)).toBe('Oops!!! Wolves have eaten the sheep');
    });
})