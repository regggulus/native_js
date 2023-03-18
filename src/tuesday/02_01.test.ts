
function increaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
}

test('reference type test', () => {
    let user: UserType = {
        name: 'Egor',
        age: 34
    }

increaseAge(user)


    expect(user.age).toBe(35)
    const man = user
    man.age = 36
    expect(user.age).toBe(36)
})

