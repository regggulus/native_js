export const value5 = "monday_05"

export type MenPeopleType = {
    name: string
    age: number
}
const peoples: Array<MenPeopleType> = [
    {name: 'Alex', age: 25},
    {name: 'Alexandr', age: 33},
    {name: 'Bob', age: 35}
]

const dimychTransformator = (man: MenPeopleType) => {
    return {
        stack: ['css', 'html', 'js', 'react'],
        firstName: man.name.split(' ')[0]
    }
}

const dev = peoples.map(dimychTransformator)
const dev1 = peoples.map(man => ({
    stack: ['css', 'html', 'js', 'react'],
    firstName: man.name.split(' ')[0]
}))

const messages = peoples.map(m => `Hello ${m.name.split(' ')[0]}. Welcom`)

export const createGreetingMessage = (people: Array<MenPeopleType>) => {
    return peoples.map(m => `Hello ${m.name.split(' ')[0]}. Welcom`)
}


