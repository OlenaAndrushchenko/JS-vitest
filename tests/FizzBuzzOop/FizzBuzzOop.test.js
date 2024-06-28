import { describe, expect, it } from 'vitest';
import FizzBuzz from '../../src/FizzBuzzOop/FizzBuzzOop';

describe('FizzBuzz', () => {
    const fizzbuzz = new FizzBuzz();

    it('if number divisible by 3 should return Fizz', () => {
        // given
        const num = 3;
        const expected = 'Fizz';

        // when
        const result = fizzbuzz.checkIfDivisible(num);

        // then
        expect(result).toBeTypeOf('string');
        expect(result).toEqual(expected);
    });

    it('if number divisible by 5 should return <Buzz>', () => {
        expect(fizzbuzz.checkIfDivisible(5)).toBe('Buzz');
    });

    it('if number divisible by 3 & 5 sould return <FizzBuzz>', () => {
        expect(fizzbuzz.checkIfDivisible(15)).toBe('FizzBuzz')
    });

    it('if number has a 3 in it should return <Fizz>', () => {
        expect(fizzbuzz.checkIfDivisible(13)).toBe('Fizz')
    });

    it('if number has a 5 in it should return <Buzz>', () => {
        expect(fizzbuzz.checkIfDivisible(52)).toBe('Buzz')
    });

});