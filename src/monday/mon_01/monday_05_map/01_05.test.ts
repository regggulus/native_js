import {createGreetingMessage, MenPeopleType} from "./01_05";
import exp from "constants";

let  peoples: Array<MenPeopleType> = []

beforeEach( () => {
    peoples = [
        {name: 'Alex', age: 25},
        {name: 'Alexandr', age: 33},
        {name: 'Bob', age: 35}
    ]
})

test('should get array of greeting messages', () => {
    const messages = createGreetingMessage(peoples)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Alex. Welcom')
    expect(messages[1]).toBe('Hello Alexandr. Welcom')
    expect(messages[2]).toBe('Hello Bob. Welcom')
})