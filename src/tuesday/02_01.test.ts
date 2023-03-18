
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

test('array test', () => {
     let users = [
         {
             name: 'Egor',
             age: 34,
         },
         {
             name: 'Dimych',
             age: 33,
         },
     ]

    let admins = users
    admins.push({name: 'Artem', age: 28})
    expect(users[2]).toEqual({name: 'Artem', age: 28})
})

test('value type test', () => {
    let usersCount = 200

    let adminsCount = usersCount

    adminsCount ++
    expect(adminsCount).toBe(201)
})

