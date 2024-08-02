import {ManType} from "./05";

let people:  ManType[] = []

beforeEach( () => {
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitry Sidirov', age: 18}
    ]
})


test("shouid get array of greeting message", () => {
    const messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcom IT-Incubator`)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Andrew. Welcom IT-Incubator')
    expect(messages[1]).toBe('Hello Alexander. Welcom IT-Incubator')
    expect(messages[2]).toBe('Hello Dmitry. Welcom IT-Incubator')
})
