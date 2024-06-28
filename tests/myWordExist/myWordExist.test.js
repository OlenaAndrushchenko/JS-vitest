// a string "abcEnglishdef"

import { describe, expect, it } from "vitest";
import { wordExist } from "../../src/myWordExist/myWordExist";

describe('Word exist or not', () => {

    it('Word english exist, should return true', () => {
        
        // Aceptance Criteria
        // Given
        const sentence = 'acbEnglishdef'
        const expected = true
        // When - Action 
        const result = wordExist(sentence)
        // Then
        expect(result).toBeTypeOf('boolean')
        expect(result).toEqual(expected)
    })
    
})