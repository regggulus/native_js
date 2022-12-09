import {ManType} from "./Destructuring";

let props: ManType
beforeEach( ()=> {
   props = {
        name: "Dimych",
        age: 32,
        lesson: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: 'Makaenka street'
            }
        }
    }
})

test("", () =>{

    /*const age = props.age
    const lessons = props.lessons*/
    const {age, lesson} = props
    const {title} = props.address.street

    expect(age).toBe(32)
    expect(lesson.length).toBe(2)
    expect(title).toBe('Makaenka street')
})

