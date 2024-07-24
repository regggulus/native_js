
test('should be tale old', ()=> {
    const age = [10, 24, 36, 48, 55, 63, 78, 88, 96, 101]
    const predicat = (age: number) => {
        return age > 48
    }
    const oldAges = age.filter(predicat)

    expect(oldAges.length).toBe(6);
    expect(oldAges[0]).toBe(55)
})
export {}
