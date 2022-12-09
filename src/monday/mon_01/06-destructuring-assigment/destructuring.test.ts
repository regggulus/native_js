test("", () =>{
    let props = {
        name: "Dimych",
        age: 32,
        lesson: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: 'Makaenka street'
            }
        }
    }
    /*const age = props.age
    const lessons = props.lessons*/
    const {age, lesson} = props
    const a = props.age
    const l  = props.lesson

    expect(age).toBe(32)
    expect(lesson.length).toBe(2)

    expect(a).toBe(32)
    expect(l.length).toBe(2)
})