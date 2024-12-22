import {mult, splitIntoWords, sum, division} from "./01";

let a: number
let b: number
let c: number
beforeEach(() => {
    a = 6
    b = 8
    c = 3
})
test('sum should be correct', () => {


    const result1 = sum(a, b)
    const result2 = sum(b, c)
    const result3 = sum(a, c)

    expect(result1).toBe(3)
    expect(result2).toBe(5)
    expect(result3).toBe(2)
})
test('multiply should be correct', () => {

    const result1 = mult(a, b)
    const result2 = mult(b, c)

    expect(result1).toBe(48)
    expect(result2).toBe(24)
})
test('splitting into words should be correct', () => {
    const sent1 = 'Hello my friends'
    const sent2 = 'JS - programming language'

    const result1 = splitIntoWords(sent1)
    const result2 = splitIntoWords(sent2)

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('Hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friends')

    expect(result2.length).toBe(4)
    expect(result2[0]).toBe('JS')
    expect(result2[1]).toBe('-')
    expect(result2[2]).toBe('programming')
    expect(result2[3]).toBe('language')
})