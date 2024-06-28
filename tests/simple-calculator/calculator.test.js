import { describe, expect, it } from 'vitest';
import { calculator } from '../../src/simple-calculator/calculator';


describe('Simple Calculator', () => {

    it('can summar numbers', () => {
        // Given
        const five = 5
        const six = 6
        const operator = '+'
        // When
        const result = calculator(five,six,operator)
        // Then
        expect(result).toEqual(11)
        
    });

    it('can substract numbers', () => {
        // Given
        const three = 3
        const two = 2
        const operator = '-'
        // When
        const result = calculator(three,two,operator)
        // Then
        expect(result).toEqual(1)
        
    });

    it('can multiply numbers', () => {
        // Given
        const three = 3
        const two = 2
        const operator = '*'
        // When
        const result = calculator(three,two,operator)
        // Then
        expect(result).toEqual(6)
        
    });

    it('can divide numbers', () => {
        // Given
        const three = 3
        const two = 2
        const operator = '/'
        // When
        const result = calculator(three,two,operator)
        // Then
        expect(result).toEqual(1.5)
        
    });

    it('numbers are not numbers', () => {
        // Given
        const character = 'A'
        const twoString = '2'
        const operator = '/'
        // When
        const result = calculator(character,twoString,operator)
        // Then
        expect(result).toEqual('unknown value')
        
    });

    it('operator does not belong to the operators array should return unknown value', () => {
        expect(calculator(3,2,'%')).toBe('unknown value')
        
    });

});