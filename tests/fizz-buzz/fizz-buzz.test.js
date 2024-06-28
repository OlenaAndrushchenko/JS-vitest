import { describe, expect, it } from "vitest";
import { fizzbuzz } from "../../src/fizz-buzz/fizz-buzz";


describe('fizzbuzz as function', () => {

    it('if number divisible by 3 should return <Fizz>', () => {

        //Given
        const num = 3
        const expected = 'Fizz'
        //When
        const result = fizzbuzz(num)
        //Then
        expect(result).toBeTypeOf('string')
        expect(result).toEqual(expected)
        
    })

    it('if number divisible by 5 should return <Buzz>', () => {

        //Given
        const num = 5
        const expected = 'Buzz'
        //When
        const result = fizzbuzz(num)
        //Then
        expect(result).toBeTypeOf('string')
        expect(result).toEqual(expected)
    })

    it('if number divisible by 3 & 5 sould return <FizzBuzz>', () => {
        
        //Given
        const num = 15
        const expected = 'FizzBuzz'
        // When
        const result = fizzbuzz(num)
        //Then
        expect(result).toBeTypeOf('string')
        expect(result).toEqual(expected)
    })

    it('if number has a 3 in it should return <Fizz>', () => {
        //Given
        const num = 13
        const expected = 'Fizz'
        //When
        const result = fizzbuzz(num) 
        //Then
        expect(result).toBeTypeOf('string')
        expect(result).toEqual(expected)
    })

    it('if number has a 5 in it should return <Buzz>', () => {
        
        // Given
        const num = 52
        const expected = 'Buzz'
        // When
        const result = fizzbuzz(num)
        // Then
        expect(result).toBeTypeOf('string')
        expect(result).toEqual(expected)
    })
})